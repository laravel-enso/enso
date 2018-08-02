<template>

    <vue-table class="box"
        :path="path"
        id="roles"
        @configure-role="redirect"/>

</template>

<script>

import { library } from '@fortawesome/fontawesome-svg-core';
import { faFileAlt, faSlidersH } from '@fortawesome/free-solid-svg-icons';
import VueTable from '../../../components/enso/vuedatatable/VueTable.vue';

library.add([faFileAlt, faSlidersH]);

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
