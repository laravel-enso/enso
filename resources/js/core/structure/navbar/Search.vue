<template>

    <div class="navbar-item search">
        <typeahead is-rounded
            source="core.search.index"
            :placeholder="__('Search')"
            v-model="query"
            @update="redirect">
            <template slot="option"
                slot-scope="{ highlight, item }">
                <span>
                    <strong>{{ __(item['groupLabel']) }}:</strong>
                    <span v-html="highlight(item['label'])"/>
                    <span class="route-controls"
                        v-if="item.routes.length">
                        <span class="icon is-small route-control"
                            @mousedown.stop="redirect(item, 'show')"
                            v-if="!!route('show', item)">
                            <fa icon="eye"/>
                        </span>
                        <span class="icon is-small route-control"
                            @mousedown.stop="redirect(item, 'edit')"
                            v-if="!!route('edit', item)">
                            <fa icon="pencil-alt"/>
                        </span>
                        <span class="icon is-small route-control"
                            @mousedown.stop="redirect(item, 'index')"
                            v-if="!!route('index', item)">
                            <fa icon="list-ul"/>
                        </span>
                    </span>
                </span>
            </template>
        </typeahead>
    </div>

</template>

<script>

import { library } from '@fortawesome/fontawesome-svg-core';
import { faEye, faPencilAlt, faListUl } from '@fortawesome/free-solid-svg-icons';
import Typeahead from '../../../components/enso/bulma/Typeahead.vue';

library.add(faEye, faPencilAlt, faListUl);

export default {
    name: 'Search',

    components: { Typeahead },

    data: () => ({
        query: '',
    }),

    methods: {
        route(search, { routes }) {
            return routes.find(route =>
                route.indexOf(search) >= 0);
        },
        redirect(item, to = null) {
            to = to
                ? this.route(to, item)
                : this.route('show', item)
                    || this.route('edit', item)
                    || this.route('index', item);

            if (to) {
                this.$router.push({ name: to, params: { id: item.id } });
            }

            this.$nextTick(() => (this.query = ''));
        },
    },
};
</script>

<style lang="scss" scoped>
    .navbar-item.search {
        .route-controls {
            position: absolute;
            right: 1em;

            .route-control {
                z-index: 4;
                opacity: 0.8;
                cursor: pointer;
                margin-right: 0.2em;

                &:hover {
                    opacity: 1;
                }
            }
        }

        position: absolute;

        @media screen and (min-width: 1024px) {
            width: 34em;
            left: calc(50% - 17em);
        }

        @media screen and (min-width: 768px) and (max-width: 1023px) {
            width: 26em;
            left: calc(50% - 13em);
        }

        @media screen and (max-width: 767px) {
            width: 22em;
            left: calc(50% - 11em);
        }
    }
</style>
