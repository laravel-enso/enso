<template>
    <vue-table class="box is-paddingless raises-on-hover is-rounded"
        :path="path"
        id="tutorials">
        <span slot="placement"
            slot-scope="{ row }"
            class="tag is-table-tag is-info">
            {{ row['placement'] }}
        </span>
    </vue-table>
</template>

<script>

import VueTable from '../../../components/enso/vuedatatable/VueTable.vue';

export default {
    components: { VueTable },

    data: () => ({
        path: route('system.tutorials.initTable'),
    }),
};

</script>
