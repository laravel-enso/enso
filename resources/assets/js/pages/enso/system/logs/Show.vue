<template>

	<article class="message">
	  	<div class="message-header">
	    	<p>{{ __("The log file") }} <code>{{ log.name }}</code> {{ __("was last updated") }} {{ log.modified ? log.modified.date : null | timeFromNow }}. {{ __("Current file size is") }} {{ log.size }} {{ __("MB") }}</p>
	    	<button class="delete" aria-label="delete"></button>
	  	</div>
	  	<div class="message-body">
	    	<pre v-hljs v-if="content">
				<code class="php">
{{ content }}
				</code>
			</pre>
	  	</div>
	</article>

</template>

<script>

	import { mapGetters } from 'vuex';

	export default {
		computed: {
			...mapGetters('locale', ['__'])
		},

		data() {
			return {
				log: {},
				content: null
			}
		},

		created() {
			axios.get(route('system.logs.show', this.$route.params.id, false)).then(response => {
				this.log = response.data.log;
				this.content = response.data.content || this.__('The log file is empty');
			}).catch(error => {
				this.handleError(error);
            });
		}
	};

</script>

<style src="highlight.js/styles/atom-one-light.css"></style>