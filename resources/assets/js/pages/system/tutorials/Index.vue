<template>

    <vue-table class="box"
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

    data() {
        return {
            path: route('system.tutorials.initTable', [], false),
        };
    },
};

</script>
