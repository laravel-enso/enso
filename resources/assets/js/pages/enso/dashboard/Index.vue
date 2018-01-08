<template>

    <div>
        <div class="columns">
            <div class="column"
                v-for="(column, index) in grid"
                :key="index">
                <chart-card v-for="(element, index) in column"
                    :key="index"
                    :source="element.meta.source"
                    class="has-margin-bottom-small">
                </chart-card>
            </div>
        </div>
    </div>

</template>

<script>

import PageHeader from '../layout/PageHeader.vue';
import ChartCard from '../../../components/enso/charts/ChartCard.vue';
import { mapGetters } from 'vuex';

export default {
    components: { ChartCard, PageHeader },

    computed: {
        ...mapGetters('locale', ['__']),
    },

    data() {
        return {
            grid: [],
        };
    },

    created() {
        axios.get(route('dashboard.index', [], false).toString()).then((response) => {
            this.grid = response.data.grid;
        });
    },
};

</script>
