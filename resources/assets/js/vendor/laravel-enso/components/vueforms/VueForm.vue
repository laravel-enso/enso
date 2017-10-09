<template>
    <box :theme="this.errors.any() ? 'danger' : data.theme"
        :icon="data.icon"
        :title="data.title"
        open collapsible removable
        :border="!data.solid"
        :solid="data.solid"
        :overlay="loading">
        <span slot="btn-box-tool">
            <i class="btn btn-box-tool btn-sm fa fa-undo"
                @click="setOriginal()"
                v-if="data.action === 'patch' && hasChanges">
            </i>
            <i class="btn btn-box-tool btn-sm fa fa-eraser"
                @click="clear()">
            </i>
        </span>
        <form :name="'form-' + _uid"
            @submit.prevent="submit()">
            <div class="row">
                <div v-for="element in data.attributes"
                        :class="data.wrapperClass">
                    <div class="form-group"
                        :class="{ 'has-error' : errors.has(element.column) }">
                        <label class="bold">
                            {{ element.label }}
                        </label>
                        <small v-if="errors.has(element.column)"
                            class="text-danger"
                            style="float:right;">
                            {{ errors.get(element.column) }}
                        </small>
                        <span v-if="element.config.custom">
                            <slot :name="element.column"
                                :element="element"
                                :errors="errors">
                            </slot>
                        </span>
                        <span v-else>
                            <vue-form-input v-if="element.config.type === 'input'"
                                :element="element"
                                @update="errors.clear(element.column)">
                            </vue-form-input>
                            <vue-select v-if="element.config.type === 'select'"
                                @input="errors.clear(element.column);"
                                v-model="element.value"
                                :options="element.config.options"
                                :source="element.config.source"
                                :key-map="element.config.keyMap"
                                :multiple="element.config.multiple"
                                :disabled="element.config.disabled">
                            </vue-select>
                            <datepicker v-if="element.config.type === 'datepicker'"
                                @input="errors.clear(element.column)"
                                v-model="element.value"
                                :format="element.config.format"
                                :time="element.config.time"
                                :disabled="element.config.disabled">
                            </datepicker>
                            <datepicker v-if="element.config.type === 'timepicker'"
                                @input="errors.clear(element.column)"
                                v-model="element.value"
                                :format="element.config.format"
                                time-only
                                :disabled="element.config.disabled">
                            </datepicker>
                            <textarea v-if="element.config.type === 'textarea'"
                                @input="errors.clear(element.column)"
                                class="form-control"
                                v-model="element.value"
                                :rows="element.config.rows"
                                :disabled="element.config.disabled">
                            </textarea>
                        </span>
                    </div>
                </div>
            </div>
            <center>
                <button type="button"
                    class="btn btn-danger"
                    v-if="data.action === 'patch'"
                    @click="showModal = true">
                    <span>{{ data.submitDelete }}</span>
                </button>
                <button type="submit"
                    class="btn btn-primary">
                    <span v-if="data.action === 'post'">{{ data.submitStore }}</span>
                    <span v-else>{{ data.submitUpdate }}</span>
                </button>
            </center>
        </form>
        <modal :show="showModal"
            @cancel-action="showModal = false"
            @commit-action="destroy()">
        </modal>
    </box>
</template>

<script>

    import Errors from '../../classes/Errors.js';
    import Box from '../vueadminlte/Box.vue';
    import VueSelect from '../select/VueSelect.vue';
    import Datepicker from '../enso/Datepicker.vue';
    import VueFormInput from './VueFormInput.vue';

    export default {
        components: { Box, VueSelect, Datepicker, VueFormInput },

        props: {
            data: {
                type: Object,
                required: true
            }
        },

        computed: {
            hasChanges() {
                let self = this;

                return this.data.attributes.filter((attribute, index) => {
                    if (Array.isArray(attribute.value)) {
                        return attribute.value.toString() === self.originalData[index].toString();
                    }

                    return !attribute.value && !self.originalData[index] ||
                        (attribute.value && self.originalData[index]
                        && attribute.value === self.originalData[index]);
                }).length !== this.data.attributes.length;
            }
        },

        data() {
            return {
                loading: false,
                showModal: false,
                errors: new Errors(),
                originalData: this.data.attributes.pluck('value')
            };
        },

        methods: {
            submit() {
                this.loading = true;
                axios[this.data.action](this.data.url, this.formData()).then(response => {
                    this.loading = false;
                    toastr.success(response.data.message);
                    this.errors.empty();
                    this.$emit(this.data.action);

                    if (response.data.redirect) {
                        window.location.href = response.data.redirect;
                    }
                }).catch(error => {
                    this.loading = false;
                    this.reportEnsoException(error);
                }).catch(error=> {
                    this.errors.set(error.response.data.errors);
                });
            },
            formData() {
                return this.data.attributes.reduce((object, element) => {
                    object[element.column] = element.value;
                    return object;
                }, {});
            },
            setOriginal() {
                let self = this;

                this.data.attributes.forEach((attribute, index) => {
                    attribute.value = self.originalData[index];
                });

                this.errors.empty();
                this.$bus.$emit('form-restored');
            },
            clear() {
                this.data.attributes.forEach(element => {
                    element.value = Array.isArray(element.value) ? [] : null;
                });
            },
            destroy() {
                this.showModal = false;
                this.loading = true;

                axios.delete(this.data.url).then(response => {
                    this.loading = false;
                    toastr.success(response.data.message);
                    this.$emit('delete');

                    if (response.data.redirect) {
                        window.location.href = response.data.redirect;
                    }
                }).catch(error => {
                    this.loading = false;
                    this.reportEnsoException(error);
                });
            }
        }
    };

</script>