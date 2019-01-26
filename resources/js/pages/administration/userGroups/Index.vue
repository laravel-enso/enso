<template>
    <vue-table id="userGroups"
        class="box is-paddingless raises-on-hover is-rounded"
        :path="path"/>
</template>

<script>

import VueTable from '../../../components/enso/vuedatatable/VueTable.vue';

export default {
    components: { VueTable },

    data: () => ({
        path: route('administration.userGroups.initTable'),
    }),
};

</script>
