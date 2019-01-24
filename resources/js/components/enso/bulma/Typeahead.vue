<template>
    <div class="wrapper">
        <div class="control has-icons-left has-icons-right"
            :class="{ 'is-loading': loading }">
            <input :class="[
                    'input is-fullwidth',
                    { 'is-rounded': isRounded },
                    { 'is-danger': hasError }
                ]"
                type="text"
                :disabled="disabled"
                :placeholder="placeholder"
                :value="value"
                @input="update($event.target.value); fetch()"
                @keydown.up="keyUp"
                @keydown.down="keyDown"
                @keydown.enter="hit"
                @keydown.esc="update('')">
            <span class="icon is-small is-left">
                <fa icon="search"/>
            </span>
            <span class="icon is-small is-right clear-button"
                v-if="value && !loading"
                @click="update('')">
                <a class="delete is-small"/>
            </span>
        </div>
        <slot name="controls"
            :items="items"/>
        <div :class="['dropdown typeahead', { 'is-active': visibleDropdown }]">
            <div class="dropdown-menu" id="dropdown-menu" role="menu">
                <div class="dropdown-content">
                    <a href="#" class="dropdown-item"
                        v-for="(item, index) in filter(items)"
                        :key="index"
                        :class="{ 'is-active': position === index }"
                        @mousedown.prevent="hit"
                        @mousemove="position = index">
                        <slot name="option"
                            :highlight="highlight"
                            :item="item"
                            :label="label">
                            <span v-html="highlight(item[label])"/>
                        </slot>
                    </a>
                    <a href="#" class="dropdown-item"
                        v-if="!items.length">
                        <span v-if="loading">
                            {{ searching }}
                        </span>
                        <span v-else>
                            {{ noResults }}
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import debounce from 'lodash/debounce';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

library.add(faSearch);

export default {
    name: 'Typeahead',

    props: {
        disabled: {
            type: Boolean,
            default: false,
        },
        length: {
            type: Number,
            default: 100,
        },
        source: {
            type: String,
            required: true,
        },
        params: {
            type: Object,
            default: null,
        },
        label: {
            type: String,
            default: 'label',
        },
        placeholder: {
            type: String,
            default: 'What are you searching for today?',
        },
        noResults: {
            type: String,
            default: 'Nothing found...',
        },
        searching: {
            type: String,
            default: 'Searching...',
        },
        validator: {
            type: Boolean,
            default: false,
        },
        regExp: {
            type: RegExp,
            default() {
                return /^.*$/;
            },
        },
        value: {
            type: String,
            default: '',
        },
        isRounded: {
            type: Boolean,
            default: false,
        },
        filter: {
            type: Function,
            default: items => (items),
        },
        debounce: {
            type: Number,
            default: 250,
        },
    },

    data: () => ({
        position: 0,
        items: [],
        hiddenDropdown: false,
        loading: false,
    }),

    computed: {
        hasError() {
            return this.validator && this.value && !this.regExp.test(this.value);
        },
        route() {
            return typeof route === 'function'
                ? route(this.source)
                : this.source;
        },
        visibleDropdown() {
            return !this.hiddenDropdown && !!this.value && !this.hasError;
        },
    },

    created() {
        this.fetch = debounce(this.fetch, this.debounce);
    },

    methods: {
        fetch() {
            if (!this.value || this.hasError) {
                return;
            }

            this.loading = true;

            axios.get(this.route, {
                params: {
                    query: this.value,
                    length: this.length,
                    params: this.params,
                },
            }).then((response) => {
                this.hiddenDropdown = false;
                this.items = response.data;
                this.loading = false;
            }).catch(error => this.handleError(error));
        },
        update(value) {
            if (!value) {
                this.items = [];
            }
            this.$emit('input', value);
        },
        hit() {
            if (this.visibleDropdown && this.items.length) {
                this.update(this.items[this.position][this.label]);
                this.$emit('update', this.items[this.position]);
                this.$emit('selected', this.items[this.position]);
                this.hiddenDropdown = true;
            }
        },
        keyUp() {
            if (this.position > 0) {
                this.position--;
            }
        },
        keyDown() {
            if (this.position < this.items.length - 1) {
                this.position++;
            }
        },
        highlight(item) {
            this.value.split(' ').filter(word => word.length).forEach((word) => {
                item = item.replace(new RegExp(`(${word})`, 'gi'), '<b>$1</b>');
            });

            return item;
        },
    },
};

</script>

<style lang="scss" scoped>

    .wrapper {
        width: 100%;

        .dropdown.typeahead {
            width: calc(100% - 1.4em);
            position:absolute;

            .dropdown-menu {
                width: 100%;

                .dropdown-content {
                    max-height: 20em;
                    overflow-y: scroll;

                    a.dropdown-item {
                        text-overflow: ellipsis;
                        overflow-x: hidden;
                        padding-right: 1em;
                    }
                }
            }
        }

        .control.has-icons-right .icon.clear-button {
            pointer-events: all;
        }
    }

</style>
