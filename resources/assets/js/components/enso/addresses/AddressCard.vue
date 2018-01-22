<template>

    <card fixed>
        <div class="media has-padding-medium">
            <div class="media-content">
                <span class="icon is-pulled-right has-text-success"
                    v-if="address.is_default"
                    v-tooltip="__('default')">
                    <i class="fas fa-anchor">
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
                        <i class="fas fa-globe"></i>
                    </span>
                    {{ address.country_name }}
                    <br>
                    <span class="icon"
                        v-if="address.obs">
                        <i class="fas fa-sticky-note"></i>
                    </span>
                     {{ address.obs }}
                </slot>
            </div>
        </div>
        <card-footer slot="footer">
            <card-footer-item>
                <a @click="$emit('edit')">
                    {{__('edit')}}
                </a>
            </card-footer-item>
            <card-footer-item>
                <a @click="$emit('set-default')">
                    <span class="icon">
                        <i class="fas fa-anchor"></i>
                    </span>
                </a>
            </card-footer-item>
            <card-footer-item>
                <popover @confirm="$emit('destroy')">
                    <a>{{__('delete')}}</a>
                </popover>
            </card-footer-item>
        </card-footer>
    </card>

</template>

<script>

import { mapGetters } from 'vuex';
import { VTooltip } from 'v-tooltip';
import Card from '../bulma/Card.vue';
import CardFooter from '../bulma/CardFooter.vue';
import CardFooterItem from '../bulma/CardFooterItem.vue';
import Popover from '../bulma/Popover.vue';

export default {
    components: {
        Card, CardFooter, CardFooterItem, Popover,
    },

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
