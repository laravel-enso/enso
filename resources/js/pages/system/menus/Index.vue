<template>
    <vue-table class="box is-paddingless raises-on-hover is-rounded"
        :path="path"
        id="menus"/>
</template>

<script>

import VueTable from '../../../components/enso/vuedatatable/VueTable.vue';

export default {
    components: { VueTable },

    data: () => ({
        path: route('system.menus.initTable'),
    }),
};

</script>
