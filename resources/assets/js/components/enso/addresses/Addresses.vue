<template>

    <card icon="fa fa-map-signs"
        refresh search
        :title="title || __('Addresses')"
        :overlay="loading"
        @refresh="get()"
        :open="open"
        ref="addressCard"
        @query-update="query = $event"
        :badge="addresses.length"
        :controls="1">

        <a slot="control-1" class="card-header-icon">
            <span class="icon is-small"
                  @click="create()">
                <i class="fa fa-plus-square"></i>
            </span>
        </a>

        <div class="has-padding-medium addresses-wrapper">
            <div class="columns is-multiline">
                <div class="column is-half-tablet is-one-third-widescreen"
                    v-for="(address, index) in filteredAddresses" :key="index">
                        <address-card
                            :address="address"
                            @default-set="handleDefaultSet"
                            @do-edit="handleEdit(address)"
                            @do-delete="destroy"
                            :index="index"
                            :key="index">

                            <!--card customization template passthrough-->
                            <template slot="address-card-template" :address="address">
                                <slot name="address-template" :address="address">
                                </slot>
                            </template>

                        </address-card>
                </div>

            </div>
        </div>
        <address-modal-form
            v-if="form"
            :form="form"
            :type="type"
            :id="id"
            ref="modal"
            @form-close="form=null"
            @destroy="get();form=null"
            @submit="get();form=null">

                <!--form customization elements passthrough-->
                <template
                    v-for="field in form.fields"
                    v-if="field.meta.custom"
                    :slot="field.column"
                    slot-scope="props">
                        <slot
                            :name="props.field.column"
                            :field="props.field"
                            :errors="props.errors">
                        </slot>
                </template>
        </address-modal-form>
    </card>

</template>

<script>

import { mapGetters } from 'vuex';
import Card from '../bulma/Card.vue';
import AddressCard from './AddressCard.vue';
import AddressModalForm from './AddressModalForm.vue';

export default {
    name: 'Addresses',
    components: { AddressCard, AddressModalForm, Card },
    props: {
        id: {
            type: Number,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        theme: {
            type: String,
            default: 'primary',
        },
        solid: {
            type: Boolean,
            default: false,
        },
        open: {
            type: Boolean,
            default: false,
        },
        title: {
            type: String,
            default: null,
        },
    },

    computed: {
        ...mapGetters('locale', ['__']),
        filteredAddresses() {
            return this.query
                ? this.addresses.filter((address) => {
                    return address.city.toLowerCase().indexOf(this.query.toLowerCase()) > -1
                        || address.street.toLowerCase().indexOf(this.query.toLowerCase()) > -1
                        || address.number.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
                })
                : this.addresses;
        },
    },

    data() {
        return {
            loading: false,
            query: '',
            addresses: [],
            bodyStyle: { 'max-height': '415px', 'overflow-y': 'auto' },
            form: null,
        };
    },

    methods: {

        getEditForm(address) {
            axios.get(route('addresses.edit', address.id, false)).then((response) => {
                this.$emit('form-loaded', response.data);
                this.form = response.data.editForm;
            }).catch((error) => {
                this.handleError(error);
            });
        },
        getCreateForm() {
            const params = { addressable_id: this.id, addressable_type: this.type };
            axios.get(route('addresses.create', params, false)).then((response) => {
                this.form = response.data.createForm;
            }).catch((error) => {
                this.handleError(error);
            });
        },
        handleEdit(address) {
            this.getEditForm(address);
        },
        handleDefaultSet($event) {
            this.get();
            toastr.success($event);
        },
        get() {
            this.loading = true;

            axios.get(route('addresses.list', { id: this.id, type: this.type }, false)).then((response) => {
                this.addresses = response.data;
                this.loading = false;
            }).catch((error) => {
                this.loading = false;
                this.handleError(error);
            });
        },
        create() {
            if (this.$refs.addressCard.collapsed) {
                this.$refs.addressCard.toggle();
            }

            this.getCreateForm();
        },
        destroy(payload) {
            axios.delete(route('addresses.destroy', payload.id, false)).then(() => {
                this.$parent.loading = false;
                this.addresses.splice(payload.index, 1);
            }).catch((error) => {
                this.$parent.loading = false;
                this.handleError(error);
            });
        },
    },

    mounted() {
        this.get();
    },
};

</script>

<style>

    .addresses-wrapper {
        max-height: 315px;
        overflow-y: auto;
    }

</style>
