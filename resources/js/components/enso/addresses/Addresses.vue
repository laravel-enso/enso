<template>

    <div class="wrapper">
        <div class="controls"
            v-if="controls">
            <button class="button"
                @click="create()">
                <span v-if="!isMobile">
                    {{ __('New Address') }}
                </span>
                <span class="icon">
                    <fa icon="plus"/>
                </span>
            </button>
            <button class="button has-margin-left-small"
                @click="fetch()">
                <span v-if="!isMobile">
                    {{ __('Reload') }}
                </span>
                <span class="icon">
                    <fa icon="sync"/>
                </span>
            </button>
            <p class="control has-icons-left has-icons-right has-margin-left-large">
                <input class="input is-rounded"
                    type="text"
                    v-model="internalQuery"
                    :placeholder="__('Filter')">
                <span class="icon is-small is-left">
                    <fa icon="search"/>
                </span>
                <span class="icon is-small is-right clear-button"
                    v-if="internalQuery"
                    @click="internalQuery = ''">
                    <a class="delete is-small"/>
                </span>
            </p>
        </div>
        <div class="columns is-multiline"
            :class="{'has-margin-top-large': controls}">
            <div class="column is-half-tablet is-one-third-widescreen"
                v-for="(address, index) in filteredAddresses"
                :key="index">
                <address-card :address="address"
                    @set-default="setDefault(address)"
                    @edit="edit(address)"
                    @delete="destroy(address, index)"
                    :key="index">
                    <template slot="address"
                        :address="address">
                        <slot name="address"
                            :address="address"/>
                    </template>
                </address-card>
            </div>
        </div>
        <address-form
            :id="id"
            :type="type"
            :form="form"
            @close="form = null"
            @delete="fetch();form = null"
            @submit="fetch();form = null"
            ref="form"
            v-if="form">
            <template v-for="field in customFields"
                :slot="field.name"
                slot-scope="{ field, errors }"
                v-if="field.meta.custom">
                <slot :name="field.name"
                    :field="field"
                    :errors="errors"/>
            </template>
        </address-form>
    </div>

</template>

<script>

import { mapState } from 'vuex';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faSync } from '@fortawesome/free-solid-svg-icons';
import AddressCard from './AddressCard.vue';
import AddressForm from './AddressForm.vue';

library.add(faPlus, faSync);

export default {
    name: 'Addresses',

    components: { AddressCard, AddressForm },

    props: {
        id: {
            type: Number,
            required: true,
        },
        type: {
            type: String,
            default: null,
        },
        query: {
            type: String,
            default: '',
        },
        controls: {
            type: Boolean,
            default: false,
        },
    },

    data() {
        return {
            loading: false,
            addresses: [],
            form: null,
            internalQuery: '',
        };
    },

    computed: {
        ...mapState('layout', ['isMobile']),
        filteredAddresses() {
            const query = this.internalQuery.toLowerCase();

            return query
                ? this.addresses.filter(({ city, street }) =>
                    city.toLowerCase().indexOf(query) > -1
                    || street.toLowerCase().indexOf(query) > -1)
                : this.addresses;
        },
        count() {
            return this.filteredAddresses.length;
        },
        customFields() {
            return this.form && this.form.sections
                .reduce((fields, section) => fields
                    .concat(section.fields.filter(field => field.meta.custom)), []);
        },
        params() {
            return {
                addressable_id: this.id,
                addressable_type: this.type,
            };
        },
    },

    watch: {
        count() {
            this.$emit('update');
        },
        query() {
            this.internalQuery = this.query;
        },
    },

    created() {
        this.fetch();
    },

    methods: {
        fetch() {
            this.loading = true;

            axios.get(
                route('core.addresses.index'),
                { params: this.params },
            ).then(({ data }) => {
                this.addresses = data;
                this.loading = false;
                this.$emit('update');
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
            this.loading = true;

            axios.get(route('core.addresses.create', this.params)).then(({ data }) => {
                this.form = data.form;
                this.$emit('form-loaded', this.form);
                this.loading = false;
                this.$emit('update');
            }).catch(error => this.handleError(error));
        },
        setDefault(address) {
            this.loading = true;

            axios.patch(route('core.addresses.setDefault', address.id)).then(() => {
                this.fetch();
            }).catch(error => this.handleError(error));
        },
        destroy(address, index) {
            this.loading = true;

            axios.delete(route('core.addresses.destroy', address.id)).then(() => {
                this.loading = false;
                this.addresses.splice(index, 1);
                this.$emit('update');
            }).catch(error => this.handleError(error));
        },
    },
};

</script>

<style lang="scss" scoped>

    .controls {
        display: flex;
        justify-content: center;
    }

</style>
