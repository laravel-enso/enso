<template>
    <div class="row">
        <div class="col-md-4"
            v-for="key in keys">
            <div v-for="(chart, type) in preferences.charts[key]">
                <chart :type="type"
                    :source="chart.source"
                    :params="params"
                    :ref="chart.title"
                    :collapsed="chart.collapsed"
                    @changed-state="updateState($event, chart.source)">
                    <span slot="chart-title">{{ chart.title }}</span>
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
                keys: ['left', 'center', 'right'],
                preferences: Store.user.preferences.local.dashboard
            }
        }
    }

</script>