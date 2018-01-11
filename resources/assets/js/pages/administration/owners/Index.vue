<template>

    <vue-table :path="path"
        :i18n="__"
        id="owners">
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
            path: route('administration.owners.initTable', [], false),
        };
    },
};

</script>
