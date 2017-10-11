<template>

    <datatable source="system.localisation"
    	:custom-render="customRender"
    	@edit-texts="$router.push({ name: 'system.localisation.editTexts' })"
        id="localisation">
    </datatable>

</template>

<script>

	import Datatable from '../../../../components/enso/datatable/Datatable.vue';

    export default {
    	components: { Datatable },

    	methods: {
            customRender(column, data, type, row, meta) {
                switch(column) {
                    case 'flag':
                        return '<i class="flag-icon ' + data + '"></i>';
                    default:
                        toastr.warning('render for column ' + column + ' is not defined.' );
                        return data;
                }
            }
        }
    }

</script>