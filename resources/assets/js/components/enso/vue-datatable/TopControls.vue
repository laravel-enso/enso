<template>

    <div>
        <button class="button has-margin-right-small"
            v-for="button in template.buttons.global"
            :class="button.class"
            :key="button.label"
            :href="button.action === 'href' ? button.path : null"
            @click="doAction(button)">
            <span>{{ i18n(button.label) }}</span>
            <span class="icon is-small">
                <i :class="button.icon"></i>
            </span>
        </button>
        <length-menu :template="template"
            :length="length"
            v-on="$listeners">
        </length-menu>
        <column-visibility :template="template">
        </column-visibility>
        <style-selector :template="template">
        </style-selector>
        <alignment :template="template">
        </alignment>
        <button class="button"
            @click="$emit('reload')">
            <span class="icon is-small">
                <i class="fa fa-refresh"></i>
            </span>
        </button>

    </div>

</template>

<script>

import vClickOutside from 'v-click-outside';
import LengthMenu from './topControls/LengthMenu.vue';
import ColumnVisibility from './topControls/ColumnVisibility.vue';
import Alignment from './topControls/Alignment.vue';
import StyleSelector from './topControls/StyleSelector.vue';

export default {
    name: 'TopControls',

    directives: {
        clickOutside: vClickOutside.directive,
    },

    components: {
        LengthMenu, ColumnVisibility, Alignment, StyleSelector,
    },

    props: {
        template: {
            type: Object,
            required: true,
        },
        length: {
            type: Number,
            required: true,
        },
        i18n: {
            type: Function,
            required: true,
        },
    },

    data() {
        return {
            lengthMenu: false,
            columnVisibility: false,
        };
    },

    methods: {
        doAction(button) {
            this.$emit(button.event);

            if (button.action === 'export') {
                this.$emit('export-data', button.path);
                return;
            }

            if (button.action === 'router') {
                this.$router.push({ name: button.route });
            }
        },
    },
};

</script>
