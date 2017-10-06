<template>

    <div class="item">
        <span>
            {{ index + 1 }}.
        </span>
        <img :src="'/core/avatars/' + comment.owner.avatarId"
            alt="user image"
            class="offline">
        <p class="message">
            <small class="pull-right margin-right-xs">
                <span v-if="!isNew">
                    <span v-if="comment.isEdited">
                        <i class="fa fa-pencil-square-o"></i>
                        {{ comment.updated_at | timeFromNow }}
                    </span>
                    <span>
                        <i class="fa fa-pencil"></i>
                        {{ comment.created_at | timeFromNow }}
                    </span>
                </span>
                <span v-if="!isNew && !isEditing">
                    <i class="btn btn-xs btn-warning fa fa-pencil-square-o margin-right-xs"
                        @click="originalBody=comment.body;"
                        v-if="comment.isEditable">
                    </i>
                    <i class="btn btn-xs btn-danger fa fa-trash-o"
                        @click="showModal=true"
                        v-if="comment.isDeletable">
                    </i>
                </span>
            </small>
        <a href="#"
            class="name">
            {{ comment.owner.fullName }}
        </a>
        <span v-html="highlightTaggedUsers"
            v-if="!isEditing && !isNew">
        </span>
        <inputor :comment="comment"
            :is-new="isNew"
            :is-editing="isEditing"
            @cancel-edit="comment.body=originalBody;originalBody=null"
            @cancel-add="$emit('cancel-add')"
            @update="update()"
            @post="post()">
        </inputor>
        </p>
        <modal :show="showModal"
            @cancel-action="showModal=false"
            @commit-action="destroy()">
        </modal>
    </div>

</template>

<script>

    export default {
        props: {
            comment: {
                type: Object
            },
            index: {
                type: Number,
                default: null
            },
            isNew: {
                type: Boolean,
                default: false
            },
            id: {
                type: Number,
            },
            type: {
                type: String,
            }
        },

        computed: {
            highlightTaggedUsers() {
                let body = this.comment.body;

                this.comment.taggedUserList.forEach(user => {
                    let highlighted = '<span style="color: #3097d1;">' + '@' + user.fullName + '</span>';
                    body = body.replace('@' + user.fullName, highlighted);
                });

                return body;
            },
            isEditing() {
                return this.originalBody !== null;
            }
        },

        data() {
            return {
                showModal: false,
                originalBody: null,
                url: window.location.href,
            };
        },

        methods: {
            post() {
                console.log(this.$parent.$parent);
                this.$parent.$parent.loading = true;
                axios.post('/core/comments', this.postParams()).then(response => {
                    this.$emit('add', response.data)
                    this.$parent.$parent.loading = false;
                }).catch(error => {
                    this.$parent.$parent.loading = false;
                    this.reportEnsoException(error);
                });
            },
            postParams() {
                return {
                    id: this.id,
                    type: this.type,
                    body: this.comment.body,
                    taggedUserList: this.comment.taggedUserList,
                    url: this.url
                };
            },
            update() {
                if (this.comment.body === this.originalBody) {
                    this.originalBody = null;
                    return true;
                }

                this.$parent.$parent.loading = true;
                this.syncTaggedUsers();
                this.comment.url = this.url; //fixme

                axios.patch('/core/comments/' + this.comment.id, this.comment).then(response => {
                    Object.assign(this.comment, response.data.comment);
                    this.$parent.$parent.loading = false;
                    this.originalBody = null;
                }).catch(error => {
                    this.$parent.$parent.loading = false;
                    this.reportEnsoException(error);
                });
            },
            syncTaggedUsers() {
                let self = this;

                this.comment.taggedUserList.forEach(function(user, index) {
                    if (!self.comment.body.includes(user.fullName)) {
                        self.comment.taggedUserList.splice(index, 1);
                    }
                });
            },
            destroy() {
                this.showModal = false;
                this.$parent.$parent.loading = true;

                axios.delete('/core/comments/' + this.comment.id).then(response => {
                    this.$emit('delete', this.index)
                    this.$parent.$parent.loading = false;
                }).catch(error => {
                    this.$parent.$parent.loading = false;
                    this.reportEnsoException(error);
                });
            }
        }
    }

</script>

<style>

    .box-body.comments {
        overflow-y:scroll;
        max-height: 300px;
    }

    p.message {
        overflow-x: hidden;
    }

    .chat .item>.message {
        margin-left: 60px;
    }

    textarea.comment {
        resize: vertical;
    }

</style>