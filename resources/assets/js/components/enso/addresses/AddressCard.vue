<template>

    <card :header="false"
        footer
        :footer-items="3">
        <div class="media has-padding-medium">
            <div class="media-content">
                <span class="icon is-pulled-right has-text-success">
                    <i class="fa fa-anchor"
                        v-tooltip="__('default')"
                        v-if="address.is_default">
                    </i>
                </span>
                <slot name="address" :address="address">
                    <span v-if="address.number">{{ address.number }}</span>
                    <span v-if="address.street">{{ address.street }}</span>
                    <span v-if="address.street_type">{{ address.street_type }},</span>
                    <br>
                    <span v-if="address.building"><span class="has-text-grey">{{__('Building')}}: </span>{{ address.building }},</span>
                    <span v-if="address.entry"><span class="has-text-grey">{{__('Entry')}}: </span>{{ address.entry }},</span>
                    <span v-if="address.floor"><span class="has-text-grey">{{__('Floor')}}: </span>{{ address.floor }},</span>
                    <span v-if="address.apartment"><span class="has-text-grey">{{__('Apartment')}}: </span>{{ address.apartment }},</span>
                    <br>
                    <span v-if="address.sub_administrative_area">{{ address.sub_administrative_area }},</span>
                    <span v-if="address.city">{{ address.city }},</span>
                    <br>
                    <span v-if="address.postal_area">{{ address.postal_area }},</span>
                    <span v-if="address.administrative_area"> {{ address.administrative_area }},</span>
                    <br>
                    <span class="icon">
                        <i class="fa fa-globe"></i>
                    </span>
                    {{ address.country_name }}
                    <br>
                    <span class="icon"
                        v-if="address.obs">
                        <i class="fa fa-sticky-note"></i>
                    </span>
                     {{ address.obs }}
                </slot>
            </div>
        </div>

        <a slot="footer-item-1" @click="$emit('edit')">
            {{__('edit')}}
        </a>
        <a slot="footer-item-2" >
            <span class="icon"
                @click="$emit('set-default')">
                <i class="fa fa-anchor"></i>
            </span>
        </a>
        <popover slot="footer-item-3"
            @confirm="$emit('destroy')">
            <a>{{__('delete')}}</a>
        </popover>
    </card>

</template>

<script>

import { mapGetters } from 'vuex';
import { VTooltip } from 'v-tooltip';
import Card from '../bulma/Card.vue';
import Popover from '../bulma/Popover.vue';

export default {
    components: { Card, Popover },

    directives: { tooltip: VTooltip },

    props: {
        address: {
            type: Object,
            required: true,
        },
    },

    computed: {
        ...mapGetters('locale', ['__']),
    },
};

</script>
