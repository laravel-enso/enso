<template>

    <div class="vue-select">
        <multiselect :value="value"
            searchable allow-empty
            :disabled="disabled"
            :internal-search="!isServerSide"
            :multiple="multiple"
            :clear-on-select="!multiple"
            :close-on-select="!multiple"
            :select-label="i18n.select"
            :deselect-label="i18n.deselect"
            :selected-label="i18n.selected"
            :placeholder="i18n.placeholder"
            :loading="loading"
            :options-limit="100"
            :options="optionKeys"
            :custom-label="customLabel"
            @search-change="query=$event;getOptions()"
            @input="$emit('input', $event)">
            <span slot="noResult">
                {{ labels.noResult }}
            </span>
            <template slot="option" slot-scope="props">
                <span v-html="$options.filters.highlight(optionList[props.option], query)"></span>
            </template>
            <template slot="clear" slot-scope="props"
                v-if="!disabled">
                <div class="multiselect__clear"
                    v-if="hasSelection"
                    @mousedown.prevent.stop="clear()">
                </div>
            </template>
        </multiselect>
    </div>

</template>

<script>

import { mapGetters } from 'vuex';
import Multiselect from 'vue-multiselect';

export default {
    components: { Multiselect },

    props: {
        value: {
            default: null,
        },
        source: {
            type: String,
            default: null,
        },
        options: {
            type: Object,
            default() {
                return {};
            },
        },
        keyMap: {
            type: String,
            default: 'number',
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        multiple: {
            type: Boolean,
            default: false,
        },
        params: {
            type: Object,
            default: null,
        },
        pivotParams: {
            type: Object,
            default: null,
        },
        customParams: {
            type: Object,
            default: null,
        },
        placeholder: {
            type: String,
            default: 'Please choose',
        },
        labels: {
            type: Object,
            default: () => ({
                selected: 'Selected',
                select: 'Press enter to select',
                deselect: 'Press enter to deselect',
                noResult: 'No Elements Found',
            }),
        },
    },

    computed: {
        ...mapGetters('locale', ['__']),
        isServerSide() {
            return this.source !== null;
        },
        hasSelection() {
            return (this.multiple && this.value.length) || (!this.multiple && this.value !== null);
        },
        optionKeys() {
            return this.keyMap === 'number'
                ? Object.keys(this.optionList).map(Number)
                : Object.keys(this.optionList);
        },
    },

    filters: {
        highlight(option, query) {
            query.split(' ').filter(word => word.length).forEach((word) => {
                option = option.replace(new RegExp(`(${word})`, 'gi'), '<b>$1</b>');
            });

            return option;
        },
    },

    watch: {
        options: {
            handler() {
                this.optionList = this.options;
            },
            deep: true,
        },
        params: {
            handler() {
                this.getOptions();
            },
            deep: true,
        },
        pivotParams: {
            handler() {
                this.getOptions();
            },
            deep: true,
        },
        customParams: {
            handler() {
                this.getOptions();
            },
            deep: true,
        },
    },

    data() {
        return {
            optionList: this.options,
            loading: false,
            query: '',
            i18n: {
                placeholder: '',
                selected: '',
                select: '',
                deselect: '',
                noResult: '',
            },
        };
    },

    methods: {
        getOptions() {
            if (!this.isServerSide) {
                return;
            }

            this.loading = true;

            axios.get(route(this.source, [], null), {
                params: this.getParams(),
            }).then((response) => {
                this.processOptions(response);
                this.loading = false;
            }).catch((error) => {
                this.loading = true;
                this.handleError(error);
            });
        },
        getParams() {
            return {
                params: this.params,
                pivotParams: this.pivotParams,
                customParams: this.customParams,
                query: this.query,
                value: this.value,
            };
        },
        processOptions(response) {
            this.optionList = response.data;

            if (!this.query && !this.valueIsMatched()) {
                this.clear();
            }
        },
        valueIsMatched() {
            const self = this;

            if (!this.multiple) {
                return this.optionKeys.filter(option => option === self.value).length > 0;
            }

            return this.optionKeys.filter(option =>
                self.value.filter(val => val === option).length > 0).length > 0;
        },
        customLabel(option) {
            return this.optionList[option];
        },
        update() {
            this.$nextTick(() => {
                this.$emit('input', this.value);
            });
        },
        clear() {
            this.$emit('input', this.multiple ? [] : null);
        },
        translateLabels() {
            Object.entries(this.labels).forEach(([key, value]) => {
                this.i18n[key] = this.__(value);
            });

            this.i18n.placeholder = this.__(this.placeholder);
        },
    },

    mounted() {
        if (this.isServerSide) {
            this.getOptions();
        }
        this.translateLabels();
    },
};

</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style>

    div.vue-select .multiselect {
        min-height: 36px;
    }

    div.vue-select .multiselect__select {
        height: 34px;
    }

    div.vue-select .multiselect__tags {
        border: 1px solid #dbdbdb;
        border-top-color: rgb(219, 219, 219);
        border-top-style: solid;
        border-top-width: 1px;
        border-right-color: rgb(219, 219, 219);
        border-right-style: solid;
        border-right-width: 1px;
        border-bottom-color: rgb(219, 219, 219);
        border-bottom-style: solid;
        border-bottom-width: 1px;
        border-left-color: rgb(219, 219, 219);
        border-left-style: solid;
        border-left-width: 1px;
        border-image-source: initial;
        border-image-slice: initial;
        border-image-width: initial;
        border-image-outset: initial;
        border-image-repeat: initial;
    }

    div.vue-select .multiselect__tags {
        min-height: 36px;
        padding: 4px 40px 0 4px;
        border-radius: 3px;
    }

    div.vue-select .multiselect__tag {
        border-radius: 3px;
        margin-bottom: 4px;
    }

    div.vue-select .multiselect__tag-icon {
        border-radius: 3px;
        line-height: 24px;
    }

    div.vue-select input[type=text].multiselect__input {
        box-shadow: none;
        margin-bottom: 4px;
        border-bottom: none;
    }

    div.vue-select .multiselect__content-wrapper {
        border-bottom-left-radius: 3px;
        border-bottom-right-radius: 3px;
    }

    div.vue-select .multiselect__option,
    div.vue-select .multiselect__option:after {
        line-height: 16px;
        padding: 10px;
        min-height: 36px;
    }

    div.vue-select .multiselect__spinner {
        height: 33px
    }

    span.multiselect__tag {
        padding: 5px 26px 5px 10px;
    }

    .multiselect, .multiselect__input, .multiselect__single {
        font-size: 16px;
    }

    .multiselect__clear {
        position: absolute;
        top: 4px;
        right: 35px;
        height: 22px;
        width: 22px;
        display: block;
        cursor: pointer;
        z-index: 2;
    }

    .multiselect__clear:before {
        transform: rotate(45deg);
    }

    .multiselect__clear:after {
        transform: rotate(-45deg);
    }

    .multiselect__clear:after, .multiselect__clear:before {
        content: "";
        display: block;
        position: absolute;
        width: 2px;
        height: 16px;
        background: #aaa;
        top: 3px;
        right: 10px;
    }

</style>
