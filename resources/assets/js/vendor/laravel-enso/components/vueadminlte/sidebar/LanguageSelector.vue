<template>

	<label class="control-sidebar-subheading">
		{{ store.labels.language }}
		<li class="dropdown pull-right"
			style="list-style-type: none;">
			<a href="#"
				class="dropdown-toggle"
				data-toggle="dropdown">
	            <i :class="language.flag"></i>
            </a>
            <ul class="dropdown-menu language-selector">
                <li v-for="language in store.languages">
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

		data() {
			return {
				store: Store
			}
		},

		computed: {
			language() {
				let self = this;

	        	return this.store.languages.find(function(language) {
	        		return language.name === self.store.user.preferences.global.lang;
	        	});
	        }
		},

		methods: {
			setLanguage(lang) {
		    	this.store.user.preferences.global.lang = lang;
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