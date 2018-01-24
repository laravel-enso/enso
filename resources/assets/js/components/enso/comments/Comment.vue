<template>

    <article class="media"
        @mouseover="controls = true"
        @mouseleave="!dialog ? controls = false: null">
        <figure class="media-left">
            <p class="image is-48x48">
                <img :src="avatar"
                    alt="User Avatar"
                    class="avatar">
            </p>
        </figure>
        <div class="media-content">
            <div class="has-margin-bottom-medium has-text-grey" v-if="!isNew">
                <a><b>{{ comment.owner.fullName }}</b></a>
                <span>
                    {{ comment.updated_at || comment.created_at | timeFromNow }}
                </span>
                <span v-if="comment.isEdited">
                    &bull; {{ __('edited') }}
                </span>
                <div class="is-pulled-right is-flex"
                    v-if="!isNew && !isEditing && controls">
                    <button class="button is-naked is-small has-margin-right-small"
                        v-if="comment.isEditable"
                        @click="originalBody=comment.body;">
                        <span class="icon is-small has-text-grey">
                            <fa icon="pencil-alt"></fa>
                        </span>
                    </button>
                    <popover placement="bottom-end"
                        v-if="comment.isDeletable"
                        @confirm="$emit('delete')"
                        @show="dialog = true"
                        @hide="dialog = controls = false">
                        <button class="button is-naked is-small"
                            @click="dialog=true">
                            <span class="icon is-small has-text-grey">
                                <fa icon="trash-alt"></fa>
                            </span>
                        </button>
                    </popover>
                </div>
            </div>
            <div v-html="highlightTaggedUsers"
                class="comment-body"
                v-if="!isEditing && !isNew">
            </div>
            <div v-else>
                <inputor v-on="$listeners"
                    :comment="comment">
                </inputor>
                <div>
                    <button type="button" class="button is-small is-outlined has-margin-right-small"
                        @click="isNew ? $emit('cancel-add') : cancelAdd()">
                        {{ __('Cancel') }}
                    </button>
                    <button type="button" class="button is-small is-outlined is-success"
                        @click="isNew ? $emit('save-comment') : update()">
                        <span v-if="isNew">
                            {{ __('Post') }}
                        </span>
                        <span v-else>
                            {{ __('Update') }}
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </article>

</template>

<script>

import { mapGetters } from 'vuex';
import fontawesome from '@fortawesome/fontawesome';
import { faPencilAlt, faTrashAlt } from '@fortawesome/fontawesome-free-solid';
import Inputor from './Inputor.vue';
import Popover from '../bulma/Popover.vue';

fontawesome.library.add(faPencilAlt, faTrashAlt);

export default {
    name: 'Comment',

    components: { Inputor, Popover },

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
    },

    computed: {
        ...mapGetters('locale', ['__']),
        ...mapGetters(['avatarLink']),
        avatar() {
            return this.isNew
                ? this.avatarLink
                : route('core.avatars.show', this.comment.owner.avatarId || 'null', false).toString();
        },
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
            controls: false,
            dialog: false,
            originalBody: null,
        };
    },

    methods: {
        cancelAdd() {
            this.comment.body = this.originalBody;
            this.controls = false;
            this.originalBody = null;
            this.$emit('cancel-edit');
        },
        update() {
            if (!this.comment.body.trim()) {
                return;
            }

            this.controls = false;

            if (this.comment.body === this.originalBody) {
                this.originalBody = null;
                return;
            }

            this.$emit('save-comment');

            this.originalBody = null;
        },
    },
};

</script>

<style>

    img.avatar {
        border: 1px solid orangered;
    }

    span.highlight {
        color: #3097d1;
    }

    span.comment-body {
        word-break: break-all;
    }

</style>
