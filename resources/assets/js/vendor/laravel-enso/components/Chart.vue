<template>
	<div :class="'box box-' + headerClass">
        <div class="box-header with-border" :class="{'draggable': draggable}">
	        <h3 class="box-title">
	        	<i :class="icons[type]"></i>
                <slot name="chart-title"></slot>
            </h3>
            <div class="box-tools pull-right">
                <button type="button"
                	class="btn btn-box-tool btn-sm"
                	@click="getData">
                    <i class="fa fa-refresh"></i>
                </button>
                <button class="btn btn-box-tool btn-sm" data-widget="collapse">
                    <i class="fa fa-minus">
                    </i>
                </button>
            </div>
        </div>
        <div class="box-body">
        	<canvas :id="'canvas-' + _uid"></canvas>
    	</div>
    	<div class="overlay" v-if="loading">
    		<i class="fa fa-spin fa-spinner spinner-custom"></i>
    	</div>
    </div>
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
			headerClass: {
				type: String,
				default: 'primary'
			},
			options: {
				type: Object,
				default() {
					return {};
				}
			},
			params: {
				type: Object,
			},
            draggable: {
            	type: Boolean,
            	default: false
            },
		},
		data() {
			return {
				chart: null,
	            loading: false,
	            data: {},
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
			getData() {
				this.loading = true;

				axios.get(this.source, { params:this.params }).then(response => {
					this.data = response.data;
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

				let data = this.data;

				this.chart.data.datasets.forEach((dataset, index) => {
					dataset.data = data.datasets[index].data;
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
			this.getData();
		},
		beforeDestroy() {
			this.destroy();
		}
	};

</script>