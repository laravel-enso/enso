<template>

	<div id="app">
		<transition
			enter-active-class="fadeIn"
			leave-active-class="fadeOut">
			<component :is="component"
				class="animated"
				@enter-app="showHome=false"
				@login="showHome=true;setState()">
			</component>
		</transition>
	</div>

</template>

<script>

	import Auth from './layout/Auth.vue';
	import Home from'./layout/Home.vue';
	import AppMain from'./layout/AppMain.vue';
	import { mapState } from 'vuex';
	import { mapGetters } from 'vuex';
	import { mapActions } from 'vuex';

	export default {
		name: 'App',

		components: { Auth, Home, AppMain },

		computed: {
			...mapGetters('auth', ['isAuth']),
			...mapState(['appIsLoaded']),
			component() {
				if (!this.isAuth) {
					return 'auth';
				}

				if (this.showHome) {
					return 'home';
				}

				if (this.appIsLoaded) {
					return 'app-main';
				}
			}
		},

		data() {
			return {
                showHome: false
			}
		},

		beforeMount() {
			if (this.isAuth) {
				this.setState();
			}
		},

		methods: {
			...mapActions(['setState']),
		},
	};

</script>