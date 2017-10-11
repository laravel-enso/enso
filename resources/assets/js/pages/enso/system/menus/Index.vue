<template>

        <datatable source="system.menus"
        	:custom-render="customRender"
            id="menus">
        </datatable>

</template>

<script>

	import Datatable from '../../../../components/enso/datatable/Datatable.vue';
    import { mapGetters } from 'vuex';

    export default {
    	components: { Datatable },

        computed: {
            ...mapGetters('locale', ['__'])
        },

    	methods: {
    		customRender(column, data, type, row, meta) {
                switch(column) {
                    case 'icon':
                            return '<i class="' + data + '"></i>';
                    default:
                        toastr.warning('render for column ' + column + ' is not defined.' );
                        return data;
                }
            }
    	}
    }

</script>