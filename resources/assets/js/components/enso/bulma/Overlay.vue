<template>

	<div class="overlay is-overlay"
		:class="{ 'opacity': opacity }">
        <div class="overlay-loader"
        	:style="overlayColor"
        	:class="loaderSize">
        </div>
    </div>

</template>

<script>

	export default {

		props: {
			size: {
				type: String,
				default: 'small',
				validator(value) {
					return ['small', 'medium', 'large'].includes(value);
				}
			},
			opacity: {
				type: Boolean,
				default: true
			},
			color: {
				type: String,
				default: '#00d1b2'
			}
		},

		data() {
			return {
				overlayColor: {
					'border': '2px solid ' + this.color,
					'border-right-color': 'transparent',
					'border-top-color': 'transparent'
				}
			}
		},

		computed: {
			loaderSize() {
				return 'is-' + this.size
			}
		}
	};

</script>

<style>

	.opacity {
		background: rgba(255, 255, 255, 0.4);
        display: flex;
    }

    div.overlay > .overlay-loader {
        margin: auto;
    }

    .overlay-loader {
		-webkit-animation: spinAround 500ms infinite linear;
		      animation: spinAround 500ms infinite linear;
		border-radius: 290486px;
		content: "";
		display: block;
		height: 1em;
		position: relative;
		width: 1em;
	}

	.overlay-loader.is-medium {
		width: 2em;
		height: 2em;
	}

	.overlay-loader.is-large {
		width: 3em;
		height: 3em;
	}

</style>