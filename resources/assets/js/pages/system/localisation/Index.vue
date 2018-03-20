<template>

    <vue-table class="box"
        :path="path"
        :custom-render="customRender"
        id="localisation">
    </vue-table>

</template>

<script>

import fontawesome from '@fortawesome/fontawesome';
import { faEdit } from '@fortawesome/fontawesome-free-solid/shakable.es';
import VueTable from '../../../components/enso/vuedatatable/VueTable.vue';

fontawesome.library.add(faEdit);

export default {
    components: { VueTable },

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
                this.$toastr.warning(`render for column ${column.name} is not defined.`);
                return row[column.name];
            }
        },
    },
};

</script>
