<template>

    <card icon="fas fa-map-signs"
        refresh
        :search="addresses.length > 1"
        :title="title || __('Addresses')"
        :overlay="loading"
        @refresh="get()"
        :collapsed="!open || isEmpty"
        ref="card"
        @query-update="query = $event"
        :badge="count"
        :controls="1">
        <card-control slot="control-1">
            <span class="icon is-small"
                @click="create()">
                <i class="fas fa-plus-square"></i>
            </span>
        </card-control>
        <div class="has-padding-medium wrapper">
            <div class="columns is-multiline">
                <div class="column is-half-tablet is-one-third-widescreen"
                    v-for="(address, index) in filteredAddresses"
                    :key="index">
                    <address-card :address="address"
                        @set-default="setDefault(address)"
                        @edit="edit(address)"
                        @destroy="destroy(address, index)"
                        :key="index">
                        <template slot="address"
                            :address="address">
                            <slot name="address"
                                :address="address">
                            </slot>
                        </template>
                    </address-card>
                </div>
            </div>
        </div>
        <address-form
            v-if="form"
            :id="id"
            :type="type"
            :form="form"
            @form-close="form=null"
            @destroy="get();form=null"
            @submit="get();form=null">
            <template v-for="field in form.fields"
                v-if="field.meta.custom"
                :slot="field.name"
                slot-scope="props">
                <slot :name="props.field.name"
                    :field="props.field"
                    :errors="props.errors">
                </slot>
            </template>
        </address-form>
    </card>

</template>

<script>

import { mapGetters } from 'vuex';
import Card from '../bulma/Card.vue';
import CardControl from '../bulma/CardControl.vue';
import AddressCard from './AddressCard.vue';
import AddressForm from './AddressForm.vue';

export default {
    name: 'Addresses',

    components: {
        Card, CardControl, AddressCard, AddressForm,
    },

    props: {
        id: {
            type: Number,
            required: true,
        },
        type: {
            type: String,
            required: true,
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
                ? this.addresses.filter(address =>
                    address.city.toLowerCase().indexOf(this.query.toLowerCase()) > -1
                    || address.street.toLowerCase().indexOf(this.query.toLowerCase()) > -1
                    || address.number.toLowerCase().indexOf(this.query.toLowerCase()) > -1)
                : this.addresses;
        },
        count() {
            return this.addresses.length;
        },
        isEmpty() {
            return this.count === 0;
        },
    },

    data() {
        return {
            loading: false,
            query: '',
            addresses: [],
            form: null,
        };
    },

    created() {
        this.get();
    },

    methods: {

        edit(address) {
            this.loading = true;

            axios.get(route('core.addresses.edit', address.id, false)).then(({ data }) => {
                this.form = data.form;
                this.$emit('form-loaded', this.form);
                this.loading = false;
            }).catch((error) => {
                this.loading = false;
                this.handleError(error);
            });
        },
        create() {
            if (this.$refs.card.collapsed) {
                this.$refs.card.toggle();
            }

            const params = { addressable_id: this.id, addressable_type: this.type };
            this.loading = true;

            axios.get(route('core.addresses.create', params, false)).then(({ data }) => {
                this.form = data.form;
                this.$emit('form-loaded', this.form);
                this.loading = false;
            }).catch((error) => {
                this.loading = false;
                this.handleError(error);
            });
        },
        setDefault(address) {
            this.loading = true;

            axios.patch(route('core.addresses.setDefault', address.id, false)).then(() => {
                this.get();
            }).catch((error) => {
                this.loading = false;
                this.handleError(error);
            });
        },
        get() {
            this.loading = true;

            axios.get(route('core.addresses.index', { id: this.id, type: this.type }, false)).then((response) => {
                this.addresses = response.data;
                this.loading = false;
            }).catch((error) => {
                this.loading = false;
                this.handleError(error);
            });
        },
        destroy(address, index) {
            this.loading = true;

            axios.delete(route('core.addresses.destroy', address.id, false)).then(() => {
                this.loading = false;
                this.addresses.splice(index, 1);
            }).catch((error) => {
                this.loading = false;
                this.handleError(error);
            });
        },
    },
};

</script>

<style scoped>

    .wrapper {
        max-height: 430px;
        overflow-y: auto;
    }

</style>
