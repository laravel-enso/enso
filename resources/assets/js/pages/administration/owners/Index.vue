<template>

    <vue-table class="box"
        :path="path"
        id="owners">
    </vue-table>

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
