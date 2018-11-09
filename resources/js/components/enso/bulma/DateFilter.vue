<template>

    <div class="date-filter is-paddingless">
        <div class="header has-text-centered has-padding-medium has-background-light">
            <strong v-if="selected === filters.custom">{{ i18n('Between') }}</strong>
            <strong v-else>{{ i18n('When') }}</strong>
        </div>
        <div class="has-padding-large">
            <div class="tags-wrapper">
                <span :class="['tag filter', {'is-warning': selected === key}]"
                    v-for="(type, key) in filters"
                    :key="key"
                    @click="selected = key; update()">
                    {{ i18n(type) }}
                </span>
            </div>
            <div class="date-interval"
                ref="dateInterval">
                <transition enter-active-class="fadeInDown"
                    leave-active-class="fadeOutUp"
                    @enter="expand"
                    @leave="shrink">
                    <div class="columns is-mobile animated has-margin-top-small"
                        v-show="selected === filters.custom"
                        ref="filter">
                        <div class="column picker-wrapper">
                            <datepicker v-model="interval.min"
                                :format="format"
                                :is-danger="inversed"
                                :is-warning="equal"
                                :locale="locale"
                                :placeholder="i18n('From')"
                                :disabled="selected !== filters.custom"
                                @input="update()"/>
                        </div>
                        <div class="column picker-wrapper">
                            <datepicker v-model="interval.max"
                                :format="format"
                                :is-danger="inversed"
                                :is-warning="equal"
                                :locale="locale"
                                :placeholder="i18n('To')"
                                :disabled="selected !== filters.custom"
                                @input="update()"/>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </div>

</template>

<script>

import { addDays, compareAsc, format, parse, subDays, subMonths, subWeeks } from 'date-fns';
import Datepicker from '../vueforms/Datepicker.vue';

export default {
    name: 'DateFilter',

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
        i18n: {
            type: Function,
            default(key) {
                return this.$options.methods &&
                    Object.keys(this.$options.methods).includes('__')
                    ? this.__(key)
                    : key;
            },
        },
    },

    data: () => ({
        interval: {
            min: null,
            max: null,
        },
        filters: {
            today: 'today',
            yesterday: 'yesterday',
            lastWeek: 'last week',
            lastMonth: 'last month',
            custom: 'custom',
        },
        selected: 'today',
    }),

    computed: {
        alternateFormat() {
            return this.format.replace('d', 'DD')
                .replace('m', 'MM')
                .replace('Y', 'YYYY');
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

    mounted() {
        this.update();
    },

    methods: {
        update() {
            if (this.selected !== this.filters.custom) {
                this[this.selected]();
            }

            this.$emit('update', this.interval);
        },
        expand() {
            this.$refs.dateInterval.style.height = `${this.$refs.filter.clientHeight}px`;
        },
        shrink() {
            this.$refs.dateInterval.style.height = 0;
        },
        today() {
            this.interval.min = format(new Date(), this.alternateFormat);
            this.interval.max = format(addDays(new Date(), 1), this.alternateFormat);
        },
        yesterday() {
            this.interval.min = format(subDays(new Date(), 1), this.alternateFormat);
            this.interval.max = format(new Date(), this.alternateFormat);
        },
        lastWeek() {
            this.interval.min = format(subWeeks(new Date(), 1), this.alternateFormat);
            this.interval.max = format(addDays(new Date(), 1), this.alternateFormat);
        },
        lastMonth() {
            this.interval.min = format(subMonths(new Date(), 1), this.alternateFormat);
            this.interval.max = format(addDays(new Date(), 1), this.alternateFormat);
        },
    },
};

</script>

<style lang="scss" scoped>

    .date-filter {
        .header {
            border-top-left-radius: inherit;
            border-top-right-radius: inherit;
        }

        .tag.filter {
            cursor: pointer;
        }

        .date-interval {
            height: 0;
            transition: height .5s ease;

            .picker-wrapper {
                padding: 0.4em 0.8em 0;
            }
        }

        .tag.filter:not(:last-child) {
            margin-right: 0.5em;
            margin-bottom: 0.3em;
        }
    }

</style>
