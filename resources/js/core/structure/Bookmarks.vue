<template>

    <div class="bookmarks-wrapper">
        <span class="control">
            <a class="tag is-warning icon has-margin-right-small"
                v-if="routes.length > 1"
                @click="clear()">
                <fa icon="trash-alt"/>
            </a>
        </span>
        <draggable class="field is-grouped bookmarks"
            v-model="routes">
            <span class="control"
                v-for="(route, index) in routes"
                :key="index">
                <span class="tags has-addons">
                    <a :class="['tag is-bold', {'is-link': route.name === $route.name}]"
                        @click="$router.push({
                            name: route.name, params: route.params, query: route.query
                        })">
                        {{ __(route.meta.title) }}
                    </a>
                    <a class="tag is-success check"
                        @click="stick(route)"
                        v-if="!route.sticky">
                        <span class="icon is-small">
                            <fa icon="check"/>
                        </span>
                    </a>
                    <a class="tag is-delete"
                        @click="remove(route)"
                        v-if="routes.length > 1"/>
                </span>
            </span>
        </draggable>
    </div>

</template>

<script>

import { mapMutations } from 'vuex';
import Draggable from 'vuedraggable';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

library.add(faCheck, faTrashAlt);

export default {
    name: 'Bookmarks',

    components: { Draggable },

    data: () => ({
        handle: null,
    }),

    computed: {
        routes: {
            get() {
                return this.$store.state.bookmarks.routes;
            },
            set(routes) {
                this.$store.commit('bookmarks/set', routes);
            },
        },
    },

    mounted() {
        this.$root.$on('bookmarks-update', () =>
            this.$nextTick(() => this.ensureBookmarkVisibility()));
    },

    methods: {
        ...mapMutations('bookmarks', ['stick', 'drop']),
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
        ensureBookmarkVisibility() {
            clearInterval(this.handle);
            const index = this.routes
                .findIndex(({ name }) => name === this.$route.name);
            const container = this.$el.querySelector('.bookmarks');
            const bookmark = container.querySelectorAll('.control')[index];
            const containerLeft = container.scrollLeft;
            const containerRight = containerLeft + container.clientWidth;
            const bookmarkLeft = bookmark.offsetLeft;
            const bookmarkRight = bookmarkLeft + bookmark.clientWidth;

            if (bookmarkLeft < containerLeft) {
                const remainder = (containerLeft - bookmarkLeft) % 5;
                this.scroll(container, -1, bookmarkLeft, remainder);
            }

            if (bookmarkRight > containerRight) {
                const limit = bookmarkRight - containerRight;
                const remainder = limit % 5;
                this.scroll(container, 1, limit, remainder);
            }
        },
        scroll(container, direction, limit, remainder) {
            if (remainder) {
                container.scrollLeft += remainder * direction;
            }

            this.handle = setInterval(() => {
                if (container.scrollLeft === limit) {
                    clearInterval(this.handle);
                    return;
                }

                container.scrollLeft += 5 * direction;
            }, 1);
        },
    },
};
</script>

<style lang="scss" scoped>

    .bookmarks-wrapper {
        display: flex;
        margin-top: .05em;
        padding: 0.2em;
        -webkit-box-shadow: 0 1px 1px hsla(0,0%,4%,.2);
        box-shadow: 0 1px 1px hsla(0,0%,4%,.2);

        .bookmarks {
            position: relative;
            overflow-x: auto;
            overflow-y: hidden;
            -ms-overflow-style: none;
            overflow: -moz-scrollbars-none;
        }

        .bookmarks::-webkit-scrollbar {
            display: none;
        }

        a.tag:hover {
            text-decoration: none;
        }

        .tag.check {
            margin-left: 0.1em;
        }

        .field.is-grouped {
            .control:not(:last-child) {
                margin-right: .25em;
            }
        }
    }
</style>
