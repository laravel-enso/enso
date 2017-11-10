<template>

    <article class="media">
        <figure class="media-left">
            <p class="image is-48x48">
                <img :src="getAvatarLink(comment)"
                    alt="user image"
                    class="avatar"
                    width="32">
            </p>
        </figure>
        <div class="media-content">
            <div class="content comment">
                <p>
                    <a>
                        {{ comment.owner.fullName }}
                    </a>
                    <b>{{ __('wrote this') }}</b>
                    {{ comment.updated_at || comment.created_at | timeFromNow }}
                    <span class="is-pulled-right"
                        v-if="comment.isEdited">
                        {{ __('edited') }}</b>
                    </span>
                </p>
                <span v-html="highlightTaggedUsers"
                    class="comment-body"
                    v-if="!isEditing && !isNew">
                </span>
                <inputor v-if="isEditing || isNew"
                     @save-comment="isNew ? post() : update()"
                    :comment="comment"
                    :is-new="isNew"
                    :is-editing="isEditing">
                </inputor>
            </div>
        </div>
        <div class="media-right"
            v-if="isNew || isEditing">
            <span v-if="isEditing">
                <a class="button is-small is-warning"
                    @click="comment.body=originalBody;originalBody=null">
                    <span class="icon is-small">
                        <i class="fa fa-ban"></i>
                    </span>
                </a>
                <a class="button is-small is-success"
                    @click="update()"
                    v-if="comment.body.trim()">
                    <span class="icon is-small">
                        <i class="fa fa-check"></i>
                    </span>
                </a>
            </span>
            <span v-if="isNew">
                <a class="button is-small is-warning"
                    @click="$emit('cancel-add')">
                    <span class="icon is-small">
                        <i class="fa fa-ban"></i>
                    </span>
                </a>
                <a class="button is-small is-success"
                    @click="post()"
                    v-if="comment.body.trim()">
                    <span class="icon is-small">
                        <i class="fa fa-plus"></i>
                    </span>
                </a>
            </span>
        </div>
        <div class="media-right"
            v-if="!isNew && !isEditing">
            <div class="level-item"
                v-if="!isNew && !isEditing">
                    <a class="button is-small is-warning has-margin-right-small"
                        v-if="comment.isEditable"
                        @click="originalBody=comment.body;">
                        <span class="icon is-small">
                            <i class="fa fa-pencil"></i>
                        </span>
                    </a>
                    <a class="button is-small is-danger"
                        @click="showModal=true"
                        v-if="comment.isDeletable">
                        <span class="icon is-small">
                            <i class="fa fa-trash-o"></i>
                        </span>
                    </a>
            </div>
        </div>
        <modal :show="showModal"
            @cancel-action="showModal=false"
            @commit-action="destroy()">
        </modal>
    </article>

</template>

<script>

import { mapGetters } from 'vuex';
import Inputor from './Inputor.vue';
import Modal from '../bulma/Modal.vue';

export default {
    name: 'Comment',

    components: { Inputor, Modal },

    props: {
        comment: {
            type: Object,
        },
        index: {
            type: Number,
            default: null,
        },
        isNew: {
            type: Boolean,
            default: false,
        },
        id: {
            type: Number,
        },
        type: {
            type: String,
        },
    },

    computed: {
        ...mapGetters('locale', ['__']),
        ...mapGetters(['avatarLink']),
        highlightTaggedUsers() {
            let { body } = this.comment;

            this.comment.taggedUserList.forEach((user) => {
                const highlighted = `${'<span class="highlight">@'}${user.fullName}</span>`;
                body = body.replace(`@${user.fullName}`, highlighted);
            });

            return body;
        },
        isEditing() {
            return this.originalBody !== null;
        },
    },

    data() {
        return {
            showModal: false,
            originalBody: null,
            path: this.$route.path,
        };
    },

    methods: {
        post() { // fixme needs to be moved in parent
            this.$parent.$parent.loading = true;
            axios.post(route('core.comments.store', [], false), this.postParams()).then((response) => {
                this.$emit('add', response.data);
                this.$parent.$parent.loading = false;
            }).catch((error) => {
                this.$parent.$parent.loading = false;
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
        update() {
            if (this.comment.body === this.originalBody) {
                this.originalBody = null;
                return;
            }

            this.$parent.$parent.loading = true;
            this.syncTaggedUsers();
            this.comment.path = this.path; // fixme

            axios.patch(route('core.comments.update', this.comment.id, false), this.comment).then((response) => {
                Object.assign(this.comment, response.data.comment);
                this.$parent.$parent.loading = false;
                this.originalBody = null;
            }).catch((error) => {
                this.$parent.$parent.loading = false;
                this.handleError(error);
            });
        },
        syncTaggedUsers() {
            const self = this;

            this.comment.taggedUserList.forEach((user, index) => {
                if (!self.comment.body.includes(user.fullName)) {
                    self.comment.taggedUserList.splice(index, 1);
                }
            });
        },
        destroy() { // fixme needs to be moved in parent
            this.showModal = false;
            this.$parent.$parent.loading = true;

            axios.delete(route('core.comments.destroy', this.comment.id, false)).then(() => {
                this.$emit('delete', this.index);
                this.$parent.$parent.loading = false;
            }).catch((error) => {
                this.$parent.$parent.loading = false;
                this.handleError(error);
            });
        },
        getAvatarLink(comment) {
            return this.isNew
                ? this.avatarLink
                : route('core.avatars.show', comment.owner.avatarId || 'null', false).toString();
        },
    },
};

</script>

<style>

    .comment-wrapper {
        background-color: #f5f5f5;
        padding: 12px;
        margin-bottom: 12px;
    }

    .column.avatar {
        width: 60px;
    }

    img.avatar {
        border: 1px solid red;
    }

    .columns.is-gapless > .column.comment-body {
        padding: 0 10px 0 10px;
        overflow-x: hidden;
    }

    .column.comment-edit-controls {
        width: 48px;
    }

    .column.comment-controls {
        width:223px;
    }

    .level-item.time-from-now {
        flex-direction: column;
        align-items: flex-end;
    }

    span.highlight {
        color: #3097d1;
    }

    div.media-content > div.content.comment {
        overflow-x: auto;
    }

    span.comment-body {
        word-break: break-all;
    }

</style>
