<template>

    <card icon="address-card"
        refresh
        scrollable
        search
        :title="displayTitle"
        :overlay="$refs.people && $refs.people.loading"
        @refresh="$refs.people.get()"
        :collapsed="!open || isEmpty"
        ref="card"
        @query-update="query = $event"
        @expand="isEmpty
            ? $refs.card.collapse()
            : null"
        :badge="count"
        :controls="1">
        <card-control slot="control-1"
            @click="$refs.people.create()">
            <span class="icon is-small">
                <fa icon="plus-square"/>
            </span>
        </card-control>
        <div class="wrapper has-padding-medium">
            <people :id="id"
                :query="query"
                @update="count = $refs.people.count; $refs.card.resize()"
                ref="people"/>
        </div>
    </card>

</template>

<script>

import { mapState } from 'vuex';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAddressCard, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import Card from '../bulma/Card.vue';
import CardControl from '../bulma/CardControl.vue';
import People from './People.vue';

library.add(faAddressCard, faPlusSquare);

export default {
    name: 'PeopleCard',

    components: { Card, CardControl, People },

    props: {
        id: {
            type: Number,
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
                ? this.title || this.__('People')
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
