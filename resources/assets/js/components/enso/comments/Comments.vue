<template>

    <card icon="fas fa-comments"
        refresh
        :search="comments.length > 1"
        :title="title || __('Comments')"
        :overlay="loading"
        @refresh="refresh()"
        :collapsed="!open || isEmpty"
        ref="card"
        @query-update="query = $event"
        @expand="isEmpty && !comment ? $refs.card.collapse() : null"
        :badge="count"
        :controls="1">
        <card-control slot="control-1"
            @click="create()">
            <span class="icon is-small">
                <i class="fas fa-plus-square"></i>
            </span>
        </card-control>
        <div class="has-padding-medium wrapper">
            <comment is-new
                :id="id"
                :type="type"
                v-if="comment"
                :comment="comment"
                :index="-1"
                @cancel-add="comment = null"
                @save-comment="add()">
            </comment>
            <comment v-for="(comment, index) in filteredComments"
                :comment="comment"
                :index="index"
                @save-comment="update(comment)"
                @delete="destroy(index)"
                :key="index">
            </comment>
            <div class="has-text-centered has-margin-top-large">
                <button class="button is-naked has-text-grey"
                    @click="get()">
                    &bull; &bull; &bull;
                </button>
            </div>
        </div>
    </card>

</template>

<script>

import { mapGetters, mapState } from 'vuex';
import Card from '../bulma/Card.vue';
import CardControl from '../bulma/CardControl.vue';
import Comment from './Comment.vue';


export default {
    name: 'Comments',

    components: { Card, CardControl, Comment },

    props: {
        open: {
            type: Boolean,
            default: false,
        },
        id: {
            type: Number,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            default: '',
        },
        paginate: {
            type: Number,
            default: 5,
        },
    },

    computed: {
        ...mapGetters('locale', ['__']),
        ...mapState(['user']),
        isEmpty() {
            return this.count === 0;
        },
        filteredComments() {
            return this.query
                ? this.comments.filter(comment => comment.body.toLowerCase()
                    .indexOf(this.query.toLowerCase()) > -1
                    || comment.owner.fullName.toLowerCase().indexOf(this.query.toLowerCase()) > -1)
                : this.comments;
        },
    },

    data() {
        return {
            comments: [],
            count: 0,
            offset: 0,
            comment: null,
            loading: false,
            query: null,
            path: this.$route.path,
        };
    },

    created() {
        this.get();
    },

    methods: {
        get() {
            this.loading = true;

            axios.get(route('core.comments.index', [], false), { params: this.getParams() }).then(({ data }) => {
                this.comments = this.offset
                    ? this.comments.concat(data.comments)
                    : data.comments;

                this.count = data.count;
                this.offset = this.comments.length;
                this.loading = false;
            }).catch((error) => {
                this.loading = false;
                this.handleError(error);
            });
        },
        getParams() {
            return {
                id: this.id,
                type: this.type,
                offset: this.offset,
                paginate: this.paginate,
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
                    fullName: this.user.fullName,
                },
            };
        },
        create() {
            if (this.comment) {
                return;
            }

            this.comment = this.emptyComment();

            if (this.$refs.card.collapsed) {
                this.$refs.card.toggle();
            }
        },
        add() {
            if (!this.comment.body.trim()) {
                return;
            }

            this.loading = true;

            axios.post(route('core.comments.store', [], false), this.postParams()).then(({ data }) => {
                this.comments.unshift(data.comment);
                this.count = data.count;
                this.offset++;
                this.comment = null;
                this.loading = false;
            }).catch((error) => {
                this.loading = false;
                this.handleError(error);
            });
        },
        postParams() {
            return {
                id: this.id,
                type: this.type,
                body: this.comment.body,
                taggedUserList: this.comment.taggedUserList,
                path: this.path,
            };
        },
        update(comment) {
            this.syncTaggedUsers(comment);
            comment.path = this.path;
            this.loading = true;

            axios.patch(route('core.comments.update', comment.id, false), comment).then(({ data }) => {
                Object.assign(comment, data.comment);
                this.loading = false;
            }).catch((error) => {
                this.loading = false;
                this.handleError(error);
            });
        },
        syncTaggedUsers(comment) {
            comment.taggedUserList.forEach((user, index) => {
                if (!comment.body.includes(user.fullName)) {
                    comment.taggedUserList.splice(index, 1);
                }
            });
        },
        destroy(index) {
            this.loading = true;

            axios.delete(route('core.comments.destroy', this.comments[index].id, false)).then(({ data }) => {
                this.comments.splice(index, 1);
                this.count = data.count;
                this.loading = false;
            }).catch((error) => {
                this.$parent.$parent.loading = false;
                this.handleError(error);
            });
        },
    },
};

</script>

<style scoped>

    .wrapper {
        max-height: 500px;
        overflow-y: auto;
    }

</style>
