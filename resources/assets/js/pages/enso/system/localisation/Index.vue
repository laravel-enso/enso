<template>

    <vue-table :path="path"
        :i18n="__"
        :custom-render="customRender"
        id="localisation">
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
            path: route('system.localisation.initTable', [], false),
        };
    },

    methods: {
        customRender(row, column) {
            switch (column.name) {
            case 'flag':
                return `<i class="flag-icon ${row[column.name]}"></i>`;
            default:
                toastr.warning(`render for column ${column.name} is not defined.`);
                return row[column.name];
            }
        },
    },
};

</script>
