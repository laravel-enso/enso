<template>
<div>
    <vue-filter class="box"
        :options="options"
        title="Owner Name"
        v-model="filters.owners.name"/>

    <vue-table class="box"
        :filters="filters"
        :path="path"
        id="users"/>
</div>
</template>

<script>

import VueFilter from '../../../components/enso/bulma/VueFilter.vue';
import VueTable from '../../../components/enso/vuedatatable/VueTable.vue';

export default {
    components: { VueTable, VueFilter },

    data() {
        return {
            path: route('administration.users.initTable'),
            options: [
                { value: 'Admin', label: 'Admin', class: 'has-text-success' },
                { value: 'gigi', label: 'gigi', class: 'has-text-danger' },
            ],
            filters: {
                owners: {
                    name: null,
                },
            },
        };
    },
};

</script>
