<template>

    <datatable source="system.roles"
        id="roles"
        @configure-role="$router.push({name: 'system.roles.configure', params: { role: $event }})">
    </datatable>

</template>

<script>

	import Datatable from '../../../../components/enso/datatable/Datatable.vue';

    export default {
    	components: { Datatable }
    }

</script>