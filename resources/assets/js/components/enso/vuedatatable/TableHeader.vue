<template>

    <thead>
        <tr :class="template.style">
            <th :class="template.align"
                v-if="template.crtNo">
                {{ i18n(template.labels.crtNo) }}
            </th>
            <th :class="['vue-table-header', template.align]"
                v-for="column in template.columns"
                :key="column.label"
                v-if="column.meta.visible && !column.meta.hidden && !column.meta.rogue">
                {{ i18n(column.label) }}
                <span class="table-header-controls">
                    <span class="icon is-small has-text-info"
                        v-if="column.tooltip"
                        v-tooltip="column.tooltip">
                        <fa icon="info" size="xs"></fa>
                    </span>
                    <span class="sorter"
                        @click="toggleSort($event, column)"
                        v-if="column.meta.sortable">
                        <span class="icon is-small">
                            <fa :icon="sortIcon(column.meta.sort)" size="xs"></fa>
                        </span>
                    </span>
                    <a class="delete is-small"
                        v-if="column.meta.sort"
                        @click="clearColumnSort(column)">
                    </a>
                </span>
            </th>
            <th :class="template.align"
                v-if="template.actions">
                {{ i18n(template.labels.actions) }}
            </th>
        </tr>
    </thead>

</template>

<script>

import { VTooltip } from 'v-tooltip';
import fontawesome from '@fortawesome/fontawesome';

import { faSort, faSortUp, faSortDown, faPlus, faFileExcel, faInfo }
    from '@fortawesome/fontawesome-free-solid/shakable.es';

fontawesome.library.add(faSort, faSortUp, faSortDown, faPlus, faFileExcel, faInfo);

export default {
    name: 'Header',

    directives: { tooltip: VTooltip },

    props: {
        template: {
            type: Object,
            required: true,
        },
        i18n: {
            type: Function,
            required: true,
        },
    },

    methods: {
        sortIcon(sort) {
            if (!sort) return faSort;

            return sort === 'ASC'
                ? faSortUp
                : faSortDown;
        },
        toggleSort(event, { meta }) {
            const { sort } = meta;

            if (!event.shiftKey) {
                this.clearSort();
            }

            meta.sort = sort === 'ASC' ? 'DESC' : 'ASC';
            this.template.sort = true;
            this.$emit('sort-update');
        },
        clearColumnSort({ meta }) {
            meta.sort = null;

            if (!this.template.columns.find(column => column.meta.sort !== null)) {
                this.template.sort = false;
            }

            this.$emit('sort-update');
        },
        clearSort() {
            this.template.columns.forEach(({ meta }) => {
                meta.sort = null;
            });
        },
    },
};

</script>

<style lang="scss">

    th.vue-table-header {
        white-space:nowrap;
        align-content: center;
    }

    .table-header-controls {
        .sorter {
            cursor: pointer;
            opacity: 0.5;

            &:hover {
                opacity: 1;
            }
        }
    }

</style>
