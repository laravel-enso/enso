<template>

    <div class="container">
    	<div class="columns is-centered">
    		<div class="column is-three-quarters">
    			<div class="tabs">
				  	<ul>
					    <li :class="{ 'is-active' : $router.currentRoute.name === 'system.permissions.create' }">
					    	<a @click="$router.push({ name: 'system.permissions.create' })">
					    		{{ __('Permission') }}
					    	</a>
					    </li>
					    <li :class="{ 'is-active' : $router.currentRoute.name === 'system.permissions.createResource' }">
					    	<a @click="$router.push({ name: 'system.permissions.createResource' })">
					    		{{ __('Resource') }}
					    	</a>
					    </li>
				  	</ul>
				</div>
				<router></router>
    		</div>
    	</div>
    </div>

</template>

<script>

import { mapGetters } from 'vuex';
import Router from '../../layout/Router.vue';

export default {
    components: { Router },

    computed: {
        ...mapGetters('locale', ['__']),
    },
};

</script>
