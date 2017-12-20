<template>

    <vue-table :path="path"
        :i18n="__"
        id="roles"
        @configure-role="$router.push({name: 'system.roles.configure', params: { role: $event.dtRowId }})">
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
            path: route('system.roles.initTable', [], false),
        };
    },
}

</script>