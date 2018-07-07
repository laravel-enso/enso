<template>

    <vue-table class="box"
        :path="path"
        id="roles"
        @configure-role="redirect"/>

</template>

<script>

import fontawesome from '@fortawesome/fontawesome';
import { faFileAlt, faSlidersH } from '@fortawesome/fontawesome-free-solid/shakable.es';
import VueTable from '../../../components/enso/vuedatatable/VueTable.vue';

fontawesome.library.add([faFileAlt, faSlidersH]);

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
