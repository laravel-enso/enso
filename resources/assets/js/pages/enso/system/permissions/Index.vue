<template>

    <datatable source="system.permissions"
    	:custom-render="customRender"
        id="permissions">
    </datatable>

</template>

<script>

	import Datatable from '../../../../components/enso/datatable/Datatable.vue';

    export default {
    	components: { Datatable },

    	methods: {
            customRender(column, data, type, row, meta) {
                switch(column) {
                    case 'type':
                        return data == 'Read' || data == 'Citire' ? '<span class="tag is-table-tag is-success">' + data + '</span>'
                            : '<span class="tag is-table-tag is-warning">' + data + '</span>';
                    default:
                        toastr.warning('render for column ' + column + ' is not defined.' );
                        return data;
                }
            }
        }
    }

</script>