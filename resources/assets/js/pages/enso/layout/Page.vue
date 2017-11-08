<template>

    <div>
        <page-header :title="__(title)"></page-header>
        <router></router>
    </div>

</template>

<script>

import { mapGetters } from 'vuex';
import Router from './Router.vue';
import PageHeader from './PageHeader.vue';

export default {
    components: { Router, PageHeader },

    computed: {
        ...mapGetters('locale', ['__']),
        title() {
            return this.$route.meta.title;
        },
    },
};
</script>
