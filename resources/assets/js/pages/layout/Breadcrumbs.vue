<template>

    <nav class="breadcrumb has-dot-separator">
        <ul>
            <li v-for="(breadcrumb, index) in breadcrumbs"
                :class="{ 'is-active': breadcrumb.name === $route.meta.breadcrumb }"
                :key="index">
                <a v-if="!breadcrumb.route"
                    :class="{'is-disabled': breadcrumb.name !== $route.meta.breadcrumb }">
                    {{ __(breadcrumb.name) }}
                </a>
                <router-link
                    :class="{ 'link' : breadcrumb.name !== $route.meta.breadcrumb }"
                    v-if="breadcrumb.route"
                    :to="{ name: breadcrumb.route }">
                    {{ __(breadcrumb.name) }}
                </router-link>
            </li>
        </ul>
    </nav>

</template>

<script>

import { mapGetters } from 'vuex';

export default {
    name: 'Breadrumbs',

    computed: {
        ...mapGetters('locale', ['__']),
        breadcrumbs() {
            return this.$route.matched.reduce((breadcrumbs, element) => {
                breadcrumbs.push({ name: element.meta.breadcrumb, route: element.meta.route });
                return breadcrumbs;
            }, []);
        },
    },
};

</script>

<style>

    nav.breadcrumb > ul > li > a {
        padding: 0 0.8rem;
        font-size: 0.8rem;
    }

    breadcrumb a.is-disabled:hover {
        color: inherit;
        cursor: default;
    }

</style>
