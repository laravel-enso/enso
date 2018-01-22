<template>
    <card header
        :title="config.title"
        :icon="icon"
        refresh
        @refresh="get"
        :overlay="loading">
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

const icons = {
    bar: 'fas fa-chart-bar',
    pie: 'fas fa-chart-pie',
    line: 'fas fa-chart-line',
    radar: 'fas fa-chart-area',
    polarArea: 'fas fa-circle-notch',
    doughnut: 'fas fa-chart-pie',
    bubble: 'fas fa-circle',
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
            default: null,
        },
    },

    computed: {
        icon() {
            return this.icons[this.config.type];
        },
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
            icons,
        };
    },

    methods: {
        get() {
            this.loading = true;

            axios.get(this.source, { params: this.params }).then((response) => {
                this.config = response.data;
                this.loading = false;
                this.initialised = this.initialised || true;
            }).catch((error) => {
                this.loading = false;
                this.handleError(error);
            });
        },
    },

    mounted() {
        this.get();
    },
};

</script>
