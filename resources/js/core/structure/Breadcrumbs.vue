<template>

    <nav class="breadcrumb is-small has-dot-separator">
        <ul>
            <li v-for="(breadcrumb, index) in breadcrumbs"
                :class="{ 'is-active': breadcrumb.name === $route.meta.breadcrumb }"
                :key="index">
                <a v-if="!breadcrumb.route"
                    :class="{'is-disabled': breadcrumb.name !== $route.meta.breadcrumb }">
                    {{ __(breadcrumb.name) }}
                </a>
                <router-link :class="{ 'link' : breadcrumb.name !== $route.meta.breadcrumb }"
                    :to="{ name: breadcrumb.route }"
                    v-if="breadcrumb.route">
                    {{ __(breadcrumb.name) }}
                </router-link>
            </li>
        </ul>
    </nav>

</template>

<script>

export default {
    name: 'Breadrumbs',

    computed: {
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

    breadcrumb a.is-disabled:hover {
        color: inherit;
        cursor: default;
    }

</style>
