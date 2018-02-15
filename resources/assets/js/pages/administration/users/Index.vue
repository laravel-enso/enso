<template>

    <vue-table class="box"
        :path="path"
        :i18n="__"
        id="users">
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
            path: route('administration.users.initTable', [], false),
        };
    },
};

</script>
