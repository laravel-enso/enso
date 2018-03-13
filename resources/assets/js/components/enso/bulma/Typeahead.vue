<template>

    <div>
        <div class="control has-icons-left has-icons-right"
            :class="{ 'is-loading': loading }">
            <input class="input" type="text"
                :class="{ 'is-danger': hasError }"
                :disabled="disabled"
                :placeholder="placeholder"
                :value="value"
                @input="update($event.target.value);getData();"
                @keydown.up="keyUp"
                @keydown.down="keyDown"
                @keydown.enter="hit"
                @keydown.esc="update('')"
                @blur="dropdown=false">
            <span class="icon is-small is-left">
                <fa icon="search"></fa>
            </span>
            <span class="icon is-small is-right clear-button"
                v-if="value && !loading"
                @click="$emit('input', null)">
                <a class="delete is-small"></a>
            </span>
        </div>
        <div :class="['dropdown typeahead', { 'is-active': showDropdown }]">
            <div class="dropdown-menu" id="dropdown-menu" role="menu">
                <div class="dropdown-content">
                    <a href="#" class="dropdown-item"
                        v-for="(item, index) in items"
                        :key="index"
                        :class="{ 'is-active': position === index }"
                        @mousedown.prevent="hit"
                        @mousemove="position = index">
                        <slot name="option"
                            :highlight="highlight"
                            :item="item">
                            <span v-html="highlight(item[label])"></span>
                        </slot>
                    </a>
                    <a href="#" class="dropdown-item"
                        v-if="!items.length">
                        <span v-if="loading">
                            {{ searching }}
                        </span>
                        <span v-else>
                            {{ notResults }}
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

import debounce from 'lodash/debounce';
import fontawesome from '@fortawesome/fontawesome';
import { faSearch } from '@fortawesome/fontawesome-free-solid/shakable.es';

fontawesome.library.add(faSearch);

export default {
    name: 'Typeahead',

    filters: {

    },

    props: {
        disabled: {
            type: Boolean,
            default: false,
        },
        length: {
            type: Number,
            default: 10,
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
            required: true,
        },
        placeholder: {
            type: String,
            default: 'What are you searching for today?',
        },
        notResults: {
            type: String,
            default: 'No results found matching the criteria...',
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
    },

    data() {
        return {
            position: 0,
            items: [],
            hideDropdown: false,
            loading: false,
        };
    },

    computed: {
        hasError() {
            return this.validator && this.value && !this.regExp.test(this.value);
        },
        showDropdown() {
            return !this.hideDropdown && this.value && !this.hasError;
        },
    },

    watch: {
        value() {
            if (!this.value) {
                this.items = [];
            }
        },
    },

    created() {
        this.getData = debounce(this.getData, 200);
    },

    methods: {
        getData() {
            if (!this.value || this.hasError) {
                return;
            }

            this.loading = true;

            axios.get(this.source, {
                params: { query: this.value, length: this.length, params: this.params },
            }).then((response) => {
                this.hideDropdown = false;
                this.items = response.data;
                this.loading = false;
            }).catch((error) => {
                this.loading = false;
                this.handleError(error);
            });
        },
        update(value) {
            this.$emit('selected', this.items[this.position]);
            this.$emit('input', value);
        },
        hit() {
            if (this.showDropdown && this.items.length) {
                this.update(this.items[this.position][this.label]);
                this.$emit('update', this.items[this.position]);
                this.hideDropdown = true;
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

<style lang="scss">

    .dropdown.typeahead {
        width: 100%;
        position:absolute;

        .dropdown-menu {
            width: 100%;

            .dropdown-content a.dropdown-item {
                text-overflow: ellipsis;
                overflow-x: hidden;
            }
        }
    }

    .control.has-icons-right .icon.clear-button {
        pointer-events: all;
    }

</style>
