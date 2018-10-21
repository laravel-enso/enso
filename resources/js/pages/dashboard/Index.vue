<template>

    <div class="columns is-multiline">
        <div class="column is-one-third">
            <chart-card class="
                    is-rounded has-background-light raises-on-hover
                    has-margin-bottom-large
                "
                source="/api/dashboard/pie"/>
            <chart-card class="
                    is-rounded has-background-light raises-on-hover
                    has-margin-bottom-large
                "
                source="/api/dashboard/polar"/>
        </div>
        <div class="column is-one-third">
            <chart-card class="
                    is-rounded has-background-light raises-on-hover
                    has-margin-bottom-large
                "
                source="/api/dashboard/bar"/>
            <chart-card class="
                    is-rounded has-background-light raises-on-hover
                    has-margin-bottom-large
                "
                source="/api/dashboard/bubble"/>
            <chart-card class="
                    is-rounded has-background-light raises-on-hover
                    has-margin-bottom-large
                "
                source="/api/dashboard/line"/>
        </div>
        <div class="column is-one-third">
            <chart-card class="
                    is-rounded has-background-light raises-on-hover
                    has-margin-bottom-large
                "
                source="/api/dashboard/radar"/>
            <chart-card class="
                    is-rounded has-background-light raises-on-hover
                    has-margin-bottom-large
                "
                source="/api/dashboard/doughnut"/>
        </div>
    </div>

</template>

<script>

import ChartCard from '../../components/enso/charts/ChartCard.vue';

export default {
    components: { ChartCard },
};

</script>
