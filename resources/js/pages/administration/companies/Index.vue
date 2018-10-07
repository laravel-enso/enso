<template>

    <vue-table class="box is-paddingless raises-on-hover is-rounded"
        :path="path"
        id="companies"/>

</template>

<script>

import VueTable from '../../../components/enso/vuedatatable/VueTable.vue';

export default {
    components: { VueTable },

    data() {
        return {
            path: route('administration.companies.initTable'),
        };
    },
};

</script>

