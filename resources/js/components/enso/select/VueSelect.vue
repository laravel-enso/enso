<template>
    <div :class="['dropdown', { 'is-active': dropdown }]"
        v-click-outside="hideDropdown">
        <div class="dropdown-trigger">
            <fieldset :class="['control-input input', { 'is-danger': hasError }]"
                tabindex="0"
                :disabled="disabled"
                :readonly="readonly"
                @click="showDropdown"
                @keypress.enter="showDropdown"
                @focus="showDropdown">
                <div class="select-value">
                    <div class="field is-grouped is-grouped-multiline">
                        <div class="control"
                            v-if="multiple">
                            <tag v-for="option in selection"
                                :disabled="readonly || disabled"
                                :label="optionLabel(option)"
                                :key="option[trackBy]"
                                @remove="remove(option)"/>
                        </div>
                        <input class="input select-input" type="text"
                            :placeholder="i18n(placeholder)"
                            v-model="query"
                            @keydown.esc="hideDropdown"
                            @keydown.down="keyDown"
                            @keydown.up="keyUp"
                            @keydown.tab="hideDropdown"
                            @keydown.enter.prevent="hit()"
                            v-if="dropdown">
                    </div>
                    <div v-if="!dropdown">
                        <span v-if="!multiple && hasSelection">
                            {{ selection }}
                        </span>
                        <span v-if="!hasSelection && hasOptions">
                            {{ i18n(placeholder) }}
                        </span>
                        <span v-else-if="!hasOptions">
                            {{ i18n(labels.noOptions) }}
                        </span>
                    </div>
                    <span class="is-loading"
                        v-if="loading"/>
                    <a class="delete is-small"
                        v-if="!disableClear && !loading && hasSelection && !readonly && !disabled"
                        @mousedown.prevent.self="clear"/>
                    <span class="icon is-small angle"
                        :aria-hidden="dropdown">
                        <fa icon="angle-up"/>
                    </span>
                </div>
            </fieldset>
        </div>
        <div class="dropdown-menu">
            <div class="dropdown-content">
                <a class="dropdown-item"
                    v-for="(option, index) in filteredOptions"
                    :key="option[trackBy]"
                    :class="{ 'is-active': position === index }"
                    @mousemove="position = index"
                    @click="hit()">
                    <span v-html="highlight(optionLabel(option))"/>
                    <span :class="['label tag', isSelected(option) ? 'is-warning' : 'is-success']"
                        v-if="index === position && !disableClear">
                        <span v-if="isSelected(option)">
                            {{ i18n(labels.deselect) }}
                        </span>
                        <span v-else>
                            {{ i18n(labels.select) }}
                        </span>
                    </span>
                    <span class="icon is-small selected has-text-success"
                        v-else-if="isSelected(option)">
                        <fa icon="check"/>
                    </span>
                </a>
                <a class="dropdown-item"
                    v-if="!hasFilteredOptions"
                    @click="taggable ? $emit('add-tag', query) : null">
                    {{ i18n(labels.noResults) }}
                    <span class="label tag is-info"
                        v-if="taggable">
                        {{ i18n(labels.addTag) }}
                    </span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>

import debounce from 'lodash/debounce';
import vClickOutside from 'v-click-outside';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck, faAngleUp }
    from '@fortawesome/free-solid-svg-icons';
import Tag from './Tag.vue';

library.add([faCheck, faAngleUp]);

export default {
    name: 'VueSelect',

    directives: {
        clickOutside: vClickOutside.directive,
    },

    components: { Tag },

    props: {
        customParams: {
            type: Object,
            default: null,
        },
        debounce: {
            type: Number,
            default: 300,
        },
        disableClear: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        errorHandler: {
            type: Function,
            default(error) {
                if (Object.keys(this.$options.methods).includes('handleError')) {
                    this.handleError(error);
                    return;
                }

                throw error;
            },
        },
        hasError: {
            type: Boolean,
            default: false,
        },
        i18n: {
            type: Function,
            default(key) {
                return Object.keys(this.$options.methods).includes('__')
                    ? this.__(key)
                    : key;
            },
        },
        label: {
            type: String,
            default: 'name',
        },
        labels: {
            type: Object,
            default: () => ({
                select: 'select',
                deselect: 'deselect',
                noOptions: 'No options available',
                noResults: 'No search results found',
                addTag: 'Add option',
            }),
        },
        limit: {
            type: Number,
            default: 100,
        },
        multiple: {
            type: Boolean,
            default: false,
        },
        options: {
            type: Array,
            default: () => ([]),
        },
        params: {
            type: Object,
            default: null,
        },
        pivotParams: {
            type: Object,
            default: null,
        },
        placeholder: {
            type: String,
            default: 'Choose',
        },
        readonly: {
            type: Boolean,
            default: false,
        },
        source: {
            type: String,
            default: null,
        },
        taggable: {
            type: Boolean,
            default: false,
        },
        trackBy: {
            type: String,
            default: 'id',
        },
        translated: {
            type: Boolean,
            default: false,
        },
        value: {
            type: null,
            default: this.multiple ? [] : null,
        },
    },

    data: v => ({
        optionList: v.options,
        loading: false,
        query: '',
        dropdown: false,
        position: null,
        path: null,
    }),

    computed: {
        isServerSide() {
            return this.source !== null;
        },
        filteredOptions() {
            return this.query
                ? this.optionList.filter(option => this.matchesQuery(option))
                : this.optionList;
        },
        hasSelection() {
            return Array.isArray(this.value)
                ? this.value.length > 0
                : !!this.value;
        },
        hasOptions() {
            return this.optionList.length > 0;
        },
        hasFilteredOptions() {
            return this.filteredOptions.length > 0;
        },
        selection() {
            if (!this.hasOptions) {
                return null;
            }

            if (this.multiple) {
                return this.optionList
                    .filter(option => this.value
                        .includes(option[this.trackBy]));
            }

            const option = this.optionList
                .find(option => option[this.trackBy] === this.value);

            return this.optionLabel(option);
        },
    },

    watch: {
        options: {
            handler() {
                this.optionList = this.options;
            },
            deep: true,
        },
        query: 'fetch',
        params: {
            handler() {
                this.fetch();
            },
            deep: true,
        },
        pivotParams: {
            handler() {
                this.fetch();
            },
            deep: true,
        },
        customParams: {
            handler() {
                this.fetch();
            },
            deep: true,
        },
    },

    created() {
        this.setPath();
        this.fetch = debounce(this.fetch, this.debounce);
        this.fetch();
    },

    methods: {
        setPath() {
            if (!this.isServerSide) {
                return;
            }

            this.path = typeof route === 'function'
                ? route(this.source)
                : this.source;
        },
        fetch() {
            if (!this.isServerSide) {
                return;
            }

            this.loading = true;

            axios.get(this.path, { params: this.requestParams() })
                .then(({ data }) => {
                    this.processOptions(data);
                    this.$emit('fetch', this.optionList);
                    this.loading = false;
                }).catch(error => this.errorHandler(error));
        },
        requestParams() {
            return {
                params: this.params,
                pivotParams: this.pivotParams,
                customParams: this.customParams,
                query: this.query,
                value: this.value,
                limit: this.limit,
            };
        },
        processOptions(options) {
            this.optionList = options;

            if (!this.query && !this.optionsMatchValue() && this.hasSelection) {
                this.clear();
            }
        },
        matchesQuery(option) {
            return this.optionLabel(option).toLowerCase()
                .indexOf(this.query.toLowerCase()) >= 0;
        },
        optionsMatchValue() {
            if (this.multiple) {
                return this.optionList
                    .findIndex(option => this.value
                        .findIndex(val => val === option[this.trackBy]) >= 0) >= 0;
            }

            return this.optionList
                .findIndex(option => option[this.trackBy] === this.value) >= 0;
        },
        showDropdown() {
            if (this.readonly || this.disabled) {
                return;
            }

            if (!this.hasOptions) {
                this.fetch();
                return;
            }

            this.dropdown = true;
            this.$nextTick(() => this.$el.querySelector('input').focus());
            this.position = 0;
        },
        hideDropdown() {
            this.query = '';
            this.dropdown = false;
            this.position = null;
        },
        hit() {
            if (!this.hasFilteredOptions) {
                return;
            }

            const value = this.filteredOptions[this.position][this.trackBy];

            if (this.multiple) {
                this.handleMultipleSelection(value);
                return;
            }

            this.handleSelection(value);
        },
        handleSelection(value) {
            this.hideDropdown();
            if (this.value === value && !this.disableClear) {
                this.$emit('input', null);
                return;
            }

            this.$emit('input', value);
        },
        handleMultipleSelection(value) {
            const index = this.value.findIndex(option => option === value);

            if (index >= 0) {
                this.value.splice(index, 1);
            } else {
                this.value.push(value);
            }

            this.query = '';
            this.$el.querySelector('input').focus();
            this.$emit('input', this.value);
        },
        clear() {
            this.$emit('input', this.multiple ? [] : null);
        },
        highlight(label) {
            return label.replace(new RegExp(`(${this.query})`, 'gi'), '<b>$1</b>');
        },
        remove(option) {
            const index = this.value
                .findIndex(val => val === option[this.trackBy]);

            this.value.splice(index, 1);
            this.$emit('remove', option);
            this.$emit('input', this.value);
        },
        isSelected(option) {
            return this.multiple
                ? this.value.findIndex(item => item === option[this.trackBy]) >= 0
                : this.value !== null
                    && this.value === option[this.trackBy];
        },
        keyDown() {
            if (!this.hasFilteredOptions || this.loading
                || this.position === this.filteredOptions.length - 1) {
                return;
            }

            this.position = this.position !== null
                ? ++this.position
                : 0;

            this.scroll();
        },
        keyUp() {
            if (this.loading || !this.position) {
                return;
            }

            this.position--;
            this.scroll();
        },
        scroll() {
            const dropdown = this.$el.querySelector('.dropdown-content');
            const option = this.$el.querySelectorAll('.dropdown-item')[this.position];

            if (option.offsetTop < dropdown.scrollTop) {
                dropdown.scrollTop -= (dropdown.scrollTop - option.offsetTop);
                return;
            }

            const dropdownBottom = dropdown.scrollTop + dropdown.clientHeight;
            const optionBottom = option.offsetTop + option.clientHeight;

            if (optionBottom > dropdownBottom) {
                dropdown.scrollTop += (optionBottom - dropdownBottom);
            }
        },
        optionLabel(option) {
            const optionLabel = this.label.split('.')
                .reduce((result, property) => result[property], option);

            return this.translated
                ? this.i18n(optionLabel)
                : optionLabel;
        },
    },
};

</script>

<style lang="scss" scoped>

    .icon.angle {
        transition: transform .300s ease;

        &[aria-hidden="true"] {
            transform: rotate(180deg);
        }
    }

    .dropdown {
        width: 100%;

        .dropdown-trigger {
            width: 100%;

            fieldset {
                min-width: 1em;
            }

            .control-input {
                justify-content: flex-start;
                width: 100%;
                min-height: 2.25em;
                height: auto;
                align-items: baseline;
                padding: calc(.375em - 1px) calc(.625em - 1px);
                padding-top: calc(0.375em - 1px);
                padding-right: calc(0.625em - 1px);
                padding-bottom: calc(0.375em - 1px);
                padding-left: calc(0.625em - 1px);

                &[disabled] {
                    border-color: inherit;

                    .select-value {
                        cursor: unset;
                    }
                }

                .select-value {
                    max-width: calc(100% - 2.5em);
                    overflow-x: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    text-align: left;
                    cursor: pointer;

                    .field.is-grouped.is-grouped-multiline {
                        .select-input {
                            border: 0;
                            height: 1.4em;
                            margin-top: 0.05em;
                            box-shadow: unset;
                            padding: 0;
                            -webkit-box-shadow: unset;
                            width: fit-content;
                            background-color: inherit;
                        }

                        .control:last-child,
                        .control:not(:last-child) {
                            margin-bottom: 0;
                            display: contents;

                            .tags:not(:last-child) {
                                margin-bottom: 0;
                            }
                        }
                    }

                    .angle {
                        position: absolute;
                        top: 0.55rem;
                        right: 0.6rem;
                    }

                    .delete {
                        position: absolute;
                        right: 1.7rem;
                        top: 0.55rem;
                    }

                    .is-loading {
                        -webkit-animation: spinAround .5s infinite linear;
                        animation: spinAround .5s infinite linear;
                        border: 2px solid #dbdbdb;
                        border-radius: 290486px;
                        border-right-color: transparent;
                        border-top-color: transparent;
                        content: "";
                        display: block;
                        height: 1em;
                        position: relative;
                        width: 1em;
                        position: absolute!important;
                        right: 1.7rem;
                        top: .55em;
                        z-index: 4;
                    }
                }
            }
        }

        .control {
            width: 100%;
        }

        .dropdown-menu {
            width: 100%;
            min-width: 1em;

            .dropdown-content::-webkit-scrollbar {
                display: none;
            }

            .dropdown-content {
                max-height: 13rem;
                overflow-y: auto;

                a.dropdown-item {
                    text-overflow: ellipsis;
                    overflow-x: hidden;
                    padding-right: 2rem;

                    .label.tag {
                        position: absolute;
                        padding: 0.3rem;
                        height: 1.3rem;
                        z-index: 1;
                        right: 1rem;
                    }

                    .icon.selected {
                        position: absolute;
                        z-index: 1;
                        right: 1rem;
                    }
                }
            }
        }
    }

</style>
