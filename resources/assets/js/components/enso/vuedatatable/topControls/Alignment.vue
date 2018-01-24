<template>

    <dropdown>
        <span slot="label"
            class="icon is-small">
            <fa icon="align-justify"></fa>
        </span>
        <a v-for="(value, key) in template.aligns"
            :key="key"
            class="dropdown-item"
            :class="{ 'is-active': template.align === value }"
            @click="template.align = value">
            <span class="icon is-small">
                <fa :icon="icons[key]"></fa>
            </span>
        </a>
    </dropdown>

</template>

<script>

import fontawesome from '@fortawesome/fontawesome';
import { faAlignJustify, faAlignCenter, faAlignLeft, faAlignRight } from '@fortawesome/fontawesome-free-solid';
import Dropdown from './Dropdown.vue';

fontawesome.library.add(faAlignJustify, faAlignCenter, faAlignLeft, faAlignRight);

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
            icons: {
                center: faAlignCenter,
                left: faAlignLeft,
                right: faAlignRight,
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
