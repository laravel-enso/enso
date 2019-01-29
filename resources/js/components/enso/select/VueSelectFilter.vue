<template>
    <div class="vue-filter is-paddingless">
        <div v-if="!compact"
            class="header has-text-centered has-background-light">
            <b>{{ i18n(title) }}</b>
        </div>
        <vue-select v-tooltip="compact ? i18n(title) : null"
            :class="['select-wrapper', {'has-background-light': compact}]"
            :value="value"
            v-bind="$attrs"
            v-on="$listeners"/>
    </div>
</template>

<script>

import { VTooltip } from 'v-tooltip';
import VueSelect from './VueSelect.vue';

export default {
    name: 'VueSelectFilter',

    directives: { tooltip: VTooltip },

    components: { VueSelect },

    props: {
        compact: {
            type: Boolean,
            default: false,
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
        title: {
            type: String,
            default: null,
        },
        value: {
            type: null,
            default: null,
        },
    },
};

</script>

<style lang="scss" scoped>

    .vue-filter {
        .header {
            border-top-left-radius: inherit;
            border-top-right-radius: inherit;
            padding-top: 0.5em;
        }

        .select-wrapper {
            padding: 0.25em;
        }
    }

</style>
