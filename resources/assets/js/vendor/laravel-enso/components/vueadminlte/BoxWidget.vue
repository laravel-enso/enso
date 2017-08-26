<template>

	<div class="box box-widget widget-user-2">
		<div class="widget-user-header"
			:class="theme">
			<div class="widget-user-image">
				<img class="img-square"
					:src="image"
					alt="User Avatar">
			</div>
			<h3 class="widget-user-username">{{ name }}</h3>
			<h5 class="widget-user-desc">{{ position }}</h5>
			</div>
			<div class="box-footer no-padding">
			<ul class="nav nav-stacked">
				<li v-for="item in items">
					<a href="#">{{ item.label }}
					<span class="pull-right badge"
						:class="item.badge">
						{{ item.value }}</span>
					</a>
				</li>
			</ul>
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
            image: {
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

		data() {
			return {
				labels: Store ? Store.labels : ''
            };
		}
	};

</script>