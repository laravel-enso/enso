<template>

    <div>
        <div class="control has-icons-left"
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
        </div>
        <div class="dropdown typeahead"
            :class="{ 'is-active': showDropdown }">
            <div class="dropdown-menu" id="dropdown-menu" role="menu">
                <div class="dropdown-content">
                    <a href="#" class="dropdown-item"
                        v-for="(item, index) in items"
                        :key="index"
                        :class="{ 'is-active': position === index }"
                        @mousedown.prevent="hit"
                        @mousemove="position = index"
                        v-html="$options.filters.highlight(item[label], value)">
                    </a>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

import { debounce } from 'lodash';
import fontawesome from '@fortawesome/fontawesome';
import { faSearch } from '@fortawesome/fontawesome-free-solid';

fontawesome.library.add(faSearch);

export default {
    name: 'Typeahead',

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
        validator: {
            type: Boolean,
            default: false,
        },
        regExp: {
            type: RegExp,
            default() {
                return /^[A-Za-z0-9 _-]*[A-Za-z0-9 _-]*$/;
            },
        },
        value: {
            type: String,
            default: '',
        },
    },

    computed: {
        hasError() {
            return this.validator && this.value && !this.regExp.test(this.value);
        },
        showDropdown() {
            return !this.hideDropdown && this.value && !this.hasError && this.items.length > 0;
        },
    },

    watch: {
        value() {
            if (!this.value) {
                this.items = [];
            }
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

    filters: {
        highlight(item, value) {
            value.split(' ').filter(word => word.length).forEach((word) => {
                item = item.replace(new RegExp(`(${word})`, 'gi'), '<b>$1</b>');
            });

            return item;
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

            axios.get(this.source, { params: this.getParams() }).then((response) => {
                this.hideDropdown = false;
                this.items = response.data;
                this.loading = false;
            }).catch((error) => {
                this.loading = false;
                this.handleError(error);
            });
        },
        getParams() {
            return {
                query: this.value,
                length: this.length,
                params: this.params,
            };
        },
        update(value) {
            this.$emit('selected', this.items[this.position]);
            this.$emit('input', value);
        },
        hit() {
            if (this.showDropdown) {
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

</style>
