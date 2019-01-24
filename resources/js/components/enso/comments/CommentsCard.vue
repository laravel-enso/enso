<template>
    <card :icon="icon"
        refresh
        scrollable
        search
        :title="displayTitle"
        :overlay="$refs.comments && $refs.comments.loading"
        @refresh="$refs.comments.fetch()"
        :collapsed="!open || isEmpty"
        ref="card"
        @query-update="query = $event"
        @expand="isEmpty && $refs.comments
            && !$refs.comments.comment
                ? $refs.card.collapse()
                : null"
        :badge="count"
        :controls="1">
        <card-control slot="control-1"
            @click="addComment()">
            <span class="icon is-small">
                <fa icon="plus-square"/>
            </span>
        </card-control>
        <div class="has-padding-medium wrapper">
            <comments :id="id"
                :type="type"
                :query="query"
                @update="count = $refs.comments.count; $refs.card.resize()"
                ref="comments"/>
        </div>
    </card>
</template>

<script>

import { mapState } from 'vuex';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faComments, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import Card from '../bulma/Card.vue';
import CardControl from '../bulma/CardControl.vue';
import Comments from './Comments.vue';

library.add(faComments, faPlusSquare);

export default {
    name: 'CommentsCard',

    components: { Card, CardControl, Comments },

    props: {
        open: {
            type: Boolean,
            default: false,
        },
        id: {
            type: Number,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            default: '',
        },
        icon: {
            type: [String, Array, Object],
            default: () => faComments,
        },
    },

    data: () => ({
        count: 0,
        query: null,
    }),

    computed: {
        ...mapState('layout', ['isMobile']),
        displayTitle() {
            return !this.isMobile
                ? this.title || this.__('Comments')
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

    methods: {
        addComment() {
            this.$refs.comments.create();
            this.$nextTick(() => this.$refs.card.expand());
        },
    },
};

</script>

<style scoped>

    .wrapper {
        max-height: 500px;
        overflow-y: auto;
    }

</style>
