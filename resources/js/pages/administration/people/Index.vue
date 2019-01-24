<template>
    <vue-table class="box is-paddingless raises-on-hover is-rounded"
        :path="path"
        id="people"/>
</template>

<script>

import VueTable from '../../../components/enso/vuedatatable/VueTable.vue';

export default {
    components: { VueTable },

    data: () => ({
        path: route('administration.people.initTable'),
    }),
};

</script>
