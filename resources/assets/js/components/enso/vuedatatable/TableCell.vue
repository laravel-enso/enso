<template>

    <span :class="{ 'is-clickable has-text-info': column.meta.clickable }"
         @click="column.meta.clickable ? $emit('clicked') : null">
        <slot name="hidden-controls" v-if="hiddenControls"/>
        <span v-if="column.meta.boolean"
            class="tag is-table-tag"
            :class="value ? 'is-success' : 'is-danger'">
            <span class="icon is-small">
                <fa :icon="value ? 'check' : 'times'"/>
            </span>
        </span>
        <span v-else-if="column.meta.icon && value">
            <fa :icon="value"/>
        </span>
        <span v-else-if="column.meta.render">
            <slot name="custom-render"/>
        </span>
        <span v-else-if="column.meta.slot">
            <slot :name="column.name"/>
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

<style lang="scss" scoped>

    .is-clickable {
        cursor: pointer;
    }

    .tag.is-table-tag {
        font-size: 0.8rem;
        font-weight: bold;
        height: 1.4em;
        padding: 7px;
    }

</style>
