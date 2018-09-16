<template>

    <article class="media clickable">
        <figure class="media-left">
            <p class="image is-48x48">
                <img class="is-rounded"
                    :src="avatar">
            </p>
        </figure>
        <div class="media-content">
            <div class="content">
                <span class="has-text-weight-semibold">{{ discussion.title }}</span>
                <p class="preview">
                    <span class="has-text-info is-bold">{{ discussion.owner.name }}</span>
                    &bull;
                    <small class="has-text-muted">
                        {{ timeFromNow(discussion.updatedAt || discussion.createdAt) }}
                    </small>
                    &bull;
                    {{ discussion.body | string }}
                </p>
            </div>
        </div>
        <div class="media-right">
            <span class="tag is-info is-medium has-text-weight-bold is-rounded">
                {{ discussion.replies.length }}
            </span>
        </div>
    </article>

</template>

<script>

import formatDistance from '../../../modules/enso/plugins/date-fns/formatDistance';

export default {
    name: 'DiscussionPreview',

    filters: {
        string(html) {
            const div = document.createElement('div');
            div.innerHTML = html;
            return div.textContent || div.innerText || '';
        },
    },

    props: {
        discussion: {
            type: Object,
            required: true,
        },
        last: {
            type: Boolean,
            required: true,
        },
    },

    computed: {
        avatar() {
            return route(
                'core.avatars.show',
                this.discussion.owner.avatarId || 'null',
            );
        },
    },

    methods: {
        timeFromNow(date) {
            return formatDistance(date);
        },
    },
};

</script>

<style lang="scss" scoped>

    p.preview {
        overflow: hidden;
        text-overflow: ellipsis;
        max-height: 3rem;
    }

</style>
