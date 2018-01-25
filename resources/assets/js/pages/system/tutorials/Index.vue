<template>

    <vue-table :path="path"
        :i18n="__"
        :custom-render="customRender"
        id="tutorials">
    </vue-table>

</template>

<script>

import { mapGetters } from 'vuex';
import VueTable from '../../../components/enso/vuedatatable/VueTable.vue';

export default {
    components: { VueTable },

    computed: {
        ...mapGetters('locale', ['__']),
    },

    data() {
        return {
            path: route('system.tutorials.initTable', [], false),
        };
    },

    methods: {
        customRender(row, { name }) {
            switch (name) {
            case 'placement':
                return `<span class="tag is-table-tag is-info">${row[name]}</span`;
            default:
                this.$toastr.warning(`render for column ${name} is not defined.`);
                return row[name];
            }
        },
    },
};

</script>
