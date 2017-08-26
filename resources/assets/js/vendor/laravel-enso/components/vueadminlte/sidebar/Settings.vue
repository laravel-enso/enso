<template>

	<div class="tab-pane active"
		id="control-sidebar-settings-tab">

		<label class="control-sidebar-subheading">
			{{ store.labels.generalSettings }}
			<button class="btn btn-xs btn-warning pull-right"
				@click="resetToDefault()">{{ store.labels.reset }}
			</button>
		</label>

  		<hr>

		<language-selector @changed="setPreference(true)">
		</language-selector>

		<hr>

    	<tutorial :label="store.labels.startTutorial">
		</tutorial>

  		<hr>

  		<setting-switch :label="store.labels.stateSave"
  			v-model="store.user.preferences.global.dtStateSave"
  			@input="setPreference()">
  		</setting-switch>

  		<hr>

  		<setting-switch :label="store.labels.collapse"
  			v-model="store.user.preferences.global.collapsedSidebar"
  			@input="setPreference()">
  		</setting-switch>

      	<hr>

      	<setting-switch :label="store.labels.fixed"
  			v-model="store.user.preferences.global.fixedHeader"
  			@input="setPreference(true)">
  		</setting-switch>

  		<hr>

		<theme-selector @changed="setPreference()">
		</theme-selector>

  		<hr>

	</div>

</template>

<script>

	export default {

		data() {
			return {
			    store: Store
			}
		},

		computed: {
	        bodyClass() {
	            return 'sidebar-mini skin-' + this.store.user.preferences.global.theme
	            	+ (this.store.user.preferences.global.fixedHeader ? ' fixed' : '')
	            	+ (this.store.user.preferences.global.collapsedSidebar ? ' sidebar-collapse' : '');
	        }
		},

		watch: {
			'bodyClass': {
				handler: 'setBodyClass'
			}
		},

		methods: {
		    setBodyClass() {
		        $('body').removeClass();
		        $('body').addClass(this.bodyClass);
		    },
		    setPreference(reload = false) {
		        axios.patch('/core/preferences/setPreferences',
		        	{ 'global': this.store.user.preferences.global }
		        ).then(response => {
		        	if (reload) {
		        		window.location.reload();
		        	}
		        }).catch(error => {
		        	this.reportEnsoException(error);
		        });
		    },
		    resetToDefault() {
		    	axios.post('/core/preferences/resetToDefault').then(response => {
		    		window.location.reload();
	    		}).catch(error => {
		        	this.reportEnsoException(error);
		        });
		    }
		}
	 }

</script>