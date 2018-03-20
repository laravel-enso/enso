<template>

    <vue-table class="box"
        :path="path"
        :custom-render="customRender"
        id="permissions">
    </vue-table>

</template>

<script>

import VueTable from '../../../components/enso/vuedatatable/VueTable.vue';

export default {
    components: { VueTable },

    data() {
        return {
            path: route('system.permissions.initTable', [], false),
        };
    },

    methods: {
        customRender(row, column) {
            switch (column.name) {
            case 'type':
                return row.isRead ? `<span class="tag is-table-tag is-success">${this.__(row[column.name])}</span>`
                    : `<span class="tag is-table-tag is-warning">${this.__(row[column.name])}</span>`;
            default:
                this.$toastr.warning(`render for column ${column.name} is not defined.`);
                return this.__(row[column.name]);
            }
        },
    },
};

</script>
