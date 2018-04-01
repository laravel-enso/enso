<template>

    <card icon="map-signs"
        refresh
        scrollable
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
                <fa icon="plus-square"></fa>
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
            :id="id"
            :type="type"
            :form="form"
            @close="form = null"
            @destroy="get();form = null"
            @submit="get();form = null"
            ref="form"
            v-if="form">
            <template v-for="field in customFields"
                :slot="field.name"
                slot-scope="{ field, errors }"
                v-if="field.meta.custom">
                <slot :name="field.name"
                    :field="field"
                    :errors="errors">
                </slot>
            </template>
        </address-form>
    </card>

</template>

<script>

import fontawesome from '@fortawesome/fontawesome';
import { faMapSigns, faPlusSquare } from '@fortawesome/fontawesome-free-solid/shakable.es';
import Card from '../bulma/Card.vue';
import CardControl from '../bulma/CardControl.vue';
import AddressCard from './AddressCard.vue';
import AddressForm from './AddressForm.vue';

fontawesome.library.add(faMapSigns, faPlusSquare);

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

    data() {
        return {
            loading: false,
            query: '',
            addresses: [],
            form: null,
        };
    },

    computed: {
        filteredAddresses() {
            const query = this.query.toLowerCase();

            return query
                ? this.addresses.filter(address =>
                    address.city.toLowerCase().indexOf(query) > -1
                    || address.street.toLowerCase().indexOf(query) > -1
                    || address.number.toLowerCase().indexOf(query) > -1)
                : this.addresses;
        },
        count() {
            return this.addresses.length;
        },
        isEmpty() {
            return this.count === 0;
        },
        customFields() {
            return this.form.sections
                .reduce((fields, section) => fields
                    .concat(section.fields.filter(field => field.meta.custom)), []);
        },
    },

    created() {
        this.get();
    },

    methods: {
        get() {
            this.loading = true;

            axios.get(
                route('core.addresses.index'),
                { params: { id: this.id, type: this.type } },
            ).then((response) => {
                this.addresses = response.data;
                this.loading = false;
                this.$refs.card.resize();
            }).catch(error => this.handleError(error));
        },
        edit(address) {
            this.loading = true;

            axios.get(route('core.addresses.edit', address.id))
                .then(({ data }) => {
                    this.form = data.form;
                    this.$emit('form-loaded', this.form);
                    this.loading = false;
                }).catch(error => this.handleError(error));
        },
        create() {
            if (!this.$refs.card.expanded) {
                this.$refs.card.toggle();
            }

            const params = { addressable_id: this.id, addressable_type: this.type };
            this.loading = true;

            axios.get(route('core.addresses.create', params)).then(({ data }) => {
                this.form = data.form;
                this.$emit('form-loaded', this.form);
                this.loading = false;
            }).catch(error => this.handleError(error));
        },
        setDefault(address) {
            this.loading = true;

            axios.patch(route('core.addresses.setDefault', address.id)).then(() => {
                this.get();
            }).catch(error => this.handleError(error));
        },
        destroy(address, index) {
            this.loading = true;

            axios.delete(route('core.addresses.destroy', address.id)).then(() => {
                this.loading = false;
                this.addresses.splice(index, 1);
            }).catch(error => this.handleError(error));
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
