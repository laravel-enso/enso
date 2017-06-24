<template>

	<label class="control-sidebar-subheading">
		<slot name="language"></slot>
		<li class="dropdown pull-right" style="list-style-type: none;">
			<a class="dropdown-toggle" data-toggle="dropdown" href="#">
	            <i class="flag-icon" :class="language.flag"></i>
            </a>
            <ul class="dropdown-menu language-selector">
                <li v-for="language in languages">
                  	<a @click="setLanguage(language.name)">
                    	<i class="flag-icon" :class="language.flag">
                    	</i>
                  	</a>
                </li>
            </ul>
        </li>
    </label>

</template>

<script>

	export default {

		props: {
			languages: {
				type: Array,
				required: true
			}
		},

		data() {
			return {
				globalPreferences: Preferences
			}
		},

		computed: {
			language() {
	        	let lang = this.globalPreferences.lang;

	        	return this.languages.find(function(language) {
	        		return language.name === lang;
	        	});
	        }
		},

		methods: {
			setLanguage(lang) {
		    	this.globalPreferences.lang = lang;
				this.$emit('changed');
		    }
		}
	};

</script>

<style>

	ul.language-selector {
		min-width: 0;
		background-color: #141a1d;
		border-color: #141a1d;
		padding: 2px;
		margin: 2px;
	}

	ul.language-selector li a {
		cursor: pointer;
	}

</style>