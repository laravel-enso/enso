<template>

    <div>
        <div class="columns is-multiline">
            <div class="column has-padding-small is-half is-hidden-mobile">
                <h5 class="title is-5">
                    <span class="icon">
                        <fa :icon="template.icon"/>
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
                    @click="button.confirmation ? showModal(button) : doAction(button)">
                    <span class="is-hidden-mobile">
                        {{ i18n(button.label) }}
                    </span>
                    <span class="icon is-small">
                        <fa :icon="button.icon"/>
                    </span>
                    <span class="is-hidden-mobile"/>
                </button>
            </div>
            <div class="column has-padding-small is-two-thirds-desktop has-text-centered-mobile">
                <length-menu :template="template"
                    :length="length"
                    v-on="$listeners"/>
                <column-visibility :template="template"
                    v-on="$listeners"/>
                <style-selector :template="template"
                    class="is-hidden-mobile"/>
                <alignment :template="template"
                    class="is-hidden-mobile"/>
                <button class="button"
                    @click="$emit('reload')">
                    <span class="icon is-small">
                        <fa icon="sync"/>
                    </span>
                </button>
                <button class="button"
                    @click="$emit('reset')">
                    <span class="icon is-small">
                        <fa icon="undo"/>
                    </span>
                </button>
                <button class="button"
                    @click="$emit('request-full-info')"
                    v-if="info">
                    <span class="icon is-small has-text-info">
                        <fa icon="info-circle"/>
                    </span>
                </button>
            </div>
            <div class="column has-padding-small is-one-third-desktop has-text-right">
                <p class="control has-icons-left has-icons-right">
                    <input class="input has-text-centered"
                        type="text"
                        :value="value"
                        @input="$emit('input', $event.target.value)"
                        :placeholder="i18n('Search')">
                    <span class="icon is-small is-left">
                        <fa icon="search"/>
                    </span>
                    <span class="icon is-small is-right clear-button"
                        v-if="value && !loading"
                        @click="$emit('input', '')">
                        <a class="delete is-small"/>
                    </span>
                </p>
            </div>
        </div>
        <modal v-if="modal"
            :show="modal"
            :i18n="i18n"
            :message="button.message"
            @close="closeModal()"
            @commit="doAction(button)"/>
    </div>

</template>

<script>

import fontawesome from '@fortawesome/fontawesome';
import { faSync, faUndo, faSearch, faInfoCircle } from '@fortawesome/fontawesome-free-solid/shakable.es';
import LengthMenu from './topControls/LengthMenu.vue';
import ColumnVisibility from './topControls/ColumnVisibility.vue';
import Alignment from './topControls/Alignment.vue';
import StyleSelector from './topControls/StyleSelector.vue';
import Modal from './Modal.vue';

fontawesome.library.add(faSync, faUndo, faSearch, faInfoCircle);

export default {
    name: 'TopControls',

    components: {
        LengthMenu, ColumnVisibility, Alignment, StyleSelector, Modal,
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
        info: {
            type: Boolean,
            required: true,
        },
        loading: {
            type: Boolean,
            required: true,
        },
    },

    data() {
        return {
            lengthMenu: false,
            columnVisibility: false,
            modal: false,
            button: null,
        };
    },

    methods: {
        showModal(button) {
            this.button = button;
            this.modal = true;
        },
        closeModal() {
            this.modal = false;
            this.button = null;
        },
        doAction(button) {
            if (this.modal) {
                this.closeModal();
            }

            if (button.event) {
                this.$emit(button.event);
            }

            if (button.action === 'export') {
                this.$emit('export-data', button.path);
                return;
            }

            if (button.action === 'router') {
                this.$router.push({ name: button.route });
                return;
            }

            if (button.action === 'ajax') {
                this.$emit('action', button.method, button.path, button.postEvent);
            }
        },
    },
};

</script>

<style lang="scss" scoped>

    .title {
        .icon {
            vertical-align: text-bottom;
        }
    }

    .control.has-icons-right .icon.clear-button {
        pointer-events: all;
    }

</style>
