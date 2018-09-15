<template>

    <card icon="address-card"
        refresh
        scrollable
        search
        :title="displayTitle"
        :overlay="$refs.contacts && $refs.contacts.loading"
        @refresh="$refs.contacts.get()"
        :collapsed="!open || isEmpty"
        ref="card"
        @query-update="query = $event"
        @expand="isEmpty
            ? $refs.card.collapse()
            : null"
        :badge="count"
        :controls="1">
        <card-control slot="control-1"
            @click="$refs.contacts.create()">
            <span class="icon is-small">
                <fa icon="plus-square"/>
            </span>
        </card-control>
        <div class="wrapper has-padding-medium">
            <contacts :id="id"
                :type="type"
                :query="query"
                @update="count = $refs.contacts.count; $refs.card.resize()"
                ref="contacts"/>
        </div>
    </card>

</template>

<script>

import { mapState } from 'vuex';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAddressCard, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import Card from '../bulma/Card.vue';
import CardControl from '../bulma/CardControl.vue';
import Contacts from './Contacts.vue';

library.add(faAddressCard, faPlusSquare);

export default {
    name: 'ContactsCard',

    components: {
        Card, CardControl, Contacts,
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
                ? this.title || this.__('Contacts')
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
        max-height: 415px;
        overflow-y: auto;
    }
</style>
