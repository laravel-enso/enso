<template>

    <dropdown>
        <span slot="label"
            class="icon is-small">
            <i class="fas fa-eye"></i>
        </span>
        <a v-for="(column, index) in template.columns"
            :key="index"
            class="dropdown-item"
            :class="{ 'is-active': column.meta.visible }"
            @click="column.meta.visible = !column.meta.visible;$emit('update-visibility')">
            {{ column.label }}
        </a>
    </dropdown>

</template>

<script>

import Dropdown from './Dropdown.vue';

export default {
    name: 'ColumnVisibility',

    components: { Dropdown },

    props: {
        template: {
            type: Object,
            required: true,
        },
    },
};

</script>
