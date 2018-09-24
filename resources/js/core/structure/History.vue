<template>

    <div class="wrapper">
        <span class="tag is-warning icon has-margin-right-small"
            v-if="routes.length > 1"
            @click="clear()">
            <fa icon="trash-alt"/>
        </span>
        <draggable class="field is-grouped is-grouped-multiline"
            v-model="routes">
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
import { mapMutations } from 'vuex';
import Draggable from 'vuedraggable';

library.add(faTrashAlt);

export default {
    name: 'History',

    components: { Draggable },

    computed: {
        routes: {
            get() {
                return this.$store.state.history.routes;
            },
            set(routes) {
                this.$store.commit('history/set', routes);
            },
        },
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
        display: flex;
        padding: 0.2em;
        -webkit-box-shadow: 0 1px 1px hsla(0,0%,4%,.2);
        box-shadow: 0 1px 1px hsla(0,0%,4%,.2);

        a.tag:hover {
            text-decoration: none;
        }

        .field.is-grouped {
            .control:not(:last-child) {
                margin-right: .25rem;
            }
        }
    }
</style>
