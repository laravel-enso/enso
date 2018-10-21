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

    data: () => ({
        chart: null,
    }),

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
                            display({ chart, datasetIndex }) {
                                const meta = chart.getDatasetMeta(datasetIndex);
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

            this.updateDatasets();
            this.chart.data.labels = this.data.labels;
            this.chart.update();
        },
        updateDatasets() {
            if (this.datasetsStructureChanged()) {
                this.$set(this.chart.data, 'datasets', this.data.datasets);
                return;
            }

            this.chart.data.datasets
                .forEach((dataset, index) => {
                    dataset.data = this.data.datasets[index].data;
                    dataset.backgroundColor = this.data.datasets[index].backgroundColor;
                    dataset.datalabels.backgroundColor =
                        this.data.datasets[index].datalabels.backgroundColor;
                });
        },
        datasetsStructureChanged() {
            return this.chart.data.datasets.length !== this.data.datasets.length
                || this.chart.data.datasets
                    .filter(({ label }) => this.data.datasets
                        .findIndex(dataset => dataset.label === label) === -1)
                    .length !== 0;
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
