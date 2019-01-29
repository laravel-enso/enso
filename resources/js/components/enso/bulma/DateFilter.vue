<template>
    <div class="date-filter is-paddingless">
        <div v-if="!compact"
            class="header has-text-centered has-background-light">
            <strong>
                {{ title }}
            </strong>
        </div>
        <div v-tooltip="compact ? title : null"
            :class="['filter-wrapper', {'has-background-light': compact}]">
            <transition enter-active-class="fadeIn"
                leave-active-class="fadeOut"
                mode="out-in">
                <div v-if="!isCustom"
                    key="tags"
                    class="tags-wrapper has-text-centered animated">
                    <div class="filter-tags">
                            <span v-for="(type, key) in filters"
                            :key="key"
                            :class="['tag', {'is-warning': selected === key}]"
                            @click="selected = key; update()">
                            {{ i18n(type) }}
                        </span>
                    </div>
                </div>
                <div v-else
                    key="dates"
                    class="dates-wrapper animated">
                    <div class="columns is-mobile is-variable is-1 is-centered">
                        <div class="column is-narrow">
                            <a class="button is-naked">
                                <span class="icon is-small"
                                    @click="selected = filters.today">
                                    <fa icon="arrow-left"/>
                                </span>
                            </a>
                        </div>
                        <div class="column">
                            <datepicker v-model="interval.min"
                                :format="format"
                                :is-danger="inversed"
                                :is-warning="equal"
                                :locale="locale"
                                :placeholder="i18n('From')"
                                :disabled="!isCustom"
                                @input="update()"/>
                        </div>
                        <div class="column">
                            <datepicker v-model="interval.max"
                                :format="format"
                                :is-danger="inversed"
                                :is-warning="equal"
                                :locale="locale"
                                :placeholder="i18n('To')"
                                :disabled="!isCustom"
                                @input="update()"/>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>


import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import {
    addDays, compareAsc, format, parse, subDays, subMonths, subWeeks,
} from 'date-fns';
import { VTooltip } from 'v-tooltip';
import Datepicker from '../vueforms/Datepicker.vue';

library.add(faArrowLeft);

export default {
    name: 'DateFilter',

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
        default: {
            type: String,
            default: 'today',
            validator: v => ['today', 'yesterday', 'last week', 'last month', 'all'].includes(v),
        },
    },

    data: v => ({
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
            all: 'all',
        },
        selected: v.default,
    }),

    computed: {
        isCustom() {
            return this.selected === this.filters.custom;
        },
        title() {
            return this.isCustom
                ? this.i18n('Between')
                : this.i18n('When');
        },
        alternateFormat() {
            return this.format.replace('d', 'dd')
                .replace('m', 'MM')
                .replace('Y', 'yyyy');
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
        all() {
            this.interval.min = null;
            this.interval.max = null;
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
            padding-top: 0.5em;
        }

        .tag {
            cursor: pointer;
            &:not(:last-child) {
                margin-right: 0.5em;
                margin-bottom: 0.3em;
            }
        }

        .filter-wrapper {
            border-radius: inherit;
            padding: 0.25em;
        }

        .tags-wrapper {
            .filter-tags {
                min-height: 2.25em;
                padding: 0.2em;
            }
        }
    }

</style>
