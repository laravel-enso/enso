<template>

    <vue-table class="box"
        :path="path"
        :i18n="__"
        id="owners">
    </vue-table>

</template>

<script>

import { mapGetters } from 'vuex';
import VueTable from '../../../components/enso/vuedatatable/VueTable.vue';


export default {
    components: { VueTable },

    data() {
        return {
            path: route('administration.owners.initTable', [], false),
        };
    },

    computed: {
        ...mapGetters('locale', ['__']),
    },
};

</script>
