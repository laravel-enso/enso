<template>

    <div :id="'vue-select-' + _uid"
        class="vue-select">
        <multiselect :value="value"
            searchable allow-empty
            :disabled="disabled"
            :multiple="multiple"
            :clear-on-select="!multiple"
            :close-on-select="!multiple"
            :select-label="labels.select"
            :deselect-label="labels.deselect"
            :selected-label="labels.selected"
            :placeholder="labels.placeholder"
            :loading="loading"
            :options-limit="100"
            :options="optionKeys"
            :custom-label="customLabel"
            @search-change="query=$event;getOptions()"
            @input="$emit('input', $event)">
            <span slot="noResult">
                {{ labels.noResult }}
            </span>
            <template slot="option" scope="props">
                <span v-html="$options.filters.highlight(optionList[props.option], query)"></span>
            </template>
        </multiselect>
    </div>

</template>

<script>

    import Multiselect from 'vue-multiselect';

    export default {
        components: { Multiselect },

        props: {
            value: {
                default: null
            },
            source: {
                type: String,
                default: null
            },
            options: {
                type: Object,
                default() {
                    return {};
                }
            },
            keyMap: {
                type: String,
                default: 'number'
            },
            disabled: {
                type: Boolean,
                default: false
            },
            multiple: {
                type: Boolean,
                default: false
            },
            params: {
                type: Object,
                default: null
            },
            pivotParams: {
                type: Object,
                default: null
            },
            customParams: {
                type: Object,
                default: null
            },
            labels: {
                type: Object,
                default() {
                    return Store ? {
                        placeholder: Store.labels.selectOption,
                        selected: Store.labels.selected,
                        select: Store.labels.select,
                        deselect: Store.labels.deselect,
                        noResult: Store.labels.noResult
                    } : null;
                }
            }
        },

        computed: {
            isServerSide() {
                return this.source !== null;
            },
            optionKeys() {
                return this.keyMap === 'number'
                   ? Object.keys(this.optionList).map(Number)
                   : Object.keys(this.optionList);
              },
            matchedValue() {
                let self = this;

                if (!this.multiple) {
                    return this.optionKeys.filter(option => {
                        return option === self.value;
                    }).length > 0;
                }

                return this.optionKeys.filter(option => {
                    return self.value.filter(val => {
                        return val === option;
                    }).length > 0;
                }).length > 0;
            }
        },

        filters: {
            highlight(option, query) {
                query.split(' ').filter(word => {
                    return word.length;
                }).forEach(word => {
                    option = option.replace(new RegExp('(' + word + ')', 'gi'), '<b>$1</b>')
                });

                return option;
            }
        },

        watch: {
            params: {
                handler() {
                    this.getOptions();
                },
                deep: true
            },
            pivotParams: {
                handler() {
                    this.getOptions();
                },
                deep: true
            },
            customParams: {
                handler() {
                    this.getOptions();
                },
                deep: true
            },
        },

        data() {
            return {
                optionList: this.options,
                loading: false,
                query: ""
            };
        },

        created() {
            this.$bus.$on('form-restored', this.update);
        },

        methods: {
            getOptions() {
                if (!this.isServerSide) {
                    return false;
                }

                this.loading = true;

                axios.get(this.source, {params: this.getParams()}).then(response => {
                    this.processOptions(response);
                    this.loading = false;
                }).catch(error => {
                    this.loading = true;
                    this.reportEnsoException(error);
                });
            },
            getParams() {
                return {
                    params: this.params,
                    pivotParams: this.pivotParams,
                    customParams: this.customParams,
                    query: this.query,
                    value: this.value
                };
            },
            processOptions(response) {
                this.optionList = response.data;
                let self = this;

                if (!this.query && !this.matchedValue) {
                    this.clear();
                }
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

        mounted() {
            if (this.isServerSide) {
                this.getOptions();
            }
        },
    }

</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style>

    div.vue-select .multiselect {
        min-height: 33px;
    }

    div.vue-select .multiselect__select {
        height: 31px;
    }

    .form-group div.vue-select .multiselect__tags {
        border: none;
        border-radius: 0;
        border-bottom: 1px solid #e8e8e8;
    }

    div.vue-select .multiselect__tags {
        min-height: 32px;
        padding: 4px 40px 0 4px;
        border-radius: 3px;
    }

    div.vue-select .multiselect__tag {
        border-radius: 3px;
        margin-bottom: 4px;
    }

    div.vue-select .multiselect__tag-icon {
        border-radius: 3px;
        line-height: 21px;
    }

    div.vue-select input[type=text].multiselect__input {
        font-size: 14px;
        box-shadow: none;
        margin-bottom: 4px;
        padding: 1px;
        border-bottom: none;
    }

    div.vue-select .multiselect__content-wrapper {
        border-bottom-left-radius: 3px;
        border-bottom-right-radius: 3px;
    }

    div.vue-select .multiselect__option,
    div.vue-select .multiselect__option:after {
        line-height: 14px;
        padding: 10px;
        min-height: 33px;

    }

    div.vue-select .multiselect__spinner {
        height: 30px
    }

</style>