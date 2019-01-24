<template>
    <dropdown>
        <span slot="label">
            {{ length }}
        </span>
        <a v-for="(value, index) in template.lengthMenu"
            :key="index"
            class="dropdown-item"
            :class="{ 'is-active': value === length }"
            @click="$emit('update-length', value)">
            {{ value }}
        </a>
    </dropdown>
</template>

<script>

import Dropdown from './Dropdown.vue';

export default {
    name: 'LengthMenu',

    components: { Dropdown },

    props: {
        template: {
            type: Object,
            required: true,
        },
        length: {
            type: Number,
            required: true,
        },
    },
};

</script>
