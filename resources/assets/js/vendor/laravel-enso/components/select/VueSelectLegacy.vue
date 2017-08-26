<template>

    <div :id="'bs-select-' + _uid"
        class="vue-select">
        <i class="fa fa-times clear-button btn-box-tool"
           @click="clear()"
           v-if="clearButton">
        </i>
        <select v-selectpicker
            :multiple="multiple"
            :id="'select-' + _uid"
            :name="name"
            :disabled="disabled"
            :class="selectClass">
            <option v-for="option in optionList"
                :value="option.key"
                v-html="option.value">
            </option>
        </select>
    </div>

</template>

<script>

    export default {

        props: {
            name: {
                type: String,
                default: null
            },
            value: {
                default: null
            },
            selectClass: {
                type: String,
                default: 'form-control'
            },
            disabled: {
                type: Boolean,
                default: false
            },
            multiple: {
                type: Boolean,
                default: false
            },
            source: {
                type: String,
                default: null
            },
            options: {
                type: Array,
                default() {
                    return [];
                }
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
            }
        },

        computed: {
            clearButton() {
                return !this.disabled && !this.multiple && this.value;
            },
            isServerSide() {
                return this.source !== null;
            },
            element() {
                return $('#select-' + this._uid);
            },
            query() {
                return $('#bs-select-' + this._uid + ' input');
            }
        },

        directives: {
            selectpicker: {
                inserted(element, binding, vnode) {
                    $(element).selectpicker({
                        actionsBox: true,
                        liveSearch: true,
                        size: 5
                    });

                    $(element).selectpicker('val', vnode.context.value);

                    $(element).on('changed.bs.select', function() {
                        vnode.context.$emit('input', $(element).val());
                    });
                },
                unbind(element, binding, vnode) {
                    $(element).off().selectpicker('destroy');
                }
            }
        },

        watch: {
            params: {
                handler() {
                    this.getOptionList();
                },
                deep: true
            },
            pivotParams: {
                handler() {
                    this.getOptionList();
                },
                deep: true
            },
            value: {
                handler() {
                    this.element.selectpicker('val', this.value);
                    this.$emit('input', this.value);
                }
            }
        },

        data() {
            return {
                optionList: this.options,
            };
        },

        methods: {
            getOptionList() {
                axios.get(this.source, {params: this.getParams()}).then(response => {
                    this.processOptions(response);
                }).catch(error => {
                    this.reportEnsoException(error);
                }).then(() => {
                    this.element.selectpicker('refresh');
                    this.update(this.value);
                });
            },
            getParams() {
                return {
                    params: this.params,
                    pivotParams: this.pivotParams,
                    customParams: this.customParams,
                    query: this.getQuery(),
                    value: this.value
                };
            },
            processOptions(response) {
                this.optionList = response.data.length === 0 && this.getQuery() ?
                        [{ key: null, value: ''}] : response.data;
            },
            addQueryListener() {
                let self = this;
                this.query.on('input', _.throttle(self.getOptionList, 200));
            },
            getQuery() {
                return this.query.val() || ''; //we don't want undefined
            },
            update(value) {
                this.element.selectpicker('val', value).trigger('changed.bs.select');
            },
            clear() {
                this.update('');
            }
        },

        mounted() {
            if (this.isServerSide) {
                this.getOptionList();
                this.addQueryListener();
            }
        }
    }

</script>

<style>

    .vue-select > i.clear-button {
        z-index: 10;
        float:right;
        position: absolute;
        right: 50px;
        cursor: pointer;
    }

    .bootstrap-select.btn-group .dropdown-menu {
        width: 100%;
        min-width: 0;
    }

</style>