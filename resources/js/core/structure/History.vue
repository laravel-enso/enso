<template>

    <div class="wrapper">
        <div class="field is-grouped is-grouped-multiline">
            <div class="control"
                v-for="(route, index) in routes"
                :key="index">
                <div class="tags has-addons">
                    <a :class="['tag', {'is-link': route.name === $route.name}]"
                        @click="$router.push({
                            name: route.name, params: route.params, query: route.query
                        })">
                        {{ route.meta.title }}
                    </a>
                    <a class="tag is-delete"
                        @click="remove(route)"/>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

import { mapState, mapMutations } from 'vuex';

export default {
    name: 'History',

    computed: {
        ...mapState('history', ['routes']),
    },

    methods: {
        ...mapMutations('history', ['drop']),
        remove(route) {
            this.drop(route);
            if (route.name === this.$route.name) {
                const to = this.routes[this.routes.length - 1];
                this.$router.push({ name: to.name });
            }
        },
    },
};
</script>

<style lang="scss" scoped>
    .wrapper {
        padding: 0.2em;
        -webkit-box-shadow: 0 1px 1px hsla(0,0%,4%,.1);
        box-shadow: 0 1px 1px hsla(0,0%,4%,.1);

        a.tag:hover {
            text-decoration: none;
        }
    }
</style>
