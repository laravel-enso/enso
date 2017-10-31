<template>

    <card icon="fa fa-comments-o"
        refresh search footer
        :title="title || __('Comments')"
        :overlay="loading"
        @refresh="refresh()"
        :open="open"
        ref="card"
        @query-update="query = $event"
        :badge="count"
        :controls="1"
        :footer-items="1">
        <a slot="control-1" class="card-header-icon">
            <span class="icon is-small"
                @click="create()">
                <i class="fa fa-plus-square"></i>
            </span>
        </a>
        <div class="has-padding-medium comments-wrapper">
            <comment is-new
                :id="id"
                :type="type"
                v-if="Object.keys(comment).length"
                :comment="comment"
                :index="-1"
                @cancel-add="comment={}"
                @add="add($event)">
            </comment>
            <comment v-for="(comment, index) in filteredComments"
                :comment="comment"
                :index="index"
                @delete="destroy($event)"
                :key="index">
            </comment>
        </div>
        <a slot="footer-item-1"
            @click="get()">
            {{ __('more') }}
        </a>
    </card>

</template>

<script>

    import Card from '../bulma/Card.vue';
    import Comment from './Comment.vue';
    import { mapGetters } from 'vuex';
    import { mapState } from 'vuex';

    export default {
        name: 'Comments',

        components: { Card, Comment },

        props: {
            open: {
                type: Boolean,
                default: false
            },
            id: {
                type: Number,
                required: true
            },
            type: {
                type: String,
                required: true
            },
            title: {
                type: String,
                default: ''
            },
            paginate: {
                type: Number,
                default: 5
            }
        },

        computed: {
            ...mapGetters('locale', ['__']),
            ...mapState(['user']),
            filteredComments() {
                return this.query
                    ? this.comments.filter(comment => {
                        return comment.body.toLowerCase().indexOf(this.query.toLowerCase()) > -1
                            || comment.owner.fullName.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
                    })
                    : this.comments;
            }
        },

        data() {
            return {
                comments: [],
                count: 0,
                offset: 0,
                comment: {},
                loading: false,
                query: null
            };
        },

        methods: {
            get() {
                this.loading = true;

                axios.get(route('core.comments.index', [], false), { params: this.getParams() }).then(response => {
                    this.comments = this.offset
                        ? this.comments.concat(response.data.comments)
                        : response.data.comments;

                    this.count = response.data.count;
                    this.offset = this.comments.length;
                    this.loading = false;
                }).catch(error => {
                    this.loading = false;
                    this.handleError(error);
                });
            },
            getParams() {
                return {
                    id: this.id,
                    type: this.type,
                    offset: this.offset,
                    paginate: this.paginate
                };
            },
            refresh() {
                this.offset = 0;
                this.get();
            },
            emptyComment() {
                return {
                    body: '',
                    taggedUserList: [],
                    owner: {
                        avatarId: this.user.avatarId,
                        fullName: this.user.fullName
                    }
                };
            },
            create() {
                if (Object.keys(this.comment).length) {
                    return false;
                }

                if (this.$refs.card.collapsed) {
                    this.$refs.card.toggle();
                }

                this.comment=this.emptyComment();
            },
            add(event) {
                this.comments.unshift(event.comment);
                this.count = event.count;
                this.offset++;
                this.comment = {};
            },
            destroy(index) {
                this.comments.splice(index,1);
                this.count--;
            },
        },

        mounted() {
            this.get();
        }
    }

</script>

<style>

    .comments-wrapper {
        max-height: 370px;
        overflow-y: auto;
    }

</style>