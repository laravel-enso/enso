<template>

	<div class="overlay">
        <spinner class="spinner"
            :line-fg-color="lineFgColor"
            :line-bg-color="lineBgColor"
            :speed="speed"
            :size="size">
        </spinner>
    </div>

</template>

<script>

	import Spinner from 'vue-simple-spinner';

	export default {
		components: { Spinner },

		props: {
			lineFgColor: {
				type: String,
				default: '#41b883'
			},
			lineBgColor: {
				type: String,
				default: 'transparent'
			},
			speed: {
				type: Number,
				default: 1
			},
			size: {
				type: String,
				default: 'medium'
			}
		}
	};

</script>

<style>

	div.overlay {
        display: flex;
    }

    div.overlay > .spinner {
        margin: auto;
    }

</style>