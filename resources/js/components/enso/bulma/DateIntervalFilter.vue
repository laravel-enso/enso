<template>

    <div class="date-interval-filter">
        <div class="has-text-centered">
            <strong>{{ title }}</strong>
        </div>
        <div class="columns is-mobile">
            <div class="column">
                <datepicker v-model="interval.min"
                    :format="format"
                    :is-warning="equal"
                    :is-danger="inversed"
                    :locale="locale"
                    :placeholder="minLabel"
                    @input="update"/>
            </div>
            <div class="column">
                <datepicker v-model="interval.max"
                    :format="format"
                    :is-danger="inversed"
                    :is-warning="equal"
                    :locale="locale"
                    :placeholder="maxLabel"
                    @input="update"/>
            </div>
        </div>
    </div>

</template>

<script>

import { compareAsc, parse } from 'date-fns';
import Datepicker from '../vueforms/Datepicker.vue';

export default {
    name: 'DateIntervalFilter',

    components: { Datepicker },

    props: {
        format: {
            type: String,
            default: 'd-m-Y',
        },
        locale: {
            type: String,
            default: 'en',
        },
        maxLabel: {
            type: String,
            default: 'To',
        },
        minLabel: {
            type: String,
            default: 'From',
        },
        title: {
            type: String,
            default: null,
        },
    },

    data: () => ({
        interval: {
            min: null,
            max: null,
        },
    }),

    computed: {
        alternateFormat() {
            return this.format.replace('d', 'dd')
                .replace('m', 'MM')
                .replace('Y', 'yyyy');
        },
        sanitizedInterval() {
            return {
                min: this.interval.min || null,
                max: this.interval.max || null,
            };
        },
        parsedMax() {
            return parse(this.interval.max, this.alternateFormat, new Date());
        },
        parsedMin() {
            return parse(this.interval.min, this.alternateFormat, new Date());
        },
        inversed() {
            return !!this.interval.min
                && !!this.interval.max
                && compareAsc(this.parsedMin, this.parsedMax) === 1;
        },
        equal() {
            return !!this.interval.min
                && !!this.interval.max
                && compareAsc(this.parsedMin, this.parsedMax) === 0;
        },
    },

    methods: {
        update() {
            this.$emit('update', this.sanitizedInterval);
        },
    },
};

</script>

<style scoped>

    .date-interval-filter {
        padding: 0.5rem;
    }

</style>
