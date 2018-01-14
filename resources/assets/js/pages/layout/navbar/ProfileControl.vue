<template>
    <a class="navbar-item"
        @click="goToProfile()">
        <img :src="$store.getters.avatarLink">
            <span class="has-margin-left-small"
                v-if="!isTouch">
                {{ $store.state.user.first_name }}
            </span>
        </img>
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
            this.$router.push({ name: 'administration.users.show', params: { id: this.user.id } });
        },
    },
};
</script>
