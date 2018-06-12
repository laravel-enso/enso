<template>

    <div class="columns">
        <div class="column"
            v-for="(column, index) in grid"
            :key="index">
            <chart-card v-for="(element, index) in column"
                :key="index"
                :source="element.meta.source"
                class="has-margin-bottom-small"/>
        </div>
    </div>

</template>

<script>

import { mapGetters } from 'vuex';
import ChartCard from '../../components/enso/charts/ChartCard.vue';

export default {
    components: { ChartCard },

    computed: {
        ...mapGetters('preferences', { preferences: 'local' }),
        grid() {
            return this.preferences(this.$route.name).grid;
        },
    },
};

</script>
