<template>
    <article class="media">
        <figure class="media-left has-margin-top-small">
            <p class="image is-32x32">
                <img class="is-rounded"
                    :src="avatar(event.author)">
            </p>
        </figure>
        <div class="event">
            <p class="heading">
{{ event.time }}
</p>
            <message :event="event"
                @show-profile="showProfile(event.author)"/>
        </div>
    </article>
</template>

<script>

import Message from './Message.vue';

export default {
    name: 'Event',

    components: { Message },

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
        showProfile({ id }) {
            this.$router.push({
                name: 'administration.users.show',
                params: { user: id },
            });
        },
    },
};

</script>

<style lang="scss">
    .media > .event > .author {
        font-weight: 600;
    }
</style>
