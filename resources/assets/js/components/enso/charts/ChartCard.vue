<template>
    <card header
        :title="config.title"
        :icon="icon"
        refresh
        @refresh="get"
        :overlay="loading"
        v-if="config">
        <chart :data="config.data"
            class="has-padding-medium"
            :options="config.options"
            :type="config.type">
        </chart>
    </card>

</template>

<script>

import fontawesome from '@fortawesome/fontawesome';
import { faChartBar, faChartPie, faChartLine, faChartArea, faCircleNotch, faCircle }
    from '@fortawesome/fontawesome-free-solid/shakable.es';
import Card from '../bulma/Card.vue';
import Chart from './Chart.vue';

fontawesome.library.add([
    faChartBar, faChartPie, faChartLine, faChartArea, faCircleNotch, faCircle,
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

    mounted() {
        this.get();
    },

    methods: {
        get() {
            this.loading = true;

            axios.get(this.source, { params: this.params }).then((response) => {
                this.config = response.data;
                this.loading = false;
            }).catch((error) => {
                this.loading = false;
                this.handleError(error);
            });
        },
    },
};

</script>
