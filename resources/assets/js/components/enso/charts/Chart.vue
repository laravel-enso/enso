<template>

    <canvas class="chart-js"
        width="400"
        :height="400/heightDivider">
    </canvas>

</template>

<script>

import Chart from 'chart.js';

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
            default: () => ({}),
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

    computed: {
        heightDivider() {
            return ['line', 'bar', 'bubble'].includes(this.type) ? 2 : 1;
        },
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
                options: this.options,
            });
        },
        update() {
            if (!this.chart) {
                this.init();
                return;
            }

            const self = this;

            this.chart.data.datasets.forEach((dataset, index) => {
                dataset.data = self.data.datasets[index].data;
            });

            this.chart.update();
        },
    },
};

</script>

<style scoped>

    .chart-js {
        max-width: 100%;
  }

</style>
