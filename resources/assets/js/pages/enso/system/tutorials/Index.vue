<template>

    <datatable source="system.tutorials"
        :custom-render="customRender"
        id="tutorials">
    </datatable>

</template>

<script>

import Datatable from '../../../../components/enso/datatable/Datatable.vue';

export default {
    components: { Datatable },

    methods: {
        customRender(column, data) {
            switch (column) {
            case 'placement':
                return `<span class="tag is-table-tag is-info">${data}</span`;
            default:
                toastr.warning(`render for column ${column} is not defined.`);
                return data;
            }
        },
    },
};

</script>
