<template>

    <div class="vue-select">
        <multiselect :value="value"
            :class="{ 'has-error': hasError }"
            allow-empty
            searchable
            :disabled="disabled"
            :internal-search="!isServerSide"
            :multiple="multiple"
            :taggable="taggable"
            :clear-on-select="!multiple"
            :close-on-select="!multiple"
            :select-label="__(labels.select)"
            :deselect-label="__(labels.deselect)"
            :selected-label="__(labels.selected)"
            :placeholder="__(placeholder)"
            :loading="loading"
            :options-limit="optionsLimit"
            :options="optionKeys"
            :custom-label="customLabel"
            @search-change="query=$event;getOptions()"
            @tag="$emit('tag', $event)"
            @input="$emit('input', $event)">
            <span slot="noResult">
                {{ __(labels.noResult) }}
            </span>
            <template slot="option" slot-scope="{ option }">
                <span v-html="$options.filters.highlight(optionList[option], query)"></span>
            </template>
            <template slot="clear"
                v-if="!disabled">
                <div class="multiselect__clear"
                    @mousedown.prevent.stop="clear()"
                    v-if="hasSelection">
                </div>
            </template>
        </multiselect>
    </div>

</template>

<script>

import { debounce } from 'lodash';
import { mapGetters } from 'vuex';
import Multiselect from 'vue-multiselect';

export default {
    components: { Multiselect },

    filters: {
        highlight(option, query) {
            if (!option) {
                return option;
            }

            query.split(' ').filter(word => word.length).forEach((word) => {
                option = option.replace(new RegExp(`(${word})`, 'gi'), '<b>$1</b>');
            });

            return option;
        },
    },

    props: {
        value: {
            type: [Array, String, Number],
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
        optionsLimit: {
            type: Number,
            default: 100,
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
        taggable: {
            type: Boolean,
            default: false,
        },
        hasError: {
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

    data() {
        return {
            optionList: this.options,
            loading: false,
            query: '',
        };
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

    created() {
        this.getOptions = debounce(this.getOptions, 500);
    },

    mounted() {
        if (this.isServerSide) {
            this.getOptions();
        }
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
                limit: this.optionsLimit,
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
    },
};

</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style lang="scss">

    .vue-select {
        .multiselect {
            min-height: 36px;

            &.has-error .multiselect__tags {
                border: 1px solid #e50800;
            }

            .multiselect__select {
                width: 34px;
                height: 34px;

                &:before {
                    top: 70%;
                }
            }

            .multiselect__tags {
                min-height: 36px;
                padding: 4px 40px 0 4px;
                border-radius: 3px;

                &:hover {
                    border-color: #b5b5b5;
                }

                .multiselect__input {
                    box-shadow: none;
                    margin-bottom: 4px;
                    margin-top: 2px;
                    border-bottom: none;
                    font-size: 16px;
                    width: calc(100% - 10px);
                }

                .multiselect__single {
                    font-size: 16px;
                }

                .multiselect__spinner {
                    height: 33px;
                    width: 34px;
                }

                .multiselect__tag {
                    font-size: 16px;
                    border-radius: 3px;
                    margin-bottom: 4px;
                    padding: 5px 26px 5px 10px;

                    .multiselect__tag-icon {
                        border-radius: 3px;
                        line-height: 24px;
                    }
                }
            }

            .multiselect__clear {
                position: absolute;
                top: 7px;
                right: 30px;
                height: 22px;
                width: 22px;
                display: block;
                cursor: pointer;

                &:before {
                    transform: rotate(45deg);
                }

                &:after {
                    transform: rotate(-45deg);
                }

                &:after, &:before {
                    content: "";
                    display: block;
                    position: absolute;
                    width: 1px;
                    height: 16px;
                    background: #aaa;
                    top: 3px;
                    right: 10px;
                }
            }

            .multiselect__content-wrapper {
                border-bottom-left-radius: 3px;
                border-bottom-right-radius: 3px;

                .multiselect__content {
                    font-size: 16px;
                }

                .multiselect__option,
                .multiselect__option:after {
                    line-height: 16px;
                    padding: 10px;
                    min-height: 36px;
                }
            }
        }
    }

</style>
