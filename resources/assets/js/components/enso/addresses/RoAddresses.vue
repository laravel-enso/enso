<template>

    <addresses
            @form-loaded="setCountyId"
            v-bind="$attrs"
            v-on="$listeners">

        <!--customized card content-->
        <template slot="address" slot-scope="props">
            <span v-if="props.address.street_type">{{props.address.street_type}}</span>
            <span v-if="props.address.street">{{props.address.street}}</span>
            <span v-if="props.address.number">{{__('Number')}}: {{ props.address.number }}</span>
            <br>
            <span v-if="props.address.building">{{__('Building')}}: {{ props.address.building }}</span>
            <span v-if="props.address.entry">{{__('Entry')}}: {{ props.address.entry }}</span>
            <span v-if="props.address.floor">{{__('Floor')}}: {{ props.address.floor }}</span>
            <span v-if="props.address.apartment">{{__('Apartment')}}: {{ props.address.apartment }}</span>
            <br>
            <span v-if="props.address.sub_administrative_area">{{__('Neighborhood')}}: {{ props.address.sub_administrative_area }}</span>
            <span v-if="props.address.city">{{ props.address.city }},</span>
            <span v-if="props.address.administrative_area">{{ props.address.administrative_area }}</span>
            <br>
            <span v-if="props.address.postal_area">{{ props.address.postal_area }}</span>
            <br>
            {{ props.address.country_name }} <br>
            <i class="fa fa-sticky-note "></i> {{ props.address.obs }} <br>
        </template>

        <!--custom form elements-->
        <template slot="county_id" slot-scope="props">
            <vue-select name="county_id"
                        v-model="props.field.value"
                        @input="params.county_id=$event;props.errors.clear(props.field.name);"
                        :options="props.field.meta.options">
            </vue-select>
        </template>
        <template slot="locality_id" slot-scope="props">
            <vue-select name="locality_id"
                        :params="params"
                        v-model="props.field.value"
                        @input="props.errors.clear(props.field.name);"
                        :source="props.field.meta.source">
            </vue-select>
        </template>
    </addresses>

</template>
<script>

import { mapGetters } from 'vuex';
import Addresses from './Addresses.vue';
import VueSelect from '../select/VueSelect.vue';

export default {
    components: { Addresses, VueSelect },
    data() {
        return {
            params: {
                county_id: null,
            },
        };
    },
    computed: {
        ...mapGetters('locale', ['__']),
    },
    methods: {
        getCountyId(form) {
            debugger;
            const attribute = form.fields.find((attribute) => {
                return attribute.name === 'county_id';
            });

            return attribute.value;
        },
        setCountyId(formData) {
            this.params.county_id = this.getCountyId(formData);
        },
    },
};

</script>
