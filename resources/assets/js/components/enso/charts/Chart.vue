<template>

    <canvas class="chart-js"/>

</template>

<script>

import Chart from 'chart.js';
import 'chartjs-plugin-datalabels';

// Chart.defaults.global.plugins.datalabels.formatter = value => `${format(value)}m`;

Chart.scaleService.updateScaleDefaults('linear', { ticks: { min: 0 } });

const types = ['line', 'bar', 'radar', 'polarArea', 'pie', 'doughnut', 'bubble'];

export default {
    name: 'Chart',

    props: {
        type: {
            type: String,
            required: true,
            validator: value => types.includes(value),
        },
        data: {
            type: Object,
            required: true,
        },
        options: {
            type: Object,
            default: () => ({}),
        },
    },

    data() {
        return {
            chart: null,
        };
    },

    watch: {
        data() {
            this.update();
        },
    },

    mounted() {
        this.init();
    },

    beforeDestroy() {
        this.chart.destroy();
    },

    methods: {
        init() {
            this.chart = new Chart(this.$el, {
                type: this.type,
                data: this.data,
                options: {
                    tooltips: false,
                    plugins: {
                        datalabels: {
                            anchor: 'end',
                            align: 'top',
                            borderRadius: 3,
                            padding: 2,
                            color: 'white',
                            font: {
                                style: 'bold',
                            },
                            display(context) {
                                const { chart } = context;
                                const meta = chart.getDatasetMeta(context.datasetIndex);
                                return !meta.hidden;
                            },
                        },
                    },
                    ...this.options,
                },
            });
        },
        update() {
            if (!this.chart) {
                this.init();
                return;
            }

            const self = this;

            this.chart.data.datasets
                .forEach((dataset, index) => {
                    dataset.data = self.data.datasets[index].data;
                });

            this.chart.data.labels = self.data.labels;

            this.chart.update();
        },
        svg() {
            return this.$el.toDataURL('image/jpg');
        },
    },
};

</script>

<style scoped>

    .chart-js {
        max-width: 100%;
  }

</style>
