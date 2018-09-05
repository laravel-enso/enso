<template>

    <modal v-on="$listeners"
        :show="true">
        <vue-form class="box"
            :data="form"
            :params="params"
            v-on="$listeners">
            <template v-for="field in customFields"
                v-if="field.meta.custom"
                :slot="field.name"
                slot-scope="{ field, errors}">
                <slot :name="field.name"
                    :field="field"
                    :errors="errors"/>
            </template>
        </vue-form>
    </modal>

</template>

<script>

import { library } from '@fortawesome/fontawesome-svg-core';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import VueForm from '../vueforms/VueForm.vue';
import Modal from '../bulma/Modal.vue';

library.add(faLocationArrow);

export default {
    name: 'AddressForm',

    components: { Modal, VueForm },

    props: {
        id: {
            type: Number,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        form: {
            type: Object,
            default: null,
        },
    },

    computed: {
        params() {
            return {
                addressable_id: this.id,
                addressable_type: this.type,
            };
        },
        customFields() {
            return this.form.sections
                .reduce((fields, section) => fields
                    .concat(section.fields.filter(field => field.meta.custom)), []);
        },
    },
};

</script>

<style>

    .modal-content {
        width: 70%;
    }

</style>
