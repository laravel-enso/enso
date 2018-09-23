<template>

    <div class="wrapper">
        <draggable class="field is-grouped is-grouped-multiline">
            <a class="tag is-warning icon" v-if="routes.length > 1"
                @click="clear()">
                <fa icon="trash-alt"/>
            </a>
            <span class="control"
                v-for="(route, index) in routes"
                :key="index">
                <span class="tags has-addons">
                    <a :class="['tag', {'is-link': route.name === $route.name}]"
                        @click="$router.push({
                            name: route.name, params: route.params, query: route.query
                        })">
                        {{ __(route.meta.title) }}
                    </a>
                    <a class="tag is-delete"
                        @click="remove(route)"/>
                </span>
            </span>
        </draggable>
    </div>

</template>

<script>

import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { mapState, mapMutations } from 'vuex';
import Draggable from 'vuedraggable';

library.add(faTrashAlt);

export default {
    name: 'History',

    components: { Draggable },

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
        clear() {
            this.routes
                .filter(({ name }) => name !== this.$route.name)
                .forEach(route => this.drop(route));
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
