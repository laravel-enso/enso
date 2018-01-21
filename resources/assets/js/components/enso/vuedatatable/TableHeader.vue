<template>

    <thead>
        <tr :class="template.style">
            <th :class="template.align"
                v-if="template.crtNo">
                {{ i18n(template.labels.crtNo) }}
            </th>
            <th class="vue-table-header"
                :class="template.align"
                v-for="column in template.columns"
                :key="column.label"
                v-if="column.meta.visible && !column.meta.hidden">
                <span>
                    {{ i18n(column.label) }}
                    <span class="table-header-controls">
                        <span class="sorter"
                            @click="toggleSort($event, column)"
                            v-if="column.meta.sortable">
                            <span class="icon is-small"
                                v-show="!column.meta.sort">
                                <i class="fas fa-sort fa-xs"></i>
                            </span>
                            <span class="icon is-small"
                                v-show="column.meta.sort === 'ASC'">
                                <i class="fas fa-sort-up fa-xs"></i>
                            </span>
                            <span class="icon is-small"
                                v-show="column.meta.sort === 'DESC'">
                                <i class="fas fa-sort-down fa-xs"></i>
                            </span>
                        </span>
                        <a class="delete is-small"
                            v-if="column.meta.sort"
                            @click="clearColumnSort(column)">
                        </a>
                    </span>
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

export default {
    name: 'Header',

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
