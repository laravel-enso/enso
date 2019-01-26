<template>
    <a class="navbar-item user-profile"
        @click="goToProfile()">
        <img class="is-rounded"
            :src="$store.getters.avatarLink">
        <span v-if="!isTouch"
            class="has-margin-left-small">
            {{ $store.state.user.person.appellative || $store.state.user.person.name }}
        </span>
    </a>
</template>

<script>

import { mapState } from 'vuex';

export default {
    name: 'ProfileControl',

    computed: {
        ...mapState(['user']),
        ...mapState('layout', ['isTouch']),
    },

    methods: {
        goToProfile() {
            this.$router.push({
                name: 'administration.users.show',
                params: { user: this.user.id },
            });
        },
    },
};
</script>

<style lang="scss" scoped>
    img.is-rounded {
        border-radius: 290486px;
    }
</style>
