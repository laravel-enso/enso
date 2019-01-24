<template>
    <span>
        <span v-if="index > 0">
            &
        </span>
        -
        {{ __(change.attribute) }}
        {{ __('was changed') }}
        <span v-if="!isBool(change.before)">
            {{ __('from') }}
            <strong>{{ change.before }}</strong>
        </span>
        {{ __('to') }}
        <span :class="[
                'icon',
                change.after ? 'has-text-success' : 'has-text-danger'
            ]"
            v-if="isBool(change.after)">
            <fa :icon="change.after ? 'check-circle' : 'times-circle'"/>
        </span>
        <strong v-else>
            {{ change.after }}
        </strong>
    </span>
</template>

<script>

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

library.add(faCheckCircle, faTimesCircle);

export default {
    name: 'Change',

    props: {
        change: {
            type: Object,
            required: true,
        },
        index: {
            type: Number,
            required: true,
        },
    },

    methods: {
        isBool(value) {
            return value === true || value === false;
        },
    },
};

</script>
