<template>

    <card fixed>
        <div class="media has-padding-medium">
            <div class="media-content">
                <span class="icon is-pulled-right has-text-success"
                    v-tooltip="__('default')"
                    v-if="address.is_default">
                    <fa icon="anchor"/>
                </span>
                <slot name="address" :address="address">
                    <span v-if="address.number">
                        {{ address.number }}
                    </span>
                    <span v-if="address.street">
                        {{ address.street }}
                    </span>
                    <span v-if="address.street_type">
                        {{ __(address.street_type) }},
                    </span>
                    <br>
                    <span v-if="address.building">
                        <span class="has-text-grey">
                            {{ __(address.building_type) }}
                        </span>
                        {{ address.building }},
                    </span>
                    <span v-if="address.entry">
                        <span class="has-text-grey">
                            {{ __('Entry') }}
                        </span>
                        {{ address.entry }},
                    </span>
                    <span v-if="address.floor">
                        <span class="has-text-grey">
                            {{ __('Floor') }}
                        </span>
                        {{ address.floor }},
                    </span>
                    <span v-if="address.apartment">
                        <span class="has-text-grey">
                            {{ __('Apartment') }}
                        </span>
                        {{ address.apartment }},
                    </span>
                    <br>
                    <span v-if="address.sub_administrative_area">
                        {{ address.sub_administrative_area }},
                    </span>
                    <span v-if="address.city">
                        {{ address.city }},
                    </span>
                    <br>
                    <span v-if="address.postal_area">
                        {{ address.postal_area }},
                    </span>
                    <span v-if="address.administrative_area">
                        {{ address.administrative_area }},
                    </span>
                    <br>
                    <span class="icon">
                        <fa icon="globe"/>
                    </span>
                    {{ address.country_name }}
                    <br>
                    <span class="icon"
                        v-if="address.obs">
                        <fa icon="sticky-note"/>
                    </span>
                     {{ address.obs }}
                </slot>
            </div>
        </div>
        <card-footer slot="footer">
            <card-footer-item>
                <a @click="$emit('edit')">
                    {{ __('edit') }}
                </a>
            </card-footer-item>
            <card-footer-item v-if="!address.is_default">
                <a @click="$emit('set-default')">
                    <span class="icon">
                        <fa icon="anchor"/>
                    </span>
                </a>
            </card-footer-item>
            <card-footer-item>
                <popover @confirm="$emit('destroy')">
                    <a>{{ __('delete') }}</a>
                </popover>
            </card-footer-item>
        </card-footer>
    </card>

</template>

<script>

import { VTooltip } from 'v-tooltip';
import fontawesome from '@fortawesome/fontawesome';
import { faAnchor, faGlobe, faStickyNote } from '@fortawesome/fontawesome-free-solid/shakable.es';
import Card from '../bulma/Card.vue';
import CardFooter from '../bulma/CardFooter.vue';
import CardFooterItem from '../bulma/CardFooterItem.vue';
import Popover from '../bulma/Popover.vue';

fontawesome.library.add(faAnchor, faGlobe, faStickyNote);

export default {
    name: 'AddressesCard',

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
};

</script>

<style scoped>

    .media-content {
        min-height: 148px;
    }

</style>
