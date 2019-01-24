<template>
    <vue-table class="box is-paddingless raises-on-hover is-rounded"
        :path="path"
        id="permissions">
        <span slot="type"
            slot-scope="{ row }"
            :class="[
                'tag is-table-tag',
                row.isRead ? 'is-success' : 'is-warning'
            ]">
                {{ row.type }}
        </span>
    </vue-table>
</template>

<script>

import VueTable from '../../../components/enso/vuedatatable/VueTable.vue';

export default {
    components: { VueTable },

    data: () => ({
        path: route('system.permissions.initTable'),
    }),
};

</script>
