<template>

    <div class="is-flex">
        <span class="clap is-clickable has-margin-right-large"
            @click="react"/>
        <figure class="image is-32x32 has-margin-left-small"
            v-for="reaction in reactable.reactions"
            :key="reaction.id"
            v-tooltip="reaction.owner.name">
            <img class="is-rounded"
                :src="avatar(reaction.owner.avatarId)">
        </figure>
    </div>

</template>

<script>

import { mapState } from 'vuex';
import { VTooltip } from 'v-tooltip';

export default {
    name: 'Reactions',

    directives: { tooltip: VTooltip },

    props: {
        reactable: {
            type: Object,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
    },

    computed: {
        ...mapState(['user']),
    },

    methods: {
        react() {
            axios.post(route('core.discussions.react'), {
                reactableId: this.reactable.id,
                reactableType: this.type,
                userId: this.user.id,
                type: 1,
            }).then(({ data }) => (this.reactable.reactions = data))
                .catch(error => this.handleError(error));
        },
        avatar(avatarId) {
            return route('core.avatars.show', avatarId);
        },
    },
};
</script>

<style lang="scss" scoped>
    .clap:before {
        content: "👏";
        font-size: 24px;
    }
</style>

