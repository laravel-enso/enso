<template>

    <label class="label">
        {{ i18n(field.label) }}
        <span class="icon is-small has-text-info"
            v-tooltip="i18n(field.meta.tooltip)"
            v-if="field.meta.tooltip">
            <fa icon="info-circle" size="xs"/>
        </span>
    </label>

</template>

<script>

import { VTooltip } from 'v-tooltip';

export default {
    name: 'FieldLabel',

    directives: { tooltip: VTooltip },

    props: {
        field: {
            type: Object,
            required: true,
        },
        i18n: {
            type: Function,
            required: true,
        },
    },
};
</script>
