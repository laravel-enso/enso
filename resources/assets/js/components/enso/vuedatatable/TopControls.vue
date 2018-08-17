<template>

    <div class="top-controls has-background-light">
        <div class="columns is-multiline">
            <div class="
                    column has-padding-small is-one-third-desktop
                    is-half-tablet has-text-centered-mobile table-controls
                ">
                <length-menu :template="template"
                    :length="length"
                    v-on="$listeners"/>
                <column-visibility :template="template"
                    v-on="$listeners"/>
                <style-selector :template="template"
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
            <div class="
                    column is-one-third-desktop is-half-tablet has-text-right-tablet
                    has-text-centered-mobile has-padding-small table-buttons
                ">
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
            <div class="column has-padding-small is-one-third-desktop search-input"
                v-if="template.searchable">
                <p class="control has-icons-left has-icons-right">
                    <input class="input has-text-centered is-rounded"
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

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSync, faUndo, faSearch, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import LengthMenu from './topControls/LengthMenu.vue';
import ColumnVisibility from './topControls/ColumnVisibility.vue';
import StyleSelector from './topControls/StyleSelector.vue';
import Modal from './Modal.vue';

library.add(faSync, faUndo, faSearch, faInfoCircle);

export default {
    name: 'TopControls',

    components: {
        LengthMenu, ColumnVisibility, StyleSelector, Modal,
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

    .top-controls {
        padding: 1em;
        padding-bottom: 1.5em;

        .control.has-icons-right .icon.clear-button {
            pointer-events: all;
        }

        @media screen and (min-width: 1024px) {
            .table-controls {
                order: 1;
            }

            .search-input {
                order: 2;
            }

            .table-buttons {
                order: 3;
            }
        }
    }

</style>
