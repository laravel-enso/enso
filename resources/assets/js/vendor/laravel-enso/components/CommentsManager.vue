<template>

    <div :class="'box collapsed-box box-' + headerClass">
        <div class="box-header with-border">
            <i class="fa fa-comments-o"></i>
            <h3 class="box-title">
                {{ title || labels.comments }}
            </h3>
             <div class="box-tools pull-right">
                <i v-if="comments.length > 1"
                    class="fa fa-search">
                </i>
                <input type="text"
                    size="15"
                    class="comments-filter margin-right-xs"
                    v-model="query"
                    v-if="comments.length > 1">
                <span class="badge bg-orange">
                    {{ count }}
                </span>
                <button type="button"
                    class="btn btn-box-tool btn-sm"
                    @click="get()">
                    <i class="fa fa-refresh"></i>
                </button>
                <button class="btn btn-box-tool btn-sm"
                    data-widget="collapse">
                    <i class="fa fa-plus"></i>
                </button>
            </div>
        </div>
        <div class="box-body comments">
            <div class="item"
                v-for="(comment, index) in filteredComments">
                <img :src="'/core/avatars/' + comment.owner.avatarId"
                    alt="user image"
                    class="offline">
                <p class="message">
                    <small class="pull-right margin-right-xs">
                        <span v-if="editedIndex === null" :key="'buttons-' + index">
                            <span v-if="comment.isEdited">
                                <i class="fa fa-pencil-square-o"></i>
                                {{ comment.updated_at | timeFromNow }}
                            </span>
                            <span>
                                <i class="fa fa-pencil"></i>
                                {{ comment.created_at | timeFromNow }}
                            </span>
                        </span>
                        <i class="btn btn-xs btn-warning fa fa-pencil-square-o margin-right-xs"
                            :key="'edit-' + index"
                            @click="editedIndex = index;taggedUsers=comment.taggedUserList"
                            v-if="comment.isEditable && editedIndex === null">
                        </i>
                        <i class="btn btn-xs btn-danger fa fa-trash-o"
                            :key="'delete-' + index"
                            @click="idToBeDeleted = comment.id; showModal = true"
                            v-if="comment.isDeletable && editedIndex === null">
                        </i>
                        <i class="btn btn-xs btn-success fa fa-check"
                            @click="patch(comment)"
                            :key="'update-' + index"
                            v-if="editedIndex === index && comment.body.trim()">
                        </i>
                    </small>
                <a href="#"
                    class="name">
                    {{ comment.owner.fullName }}
                </a>
                <span v-html="highlightTaggedUsers(comment)"
                    v-if="editedIndex !== index">
                </span>
                <textarea class="form-control comment"
                    v-focus
                    v-inputor-on-focus
                    v-if="editedIndex === index"
                    v-model="comment.body">
                </textarea>
                </p>
            </div>
            <center>
                <small class="comments-more"
                    @click="more()"
                    v-if="comments.length">
                    {{ labels.more }}
                </small>
            </center>
        </div>
        <div class="box-footer" v-if="editedIndex === null">
            <div class="input-group">
                <textarea class="form-control comment"
                    v-inputor-on-focus
                    v-model="input"
                    :id="'textarea-' + _uid">
                </textarea>
                <div class="input-group-btn">
                    <button type="button"
                        @click="hasComment ? post() : null"
                        class="btn btn-success">
                        <i class="fa fa-check"
                            v-if="hasComment">
                        </i>
                        <i v-else
                            class="fa fa-ellipsis-h">
                        </i>
                    </button>
                </div>
            </div>
        </div>
        <div class="overlay" v-if="loading">
            <i class="fa fa-spinner fa-spin spinner-custom" ></i>
        </div>
        <modal :show="showModal"
            @cancel-action="showModal = false; idToBeDeleted = null"
            @commit-action="destroy()">
        </modal>
    </div>

</template>

<script>

    export default {
        props: {
            id: {
                type: Number,
                required: true
            },
            type: {
                type: String,
                required: true
            },
            headerClass: {
                type: String,
                default: 'primary'
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
            },
            hasComment() {
                return this.input.trim();
            }
        },

        data() {
            return {
                labels: Store.labels,
                input: '',
                comments: [],
                count: 0,
                offset: 0,
                editedIndex: null,
                taggedUsers: [],
                query: "",
                loading: false,
                url: window.location.href,
                showModal: false,
                idToBeDeleted: null
            };
        },

        directives: {
            inputorOnFocus: {
                inserted(el, binding, vnode) {
                    $(el).atwho({
                        at: "@",
                        searchKey: "fullName",
                        displayTpl: "<li id='${id}' name='${fullName}'><img src='/core/avatars/${avatarId}' alt='User Image' class='atwho'> ${fullName}</li>",
                        insertTpl: "@${fullName}",
                        acceptSpaceBar: true,
                        callbacks: {
                            remoteFilter: _.debounce((query, callback) => {
                                axios.get('/core/comments/getTaggableUsers/' + query).then(response => {
                                    callback(response.data);
                                });
                            }, 200)
                        }
                    });

                    $(el).on('inserted.atwho', (event, li, query) => {
                        vnode.context.taggedUsers.push({
                            'id': $(li).attr('id'),
                            'fullName': $(li).attr('name')
                        });
                    });
                }
            },
            unbind(el, binding, vnode) {
                $(el).atwho('destroy');
            }
        },

        methods: {
            get() {
                this.offset = 0;
                this.loading = true;

                axios.get('/core/comments', { params: this.getParams() }).then(response => {
                    this.comments = response.data.list;
                    this.count = response.data.count;
                    this.offset = this.comments.length;
                    this.loading = false;
                }).catch(error => {
                    this.loading = false;
                    this.reportEnsoException(error);
                });
            },
            more() {
                this.loading = true;

                axios.get('/core/comments', { params: this.getParams() }).then(response => {
                    this.comments = this.comments.concat(response.data.list);
                    this.count = response.data.count;
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
            post() {
                this.loading = true;

                axios.post('/core/comments', this.postParams()).then(response => {
                    this.comments.unshift(response.data.comment);
                    this.count = response.data.count;
                    this.loading = false;
                }).catch(error => {
                    this.loading = false;
                    this.reportEnsoException(error);
                });
            },
            postParams() {
                this.syncTaggedUsers(this.input);

                let params = {
                    id: this.id,
                    type: this.type,
                    body: this.input,
                    taggedUserList: this.taggedUsers,
                    url: this.url
                };

                this.input = '';
                this.taggedUsers = [];

                return params;
            },
            patch(comment) {
                let index = this.comments.indexOf(comment);
                this.loading = true;

                axios.patch('/core/comments/' + comment.id, this.patchParams(comment)).then(response => {
                    this.loading = false;
                    this.comments.splice(index, 1);
                    this.comments.unshift(response.data.comment);
                }).catch(error => {
                    this.loading = false;
                    this.reportEnsoException(error);
                });
            },
            patchParams(comment) {
                this.syncTaggedUsers(comment.body);
                comment.taggedUserList = this.taggedUsers;
                comment.url = this.url;
                this.editedIndex = null;
                this.taggedUsers = [];

                return comment;
            },
            destroy() {
                this.showModal = false;
                this.loading = true;

                axios.delete('/core/comments/' + this.idToBeDeleted).then(response => {
                    let self = this;

                    let index = this.comments.findIndex(comment => {
                        return comment.id === self.idToBeDeleted;
                    });

                    this.comments.splice(index,1);
                    this.count--;
                    this.loading = false;
                    this.idToBeDeleted = null;
                }).catch(error => {
                    this.loading = false;
                    this.reportEnsoException(error);
                });
            },
            syncTaggedUsers(body) {
                let self = this;

                this.taggedUsers.forEach(function(user, index) {
                    if (!body.includes(user.fullName)) {
                        self.taggedUsers.splice(index, 1);
                    }
                });
            },
            highlightTaggedUsers(comment) {
                let body = comment.body;

                comment.taggedUserList.forEach(user => {
                    let highlightedName = '<span style="color: #3097d1;">' + '@' + user.fullName + '</span>';
                    body = body.replace('@' + user.fullName, highlightedName);
                })

                return body;
            }
        },

        mounted() {
            this.get();
        }
    }

</script>

<style>

    .atwho-view ul li > img {
        width: 25px;
        height: 25px;
    }

    .box-body.comments {
        overflow-y:scroll;
        max-height: 300px
    }

    p.message {
        overflow-x:hidden
    }

    textarea.comment {
        resize:vertical;
    }

    .comments-more {
        cursor: pointer;
        color: #909090;
    }

</style>