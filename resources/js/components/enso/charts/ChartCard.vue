<template>
    <card refresh
        :title="title"
        :icon="icon"
        :overlay="loading"
        :controls="1"
        @refresh="fetch"
        v-if="config">
        <card-control slot="control-1">
            <span class="icon is-small download"
                @click="download">
                <fa icon="download"/>
            </span>
        </card-control>
        <chart class="has-padding-medium"
            :data="data"
            :options="config.options"
            :type="config.type"
            ref="chart"/>
    </card>
</template>

<script>

import { saveAs } from 'file-saver';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faChartBar, faChartPie, faChartLine, faChartArea, faCircleNotch, faCircle, faDownload,
} from '@fortawesome/free-solid-svg-icons';
import Card from '../bulma/Card.vue';
import CardControl from '../bulma/CardControl.vue';
import Chart from './Chart.vue';

library.add(
    faChartBar, faChartPie, faChartLine, faChartArea, faCircleNotch, faCircle, faDownload,
);

const icons = {
    bar: faChartBar,
    pie: faChartPie,
    line: faChartLine,
    radar: faChartArea,
    polarArea: faCircleNotch,
    doughnut: faChartPie,
    bubble: faCircle,
};

export default {
    name: 'ChartCard',

    components: { Card, CardControl, Chart },

    props: {
        source: {
            type: String,
            required: true,
        },
        params: {
            type: Object,
            default: null,
        },
        i18n: {
            type: Function,
            default(key) {
                return this.$options.methods
                    && Object.keys(this.$options.methods).includes('__')
                    ? this.__(key)
                    : key;
            },
        },
    },

    data: () => ({
        loading: false,
        config: null,
        icons,
    }),

    computed: {
        icon() {
            return this.icons[this.config.type];
        },
        title() {
            return this.i18n(this.config.title);
        },
        data() {
            switch (this.config.type) {
            case 'bubble':
                return {
                    datasets: this.config.data.datasets.map((dataset) => {
                        dataset.label = this.i18n(dataset.label);
                        return dataset;
                    }),
                };
            case 'line':
            case 'bar':
                return {
                    datasets: this.config.data.datasets.map((dataset) => {
                        dataset.label = this.i18n(dataset.label);
                        return dataset;
                    }),
                    labels: this.config.data.labels.map(label => this.i18n(label)),
                };
            default:
                return {
                    datasets: this.config.data.datasets,
                    labels: this.config.data.labels.map(label => this.i18n(label)),
                };
            }
        },
    },

    watch: {
        params: {
            handler() {
                this.fetch();
            },
            deep: true,
        },
    },

    mounted() {
        this.fetch();
    },

    methods: {
        fetch() {
            this.loading = true;

            axios.get(this.source, { params: this.params })
                .then(({ data }) => {
                    this.config = data;
                    this.loading = false;
                }).catch((error) => {
                    this.loading = false;
                    this.handleError(error);
                });
        },
        download() {
            this.$refs.chart.$el
                .toBlob(blob => saveAs(blob, `${this.config.title}.png`));
        },
    },
};

</script>
