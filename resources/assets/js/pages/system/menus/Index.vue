<template>

        <vue-table class="box"
            :path="path"
            id="menus"/>

</template>

<script>

import VueTable from '../../../components/enso/vuedatatable/VueTable.vue';

export default {
    components: { VueTable },

    data() {
        return {
            path: route('system.menus.initTable'),
        };
    },
};

</script>
