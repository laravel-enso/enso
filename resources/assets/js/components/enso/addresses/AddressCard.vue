<template>

    <card
        footer
        :header="false"
        :footer-items="3">
        <div class="media has-padding-medium">
            <div class="media-content">

                <span class="icon is-large is-pulled-right has-text-success">
                    <i class="fa fa-2x fa-anchor" v-if="address.is_default" :title="__('Default Address')"></i>
                </span>

                <!--default slot content will be overwritten if anything is provided-->
                <slot name="address-card-template" :address="address">

                    <span v-if="address.number">{{ address.number }}</span>
                    <span v-if="address.street">{{ address.street }}</span>
                    <span v-if="address.street_type">{{ address.street_type }},</span>
                    <br>
                    <span v-if="address.building"><span class="address-label">{{__('Building')}}: </span>{{ address.building }},</span>
                    <span v-if="address.entry"><span class="address-label">{{__('Entry')}}: </span>{{ address.entry }},</span>
                    <span v-if="address.floor"><span class="address-label">{{__('Floor')}}: </span>{{ address.floor }},</span>
                    <span v-if="address.apartment"><span class="address-label">{{__('Apartment')}}: </span>{{ address.apartment }},</span>
                    <br>
                    <span v-if="address.sub_administrative_area">{{ address.sub_administrative_area }},</span>
                    <span v-if="address.city">{{ address.city }},</span>
                    <br>
                    <span v-if="address.postal_area">{{ address.postal_area }},</span>
                    <span v-if="address.administrative_area"> {{ address.administrative_area }},</span>
                    <br>
                    {{ address.country_name }}
                    <br>
                    <i class="fa fa-sticky-note "></i> {{ address.obs }} <br>
                </slot>
            </div>
        </div>

        <a slot="footer-item-1" @click="handleEdit">
            {{__('edit')}}
        </a>
        <a slot="footer-item-2" >
            <span class="icon">
                <i class="fa fa-anchor"
                   @click="setDefault"></i>
            </span>
        </a>
        <popover slot="footer-item-3"
                 placement="bottom-end"
                 @confirm="destroy"
                 @show="dialog = true"
                 @hide="dialog = controls = false">

                    <a  @click="dialog=true">
                        {{__('delete')}}
                    </a>
        </popover>
    </card>

</template>

<script>

import { mapGetters } from 'vuex';
import AddressModalForm from './AddressModalForm.vue';
import Modal from '../bulma/Modal.vue';
import Card from '../bulma/Card.vue';
import Popover from '../bulma/Popover.vue';

export default {
    components: { AddressModalForm, Card, Modal, Popover },
    props: {
        index: {
            type: Number,
            required: true,
        },
        address: {
            type: Object,
            required: true,
        },
    },

    data() {
        return {
            form: null,
            showModal: false,
        };
    },

    computed: {
        ...mapGetters('locale', ['__']),
    },

    methods: {

        setDefault() {
            axios.get(route('addresses.setDefault', this.address.id, false)).then((response) => {
                this.$emit('default-set', response.data.message);
            }).catch((error) => {
                this.reportEnsoException(error);
            });
        },
        handleEdit() {
            this.$emit('do-edit');
        },
        destroy() {
            this.showModal = false;
            this.$emit('do-delete', { index: this.index, id: this.address.id });
        },
    },
};

</script>

<style>

    .address-label {
        color: #808080b5;
    }


    address.contact-info {
        padding-left: 5px;
        padding-top: 5px;
    }

    .small-box-footer.controls > i {
        cursor: pointer;
    }

    .modal-body {
        color: #3c3a3a !important;
    }

</style>
