<template>

    <vue-table class="box is-paddingless is-raised is-rounded"
        :path="path"
        id="owners"/>

</template>

<script>

import VueTable from '../../../components/enso/vuedatatable/VueTable.vue';

export default {
    components: { VueTable },

    data() {
        return {
            path: route('administration.owners.initTable'),
        };
    },
};

</script>
