<template>

    <vue-table class="box"
        :path="path"
        :i18n="__"
        id="roles"
        @configure-role="redirect">
    </vue-table>

</template>

<script>

import { mapGetters } from 'vuex';
import VueTable from '../../../components/enso/vuedatatable/VueTable.vue';

export default {
    components: { VueTable },

    data() {
        return {
            path: route('system.roles.initTable', [], false),
        };
    },

    computed: {
        ...mapGetters('locale', ['__']),
    },

    methods: {
        redirect($event) {
            this.$router
                .push({ name: 'system.roles.configure', params: { role: $event.dtRowId } });
        },
    },
};

</script>
