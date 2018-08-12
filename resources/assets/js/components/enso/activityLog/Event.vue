<template>
    <article class="media">
        <figure class="media-left has-margin-top-small">
            <p class="image is-32x32">
                <img :src="avatar(event.author)">
            </p>
        </figure>
        <div class="event">
            <p class="heading">{{ event.time }}</p>
            <p>
                <span class="author">{{ event.author.name }}</span>
                <span v-if="event.action.type === 4">{{ __(event.message) }}</span>
                <span v-else>{{ __(event.action.label) }}</span>
                <span v-if="event.action.type === 4">{{ __('on') }}</span>
                {{ __(event.model) }}
                <strong>{{ event.label }}</strong>
                <change v-for="(change, index) in event.changes"
                    :change="change"
                    :index="index"
                    :key="index"/>
                <span v-if="event.morphable">
                    {{ __('on') }} {{ event.morphable.model }} <strong>{{ event.morphable.label }}</strong>
                </span>
            </p>
        </div>
    </article>
</template>

<script>

import Change from './Change.vue';

export default {
    name: 'Event',

    components: { Change },

    props: {
        event: {
            type: Object,
            required: true,
        },
    },

    methods: {
        avatar({ avatarId }) {
            return route('core.avatars.show', avatarId);
        },
    },
};
</script>

<style lang="scss">
    .media > .event > .author {
        font-weight: 600;
    }
</style>

