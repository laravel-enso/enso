<template>
	<aside id="sidebar"
		class="control-sidebar"
		:class="'control-sidebar-' + sidebarTheme">
	  	<ul class="nav nav-tabs nav-justified control-sidebar-tabs">
	    	<!-- <li><a href="#control-sidebar-home-tab" data-toggle="tab"><i class="fa fa-home"></i></a></li> -->
	    	<li class="active"><a href="#control-sidebar-settings-tab" data-toggle="tab"><i class="fa fa-gears"></i></a></li>
	  	</ul>
	  	<div class="tab-content">
		  	<sidebar-settings></sidebar-settings>
<!-- 		  	<div class="tab-pane"
				id="control-sidebar-home-tab">
			</div> -->
		</div>
	</aside>
</template>

<script>

	export default {

		data() {
			return {
			    preferences: Store.user.preferences,
			}
		},

		computed: {
	        sidebarTheme() {
	        	return this.preferences.global.theme.indexOf('light') != -1 ? 'light' : 'dark';
	        }
		},

		mounted() {
			initBootstrapSelect('select.select', '100%', true, $.fn.selectpicker.defaults.noneSelectedText); //fixme
		}
	 }

</script>

<style>

	#control-sidebar-settings-tab {
		margin-top: 10px;
	}

	aside#sidebar.control-sidebar.control-sidebar-light.control-sidebar-open a.dropdown-toggle {
		color: #141a1d;
	}

	aside#sidebar.control-sidebar.control-sidebar-open {
		height: 100%;
	}

	aside#sidebar.control-sidebar.control-sidebar-dark.control-sidebar-open a.dropdown-toggle {
		color: #fff;
	}

</style>