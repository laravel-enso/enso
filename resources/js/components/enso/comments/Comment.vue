<template>
    <article class="media box has-background-light raises-on-hover"
        @mouseover="controls = true"
        @mouseleave="!dialog ? controls = false: null">
        <figure class="media-left">
            <p class="image is-48x48">
                <img class="is-rounded"
                    :src="avatar">
            </p>
        </figure>
        <div class="media-content">
            <div v-if="!isNew" class="has-margin-bottom-medium has-text-grey">
                <a><b>{{ comment.owner.name }}</b></a>
                <span v-tooltip="comment.updatedAt || comment.createdAt">
                    {{ timeFromNow(comment.updatedAt || comment.createdAt) }}
                </span>
                <span v-if="comment.createdAt !== comment.updatedAt">
                    &bull; {{ __('edited') }}
                </span>
                <div v-if="!isNew && !isEditing && controls"
                    class="is-pulled-right is-flex">
                    <a v-if="comment.isEditable"
                        class="button is-naked is-small has-margin-right-small"
                        @click="originalBody = comment.body;">
                        <span class="icon is-small has-text-grey">
                            <fa icon="pencil-alt"/>
                        </span>
                    </a>
                    <popover v-if="comment.isDeletable"
                        placement="bottom-end"
                        @confirm="$emit('delete')"
                        @show="dialog = true"
                        @hide="dialog = controls = false">
                        <a class="button is-naked is-small"
                            @click="dialog=true">
                            <span class="icon is-small has-text-grey">
                                <fa icon="trash-alt"/>
                            </span>
                        </a>
                    </popover>
                </div>
            </div>
            <div v-if="!isEditing && !isNew"
                class="comment-body"
                v-html="highlightTaggedUsers"/>
            <div v-else>
                <inputor :comment="comment"
                    v-on="$listeners"/>
                <div class="has-margin-top-medium">
                    <a class="button is-small is-outlined has-margin-right-small action"
                        @click="isNew ? $emit('cancel-add') : cancelAdd()">
                        <span>
                            {{ __('Cancel') }}
                        </span>
                        <span class="icon is-small">
                            <fa icon="ban"/>
                        </span>
                    </a>
                    <a v-tooltip.right="{
                                content: __('Shift + Enter to post'),
                                delay: 800
                            }"
                        class="button is-small is-outlined is-success action"
                        @click="isNew ? $emit('save') : update()">
                        <span v-if="isNew">
                            {{ __('Post') }}
                        </span>
                        <span v-else>
                            {{ __('Update') }}
                        </span>
                        <span class="icon is-small">
                            <fa icon="check"/>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </article>
</template>

<script>

import { VTooltip } from 'v-tooltip';
import { mapGetters } from 'vuex';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faPencilAlt, faTrashAlt, faCheck, faBan,
} from '@fortawesome/free-solid-svg-icons';
import Inputor from './Inputor.vue';
import Popover from '../bulma/Popover.vue';
import formatDistance from '../../../modules/enso/plugins/date-fns/formatDistance';

library.add(faPencilAlt, faTrashAlt, faCheck, faBan);

export default {
    name: 'Comment',

    components: { Inputor, Popover },

    directives: { tooltip: VTooltip },

    props: {
        comment: {
            type: Object,
            required: true,
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

    data: () => ({
        controls: false,
        dialog: false,
        originalBody: null,
    }),

    computed: {
        ...mapGetters(['avatarLink']),
        avatar() {
            return this.isNew
                ? this.avatarLink
                : route('core.avatars.show', this.comment.owner.avatarId);
        },
        highlightTaggedUsers() {
            let { body } = this.comment;

            this.comment.taggedUsers
                .forEach(({ name }) => {
                    const highlighted = `${'<span class="has-text-info">@'}${name}</span>`;
                    body = body.replace(`@${name}`, highlighted);
                });

            return body;
        },
        isEditing() {
            return this.originalBody !== null;
        },
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

            this.$emit('save');

            this.originalBody = null;
        },
        timeFromNow(date) {
            return formatDistance(date);
        },
    },
};

</script>

<style scoped>

    span.comment-body {
        word-break: break-all;
    }

    .media-content {
        overflow: unset;
    }

    .button.action {
        position: inherit;
    }

</style>
