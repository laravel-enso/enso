<template>

    <card icon="map-signs"
        refresh
        scrollable
        search
        :title="displayTitle"
        :overlay="$refs.addresses && $refs.addresses.loading"
        @refresh="$refs.addresses.get()"
        :collapsed="!open || isEmpty"
        ref="card"
        @query-update="query = $event"
        @expand="isEmpty
            ? $refs.card.collapse()
            : null"
        :badge="count"
        :controls="1">
        <card-control slot="control-1">
            <span class="icon is-small"
                @click="$refs.addresses.create()">
                <fa icon="plus-square"/>
            </span>
        </card-control>
        <div class="wrapper has-padding-medium">
            <addresses :id="id"
                :type="type"
                :query="query"
                @update="count = $refs.addresses.count; $refs.card.resize()"
                ref="addresses"/>
        </div>
    </card>

</template>

<script>

import { mapState } from 'vuex';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMapSigns, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import Card from '../bulma/Card.vue';
import CardControl from '../bulma/CardControl.vue';
import Addresses from './Addresses.vue';

library.add(faMapSigns, faPlusSquare);

export default {
    name: 'AddressesCard',

    components: {
        Card, CardControl, Addresses,
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
            query: '',
            count: 0,
        };
    },

    computed: {
        ...mapState('layout', ['isMobile']),
        displayTitle() {
            return !this.isMobile
                ? this.title || this.__('Addresses')
                : null;
        },
        isEmpty() {
            return this.count === 0;
        },
    },

    watch: {
        count() {
            this.$refs.card.resize();
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
