<template>

    <box :theme="theme"
        collapsible refresh search removable
        :border="!solid"
        :solid="solid"
        :body-style="{'max-height': '415px', 'overflow-y': 'auto'}"
        :open="open"
        footer
        @refresh="refresh()"
        icon="fa fa-comments-o"
        :title="title || labels.comments"
        :overlay="loading"
        ref="box"
        @query-update="query = $event"
        :badge="count">
        <span slot="btn-box-tool">
            <button class="btn btn-box-tool btn-sm fa fa-plus-square"
                @click="create()">
            </button>
        </span>
        <div class="chat">
            <div class="new-comment">
                <comment is-new
                    :id="id"
                    :type="type"
                    v-if="Object.keys(comment).length"
                    :comment="comment"
                    @cancel-add="comment={}"
                    @add="add($event)">
                </comment>
            </div>
            <div class="comments">
                <comment v-for="(comment, index) in filteredComments"
                    :comment="comment"
                    :index="index"
                    @delete="destroy($event)"
                    :key="index">
                </comment>
            </div>
        </div>
        <span slot="footer">
            <center>
                <small class="comments-more"
                    @click="get()"
                    v-if="comments.length">
                    {{ labels.more }}
                </small>
            </center>
        </span>
    </box>

</template>

<script>

    export default {
        props: {
            theme: {
                type: String,
                default: 'primary'
            },
            open: {
                type: Boolean,
                default: false
            },
            solid: {
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
                labels: Store.labels,
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

                axios.get('/core/comments', { params: this.getParams() }).then(response => {
                    this.comments = this.offset
                        ? this.comments.concat(response.data.comments)
                        : response.data.comments;

                    this.count = response.data.count;
                    this.offset = this.comments.length;
                    this.loading = false;
                }).catch(error => {
                    this.loading = false;
                    this.reportEnsoException(error);
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
                        avatarId: Store.user.avatarId,
                        fullName: Store.user.fullName
                    }
                };
            },
            create() {
                if (Object.keys(this.comment).length) {
                    return false;
                }

                if (this.$refs.box.collapsed) {
                    this.$refs.box.toggle();
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

    .chat > .comments {
        overflow-y: auto;
        max-height: 300px;
    }

    .comments-more {
        cursor: pointer;
        color: #909090;
    }

</style>