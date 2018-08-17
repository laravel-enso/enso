<template>

    <vue-table class="is-raised is-rounded"
        :path="path"
        id="users"/>

</template>

<script>

import VueTable from '../../../components/enso/vuedatatable/VueTable.vue';

export default {
    components: { VueTable },

    data() {
        return {
            path: route('administration.users.initTable'),
        };
    },
};

</script>
