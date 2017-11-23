<template>

    <thead>
        <tr class="is-bold"
            :class="template.style">
            <td :class="template.align"
                v-if="template.crtNo">
                {{ i18n(template.labels.crtNo) }}
            </td>
            <td class="table-header"
                :class="template.align"
                v-for="column in template.columns"
                :key="column.label"
                v-if="column.meta.visible">
                <span>{{ i18n(column.label) }}</span>
                <div class="table-header-controls">
                    <a class="delete is-small"
                        v-if="column.meta.sort"
                        @click="clearColumnSort(column)">
                    </a>
                    <span class="icon is-small"
                        @click="toggleSort($event, column)"
                        v-if="column.meta.sortable">
                        <i v-if="!column.meta.sort" class="fa fa-sort"></i>
                        <i v-else-if="column.meta.sort === 'ASC'" class="fa fa-sort-ASC"></i>
                        <i v-else class="fa fa-sort-DESC"></i>
                    </span>
                </div>
            </td>
            <td :class="template.align"
                v-if="template.actions">
                {{ i18n(template.labels.actions) }}
            </td>
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

            if (!this.template.columns.find(column => column.meta.sort !== null )) {
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

<style>

    .table-header-controls {
        cursor: pointer;
        float: right;
        align-content: center;
        padding-left: 5px;
    }

    .table-header-controls .fa-sort,
    .table-header-controls .fa-times {
        font-weigth: 100;
        opacity: 0.4;
    }

    .table-header-controls .fa-times:hover {
        opacity: 1;
    }

</style>
