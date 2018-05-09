<template>

    <vue-table class="box"
        :path="path"
        id="localisation">
        <i slot="flag"
            slot-scope="{ row, column }"
            :class="row['flag']"/>
    </vue-table>

</template>

<script>

import fontawesome from '@fortawesome/fontawesome';
import { faEdit } from '@fortawesome/fontawesome-free-solid/shakable.es';
import VueTable from '../../../components/enso/vuedatatable/VueTable.vue';

fontawesome.library.add(faEdit);

export default {
    components: { VueTable },

    data() {
        return {
            path: route('system.localisation.initTable'),
        };
    },
};

</script>
