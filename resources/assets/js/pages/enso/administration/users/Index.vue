<template>

    <datatable source="administration.users"
        id="users">
    </datatable>

</template>

<script>

	import Datatable from '../../../../components/enso/datatable/Datatable.vue';

    export default {
    	components: { Datatable }
    }

</script>