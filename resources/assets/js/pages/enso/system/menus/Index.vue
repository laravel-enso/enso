<template>

        <vue-table :path="path"
            :i18n="__"
            :custom-render="customRender"
            id="menus">
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
            path: route('system.menus.initTable', [], false),
        };
    },

    methods: {
        customRender(row, column) {
            switch (column.name) {
            case 'icon':
                return `<i class="${row[column.name]}"></i>`;
            default:
                toastr.warning(`render for column ${column.name} is not defined.`);
                return row[column.name];
            }
        },
    },
};

</script>
