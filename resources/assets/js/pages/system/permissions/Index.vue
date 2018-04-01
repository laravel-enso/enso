<template>

    <vue-table class="box"
        :path="path"
        id="permissions">
        <span slot="type"
            slot-scope="{ row }"
            :class="[
                'tag is-table-tag',
                row.isRead ? 'is-success' : 'is-warning'
            ]">
                {{ row['type'] }}
        </span>
    </vue-table>

</template>

<script>

import { mapGetters } from 'vuex';
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
