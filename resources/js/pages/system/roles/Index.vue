<template>

    <vue-table class="box is-paddingless raises-on-hover is-rounded"
        :path="path"
        id="roles"
        @configure-role="redirect"/>

</template>

<script>

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSave, faSlidersH } from '@fortawesome/free-solid-svg-icons';
import VueTable from '../../../components/enso/vuedatatable/VueTable.vue';

library.add([faSave, faSlidersH]);

export default {
    components: { VueTable },

    data() {
        return {
            path: route('system.roles.initTable'),
        };
    },

    methods: {
        redirect($event) {
            this.$router.push({
                name: 'system.roles.configure',
                params: { role: $event.dtRowId },
            });
        },
    },
};

</script>
