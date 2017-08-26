<template>

	<box :theme="theme"
        collapsible refresh removable
        :solid="solid"
        :open="true"
        @refresh="get()"
        :icon="icons[type]"
        :title="title"
        :overlay="loading">
        <div class="chart">
        	<canvas :id="'canvas-' + _uid"></canvas>
    	</div>
    </box>
</template>

<script>

	export default {
		props: {
			type: {
				type: String,
				required: true
			},
			source: {
				type: String,
				default: ''
			},
			theme: {
				type: String,
				default: 'primary'
			},
			solid: {
				type: Boolean,
				default: false
			},
			params: {
				type: Object,
			},
		},

		data() {
			return {
				chart: null,
	            loading: false,
	            data: {},
	            options: {},
	            title: 'Chart',
	            icons: {
	            	bar: 'fa fa-bar-chart',
	            	pie: 'fa fa-pie-chart',
	            	line: 'fa fa-line-chart',
	            	radar: 'fa fa-area-chart',
	            	polarArea: 'fa fa-circle-o-notch',
	            	doughnut: 'fa fa-pie-chart',
	            	bubble: 'fa fa-circle-thin'
	            },
			};
		},

		methods: {
			get() {
				this.loading = true;

				axios.get(this.source, { params:this.params }).then(response => {
					this.data = response.data.data;
					this.options = Object.assign({}, this.options, response.data.options);
					this.title = response.data.title || this.title;
					this.loading = false;
					this.updateData();
				}).catch(error => {
					this.loading = false;
					this.reportEnsoException(error);
				});
			},
			init() {
				this.chart = new Chart($("#canvas-" + this._uid), {
		            type: this.type,
		            data: this.data,
		            options: this.options,
	        	});
			},
			updateData() {
				if (!this.chart) {
					return this.init();
				}

				let self = this;

				this.chart.data.datasets.forEach((dataset, index) => {
					dataset.data = self.data.datasets[index].data;
				});

				this.chart.update();
			},
			resize() {
				this.chart.resize();
			},
			destroy() {
				this.chart.destroy();
			}
		},

		mounted() {
			this.get();
		},

		beforeDestroy() {
			this.destroy();
		}
	};

</script>