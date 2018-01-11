<template>

    <div>
        <div class="columns is-multiline">
            <div class="column has-padding-small is-half is-hidden-mobile">
                <h5 class="title is-5">
                    <span class="icon">
                        <i :class="template.icon"></i>
                    </span>
                    {{ i18n(template.name) }}
                </h5>
            </div>
            <div class="column has-padding-small is-half has-text-right-tablet has-text-centered-mobile">
                <button class="button has-margin-left-small"
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
            </div>
            <div class="column has-padding-small is-two-thirds-desktop has-text-centered-mobile">
                <length-menu :template="template"
                    :length="length"
                    v-on="$listeners">
                </length-menu>
                <column-visibility :template="template"
                    v-on="$listeners">
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
                <button class="button"
                    @click="$emit('reset')">
                    <span class="icon is-small">
                        <i class="fa fa-undo"></i>
                    </span>
                </button>
            </div>
            <div class="column has-padding-small is-one-third-desktop has-text-right">
                <p class="control has-icons-left">
                    <input class="input table-search-input has-text-centered"
                        type="search"
                        :value="value"
                        @input="$emit('input', $event.target.value)"
                        :placeholder="i18n('Search')">
                    <span class="icon is-small is-left">
                        <i class="fa fa-search"></i>
                    </span>
                </p>
            </div>
        </div>
    </div>

</template>

<script>

import LengthMenu from './topControls/LengthMenu.vue';
import ColumnVisibility from './topControls/ColumnVisibility.vue';
import Alignment from './topControls/Alignment.vue';
import StyleSelector from './topControls/StyleSelector.vue';

export default {
    name: 'TopControls',

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
        value: {
            type: String,
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

