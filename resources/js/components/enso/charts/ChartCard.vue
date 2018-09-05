<template>
    <card :title="config.title"
        :icon="icon"
        refresh
        @refresh="get"
        :overlay="loading"
        v-if="config"
        :controls="1">
        <card-control slot="control-1">
            <span class="icon is-small download"
                @click="download">
                <fa icon="download"/>
            </span>
        </card-control>
        <chart :data="config.data"
            class="has-padding-medium"
            :options="config.options"
            :type="config.type"
            ref="chart"/>
    </card>

</template>

<script>

import { saveAs } from 'file-saver';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChartBar, faChartPie, faChartLine, faChartArea, faCircleNotch, faCircle, faDownload }
    from '@fortawesome/free-solid-svg-icons';
import Card from '../bulma/Card.vue';
import CardControl from '../bulma/CardControl.vue';
import Chart from './Chart.vue';

library.add([
    faChartBar, faChartPie, faChartLine, faChartArea, faCircleNotch, faCircle, faDownload,
]);

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
    },

    data() {
        return {
            loading: false,
            config: null,
            icons,
        };
    },

    computed: {
        icon() {
            return this.icons[this.config.type];
        },
    },

    watch: {
        params: {
            handler() {
                this.get();
            },
            deep: true,
        },
    },

    mounted() {
        this.get();
    },

    methods: {
        get() {
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
