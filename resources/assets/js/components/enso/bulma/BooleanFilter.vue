<template>

    <vue-filter icons
        off-label=""
        :value="value"
        :options="options"
        v-bind="$attrs"
        v-on="$listeners">
    </vue-filter>

</template>

<script>

import VueFilter from '../bulma/VueFilter.vue';

export default {
    name: 'BooleanFilter',

    components: { VueFilter },

    props: {
        value: {
            type: null,
            default: null,
        },
    },

    data() {
        return {
            options: [{
                value: true,
                label: 'check',
                class: 'has-text-success',
            }, {
                value: false,
                label: 'times',
                class: 'has-text-danger',
            }],
        };
    },
};

</script>
