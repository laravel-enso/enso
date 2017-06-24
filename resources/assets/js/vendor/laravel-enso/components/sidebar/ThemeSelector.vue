<template>

  	<label class="control-sidebar-subheading">
  		{{ store.labels.theme }}
    	<li class="dropdown pull-right" style="list-style-type: none;">
      		<a class="dropdown-toggle" data-toggle="dropdown" href="#">
        		{{ store.user.preferences.global.theme }}
      		</a>
      		<ul class="dropdown-menu color-theme-selector">
        		<li v-for="theme in store.themes">
	              	<a @click="setTheme(theme)">
	                	{{ theme }}
      				</a>
    			</li>
  			</ul>
		</li>
	</label>

</template>

<script>

	export default {

		data() {
			return {
				store: Store
			}
		},

		methods: {
		    setTheme(theme) {
		    	$('body').removeClass('skin-' + this.store.user.preferences.global.theme).addClass('skin-' + theme);
				this.store.user.preferences.global.theme = theme;
				this.$emit('changed');
		    }
		   }
	 }

</script>

<style>

	ul.color-theme-selector {
		min-width: 0;
		border-color: #141a1d;
		padding: 2px;
		margin: 2px;
	}

	aside#sidebar.control-sidebar.control-sidebar-dark.control-sidebar-open ul.color-theme-selector {
		background-color: #141a1d;
		max-height: 105px;
		overflow-y: scroll;
		cursor:pointer;
	}

	aside#sidebar.control-sidebar.control-sidebar-dark.control-sidebar-open ul.color-theme-selector li > a {
		color: #95989e;
	}

	aside#sidebar.control-sidebar.control-sidebar-light.control-sidebar-open ul.color-theme-selector {
		max-height: 105px;
		overflow-y: scroll;
		cursor:pointer;
	}

</style>