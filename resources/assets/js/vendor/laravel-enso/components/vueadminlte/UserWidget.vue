<template>

	<div class="box box-widget widget-user">
		<div class="widget-user-header"
			:class="theme"
			:style="'background: url(' + background + ') center center'">
			<h3 class="widget-user-username">{{ name }}</h3>
			<h5 class="widget-user-desc">{{ position }}</h5>
		</div>
		<div class="widget-user-image">
			<img class="img-circle"
				:src="avatar"
				alt="User Avatar">
		</div>
		<div class="box-footer">
			<div class="row">
				<div :class="computedClass"
					v-for="item in items">
					<div class="description-block">
						<h5 class="description-header">
							{{ item.value }}
						</h5>
						<span class="description-text">
							{{ item.label }}
						</span>
					</div>
				</div>
			</div>
		</div>
		<overlay v-if="overlay"></overlay>
	</div>

</template>

<script>

	import Overlay from './Overlay.vue';

    export default {
        components: { Overlay },

		props: {
			theme: {
                type: String,
                required: true
            },
            background: {
            	type: String,
            },
            avatar: {
            	type: String,
            },
            name: {
            	type: String,
            	default: null
            },
            position: {
            	type: String,
            	default: null
            },
            items: {
            	type: Array,
            	default: []
            },
            overlay: {
            	type: Boolean,
            	default: false
            }
		},

		computed: {
			computedClass() {
				return 'col-sm-' + 12/this.items.length
			}
		},

		data() {
			return {
				labels: Store ? Store.labels : ''
            };
		}
	};

</script>

<style>

</style>