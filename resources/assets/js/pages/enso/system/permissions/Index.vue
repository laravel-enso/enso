<template>

    <vue-table :path="path"
        :i18n="__"
        :custom-render="customRender"
        id="permissions">
    </vue-table>

</template>

<script>

import { mapGetters } from 'vuex';
import VueTable from '../../../../components/enso/vue-datatable/VueTable.vue';

export default {
    components: { VueTable },

    computed: {
        ...mapGetters('locale', ['__']),
    },

    data() {
        return {
            path: route('system.permissions.initTable', [], false),
        };
    },

    methods: {
        customRender(row, column) {
            switch (column.name) {
            case 'type':
                return row.isRead ? `<span class="tag is-table-tag is-success">${row[column.name]}</span>`
                    : `<span class="tag is-table-tag is-warning">${row[column.name]}</span>`;
            default:
                toastr.warning(`render for column ${column.name} is not defined.`);
                return row[column.name];
            }
        },
    },
};

</script>
