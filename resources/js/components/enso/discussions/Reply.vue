<template>
    <article class="media media-reply"
        :class="{'box has-background-light raises-on-hover': !edit && reply.id}">
        <figure class="media-left">
            <p class="image is-48x48">
                <img class="is-rounded"
                    :src="avatar">
            </p>
        </figure>
        <div class="media-content">
            <inputor class="raises-on-hover animated fadeIn"
                :message="reply"
                placeholder="Share your opinion..."
                type="reply"
                @update="$emit('update'); edit = false;"
                @store="$emit('store')"
                @cancel="$emit('cancel'); edit = false;"
                v-if="edit || !reply.id"/>
            <div class="content" v-else>
                <span class="has-text-info is-bold">
                    {{ reply.owner.name }}
                </span>
                &bull;
                <small class="has-text-muted">
                    {{ timeFromNow(reply.updatedAt || reply.createdAt) }}
                </small>
                <span v-if="edited">
                    &bull;
                    <small class="has-text-muted">
                        {{ __('edited') }}
                    </small>
                </span>
                <br>
                <span v-html="format(reply.body)"/>
            </div>
        </div>
        <div class="media-right">
            <div class="is-flex is-pulled-right"
                v-if="reply.isEditable && !edit">
                <button class="button is-naked is-small has-margin-right-small"
                    @click="edit = true">
                    <span class="icon is-small has-text-grey">
                        <fa icon="pencil-alt"/>
                    </span>
                </button>
                <popover placement="bottom-end"
                    @confirm="$emit('delete')"
                    @show="popover = true">
                    <button class="button is-naked is-small"
                        @click="popover = true">
                        <span class="icon is-small has-text-grey">
                            <fa icon="trash-alt"/>
                        </span>
                    </button>
                </popover>
            </div>
        </div>
    </article>
</template>

<script>

import formatDistance from '../../../modules/enso/plugins/date-fns/formatDistance';
import Inputor from './Inputor.vue';
import Popover from '../bulma/Popover.vue';

export default {
    name: 'Reply',

    components: { Inputor, Popover },

    props: {
        reply: {
            type: Object,
            required: true,
        },
    },

    data: () => ({
        edit: false,
    }),

    computed: {
        avatar() {
            return route(
                'core.avatars.show',
                this.reply.owner.avatarId,
            );
        },
        edited() {
            return this.reply.createdAt !== this.reply.updatedAt;
        },
    },

    methods: {
        timeFromNow(date) {
            return formatDistance(date);
        },
        format(html) {
            return html.replace(/<p>/gm, '<p class="is-marginless">')
                .replace(/<h1>/gm, '<h1 class="is-marginless">')
                .replace(/<h2>/gm, '<h2 class="is-marginless">');
        },
    },
};
</script>

<style lang="scss">

    .media-reply {
        padding: 1rem;

        .mention {
            img {
                width: 1.4rem;
                height: 1.4rem;
                margin-bottom: -0.3rem;
                border-radius: 290486px;
            }
        }

    }
</style>
