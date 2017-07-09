<template>
    <div class="row">
        <div class="col-md-4" v-if="labels"
            v-for="key in keys">
            <div v-for="chart in preferences.charts[key]">
                <chart :type="chart.type"
                    :source="chart.source"
                    :params="params"
                    :ref="chart.title"
                    :collapsed="chart.collapsed"
                    :title = "labels[chart.title]"
                    @changed-state="updateState($event, chart.source)">
                </chart>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        props: {
            params: {
                type: Object
            }
        },

        data() {
            return {
                labels: null,
                keys: ['left', 'center', 'right'],
                preferences: Store.user.preferences.local.dashboard
            }
        },

        methods: {
            setLabels() {
                axios.get('/home/getTranslations', {params: this.getChartLabels()}).then(response => {
                    this.labels = response.data;
                }).catch(error => {
                    this.reportEnsoException(error);
                });
            },
            getChartLabels() {
                let labels = [];

                this.keys.forEach(key => {
                    labels = labels.concat(this.preferences.charts[key].pluck('title'));
                });

                return labels;
            },
        },

        mounted() {
            this.setLabels();
        },

    }

</script>