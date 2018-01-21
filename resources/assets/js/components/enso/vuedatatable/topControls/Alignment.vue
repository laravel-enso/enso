<template>

    <dropdown>
        <span slot="label"
            class="icon is-small">
            <i class="fas fa-align-justify"></i>
        </span>
        <a v-for="(value, key) in template.aligns"
            :key="key"
            class="dropdown-item"
            :class="{ 'is-active': template.align === value }"
            @click="template.align = value;show=false">
            <span class="icon is-small">
                <i :class="icons[key]"></i>
            </span>
        </a>
    </dropdown>

</template>

<script>

import Dropdown from './Dropdown.vue';

export default {
    name: 'Alignment',

    components: { Dropdown },

    props: {
        template: {
            type: Object,
            required: true,
        },
    },

    data() {
        return {
            show: false,
            icons: {
                center: 'fas fa-align-center',
                left: 'fas fa-align-left',
                right: 'fas fa-align-right',
            },
        };
    },

    methods: {
        updateColumnVisibility(column) {
            column.meta.visible = !column.meta.visible;
            this.$emit('update-column-visibility');
        },
    },
};

</script>
