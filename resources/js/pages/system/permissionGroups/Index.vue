<template>

    <vue-table class="is-raised is-rounded"
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
