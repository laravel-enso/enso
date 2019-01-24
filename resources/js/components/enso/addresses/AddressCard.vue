<template>
    <div class="box has-background-light raises-on-hover">
        <div class="media">
            <div class="media-content">
                <span class="icon is-pulled-right has-text-success"
                    v-tooltip="__('default')"
                    v-if="address.isDefault">
                    <fa icon="anchor"/>
                </span>
                <slot name="address" :address="address">
                    <strong v-if="address.number">
                        {{ address.number }}
                    </strong>
                    <strong>
                        {{ address.street }}
                    </strong>
                    <strong v-if="address.streetType">
                        {{ __(address.streetType) }},
                    </strong>
                    <br>
                    <strong v-if="address.building">
                        <span class="has-text-grey">
                            {{ __(address.buildingType) }}
                        </span>
                        {{ address.building }},
                    </strong>
                    <strong v-if="address.entry">
                        <span class="has-text-grey">
                            {{ __('Entry') }}
                        </span>
                        {{ address.entry }},
                    </strong>
                    <strong v-if="address.floor">
                        <span class="has-text-grey">
                            {{ __('Floor') }}
                        </span>
                        {{ address.floor }},
                    </strong>
                    <strong v-if="address.apartment">
                        <span class="has-text-grey">
                            {{ __('Apartment') }}
                        </span>
                        {{ address.apartment }},
                    </strong>
                    <br>
                    <strong v-if="address.subAdministrativeArea">
                        {{ address.subAdministrativeArea }},
                    </strong>
                    <strong v-if="address.city">
                        {{ address.city }},
                    </strong>
                    <br>
                    <strong v-if="address.postalArea">
                        {{ address.postalArea }},
                    </strong>
                    <strong v-if="address.administrativeArea">
                        {{ address.administrativeArea }},
                    </strong>
                    <br>
                    <span class="icon">
                        <fa icon="globe"/>
                    </span>
                    <strong>
                        {{ address.country }}
                    </strong>
                    <br>
                    <span class="icon"
                        v-if="address.obs">
                        <fa icon="sticky-note"/>
                    </span>
                     {{ address.obs }}
                </slot>
            </div>
        </div>
        <div class="has-text-centered has-margin-top-medium">
            <div class="details">
                <button class="button is-naked"
                    @click="$emit('edit')">
                    <span class="icon">
                        <fa icon="pencil-alt"/>
                    </span>
                </button>
                <button class="button is-naked"
                    @click="$emit('set-default')">
                    <span class="icon">
                        <fa icon="anchor"/>
                    </span>
                </button>
                <popover placement="top"
                    @confirm="$emit('delete')">
                    <button class="button is-naked">
                        <span class="icon">
                            <fa icon="trash-alt"/>
                        </span>
                    </button>
                </popover>
            </div>
        </div>
    </div>
</template>

<script>

import { VTooltip } from 'v-tooltip';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faPencilAlt, faAnchor, faGlobe, faStickyNote, faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
import Popover from '../bulma/Popover.vue';

library.add(faPencilAlt, faAnchor, faGlobe, faStickyNote, faTrashAlt);

export default {
    name: 'AddressCard',

    components: { Popover },

    directives: { tooltip: VTooltip },

    props: {
        address: {
            type: Object,
            required: true,
        },
    },
};

</script>

<style lang="scss" scoped>

    .media-content {
        min-height: 148px;
    }

    .details {
        display: flex;
        justify-content: center;
    }

</style>
