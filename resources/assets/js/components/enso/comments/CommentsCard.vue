<template>

    <card :icon="icon"
        refresh
        scrollable
        :search="count > 1"
        :title="title || __('Comments')"
        :overlay="$refs.comments && $refs.comments.loading"
        @refresh="$refs.comments.refresh()"
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
                :paginate="paginate"
                @update="count = $refs.comments.count;
                    $refs.card.expanded ? $refs.card.resize() : null;"
                ref="comments"/>
        </div>
    </card>

</template>

<script>

import fontawesome from '@fortawesome/fontawesome';
import { faComments, faPlusSquare } from '@fortawesome/fontawesome-free-solid/shakable.es';
import Card from '../bulma/Card.vue';
import CardControl from '../bulma/CardControl.vue';
import Comments from './Comments.vue';

fontawesome.library.add(faComments, faPlusSquare);

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
        paginate: {
            type: Number,
            default: 5,
        },
        icon: {
            type: [String, Array, Object],
            default: () => faComments,
        },
    },

    data() {
        return {
            count: 0,
            query: null,
        };
    },

    computed: {
        isEmpty() {
            return this.count === 0;
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
