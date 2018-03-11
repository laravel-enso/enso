<template>

    <span :class="{ 'is-clickable': column.meta.clickable }"
        @click="$emit('clicked')">
        <slot name="hidden-controls" v-if="hiddenControls"></slot>
        <span v-if="column.meta.boolean"
            class="tag is-table-tag"
            :class="value ? 'is-success' : 'is-danger'">
            <span class="icon is-small">
                <fa :icon="value ? 'check' : 'times'"></fa>
            </span>
        </span>
        <span v-else-if="column.meta.icon && value">
            <fa :icon="value"></fa>
        </span>
        <span v-else-if="column.meta.render">
            <slot name="custom-render"></slot>
        </span>
        <span v-else-if="column.meta.slot">
            <slot :name="column.name"
                :column="column"
                :value="value">
            </slot>
        </span>
        <span v-else-if="column.meta.translation">{{ i18n(value) }}</span>
        <span v-else>{{ value }}</span>
    </span>

</template>

<script>

export default {
    name: 'TableCell',

    props: {
        column: {
            type: Object,
            required: true,
        },
        value: {
            type: null,
            required: true,
        },
        i18n: {
            type: Function,
            required: true,
        },
        hiddenControls: {
            type: Boolean,
            default: false,
        },
    },
};

</script>
