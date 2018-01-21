<template>

    <dropdown class="is-right">
        <span slot="label"
            class="icon is-small">
            <i class="fas fa-table"></i>
        </span>
        <a v-for="(style, key) in template.styles"
            :key="key"
            class="dropdown-item"
            :class="{ 'is-active': has(style) }"
            @click="toggle(style)">
            {{ key }}
        </a>
    </dropdown>

</template>

<script>

import Dropdown from './Dropdown.vue';

export default {
    name: 'StyleSelector',

    components: { Dropdown },

    props: {
        template: {
            type: Object,
            required: true,
        },
    },

    computed: {
        styles() {
            return this.template.style.split(' ');
        },
    },

    methods: {
        has(style) {
            return this.styles.includes(style);
        },
        toggle(style) {
            this.template.style = this.has(style)
                ? this.styles.filter(value => value !== style).join(' ')
                : `${this.template.style} ${style}`;
        },
    },
};

</script>
