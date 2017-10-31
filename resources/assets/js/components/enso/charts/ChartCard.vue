<template>
	<card :title="config.title"
		:icon="icon"
		@refresh="get"
		:overlay="loading"
		refresh header>
		<chart :data="config.data"
			class="has-padding-medium"
			:options="config.options"
			:type="config.type"
			v-if="initialised">
		</chart>
	</card>

</template>

<script>

	import Card from '../bulma/Card.vue';
	import Chart from './Chart.vue';

	const types = ['line', 'bar', 'radar', 'polarArea', 'pie', 'doughnut', 'bubble'];
	const icons = {
		bar: 'fa fa-bar-chart', pie: 'fa fa-pie-chart', line: 'fa fa-line-chart', radar: 'fa fa-area-chart',
		polarArea: 'fa fa-circle-o-notch', doughnut: 'fa fa-pie-chart', bubble: 'fa fa-circle-thin'
    };

	export default {
		name: 'ChartCard',

		components: { Card, Chart },

		props: {
			source: {
				type: String,
                required: true,
			},
			params: {
				type: Object,
				default: null
			},
		},

		computed: {
			icon() {
				return this.icons[this.config.type]
			}
		},

		data() {
			return {
				initialised: false,
				loading: false,
				config: {
		            type: null,
		            data: {},
		            options: null,
		            title: 'Chart',
				},
	            icons: icons,
			};
		},

		methods: {
			get() {
				this.loading = true;

				axios.get(this.source, { params:this.params }).then(response => {
					this.config = response.data;
					this.loading = false;
					this.initialised = this.initialised || true;
				}).catch(error => {
					this.loading = false;
					this.handleError(error);
				});
			}
		},

		mounted() {
			this.get();
		}
	};

</script>