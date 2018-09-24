<template>

    <vue-table class="box is-paddingless raises-on-hover is-rounded"
        :path="path"
        id="permissionGroups"/>

</template>

<script>

import VueTable from '../../../components/enso/vuedatatable/VueTable.vue';

export default {
    components: { VueTable },

    data() {
        return {
            path: route('system.permissionGroups.initTable'),
        };
    },
};

</script>
