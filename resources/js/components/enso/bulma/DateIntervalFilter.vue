<template>
    <div class="date-interval-filter is-paddingless">
        <div v-if="!compact"
            class="header has-background-light has-text-centered">
            <strong>{{ i18n(title) }}</strong>
        </div>
        <div v-tooltip="compact ? i18n(title) : null"
            :class="['dates-wrapper', {'has-background-light': compact}]">
            <div class="columns is-mobile is-variable is-1 is-centered">
                <div class="column">
                    <datepicker v-model="interval.min"
                        :format="format"
                        :is-warning="equal"
                        :is-danger="inversed"
                        :locale="locale"
                        :placeholder="i18n(minLabel)"
                        @input="update"/>
                </div>
                <div class="column">
                    <datepicker v-model="interval.max"
                        :format="format"
                        :is-danger="inversed"
                        :is-warning="equal"
                        :locale="locale"
                        :placeholder="i18n(maxLabel)"
                        @input="update"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { compareAsc, parse } from 'date-fns';
import { VTooltip } from 'v-tooltip';
import Datepicker from '../vueforms/Datepicker.vue';

export default {
    name: 'DateIntervalFilter',

    directives: { tooltip: VTooltip },

    components: { Datepicker },

    props: {
        compact: {
            type: Boolean,
            default: false,
        },
        format: {
            type: String,
            default: 'd-m-Y',
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

<style lang="scss" scoped>

    .date-interval-filter {
        .header {
            border-top-left-radius: inherit;
            border-top-right-radius: inherit;
            padding-top: 0.5em;
        }

        .dates-wrapper {
            border-radius: inherit;
            padding: 0.25em;
        }
    }

</style>
