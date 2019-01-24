<template>
    <div class="columns is-gapless has-background-light">
        <div class="column">
            <records-info :body="body"
                :i18n="i18n"
                :start="start"
                :selected="selected"/>
        </div>
        <div class="column is-narrow has-text-right">
            <pagination :loading="loading"
                :start="start"
                :length="length"
                :records="body.filtered"
                :i18n="i18n"
                :extended="body.fullRecordInfo"
                @jump-to="$emit('jump-to', $event)"
                v-if="hasEntries"/>
        </div>
    </div>
</template>

<script>

import RecordsInfo from './RecordsInfo.vue';
import Pagination from './Pagination.vue';

export default {
    name: 'BottomControls',

    components: { RecordsInfo, Pagination },

    props: {
        body: {
            type: Object,
            required: true,
        },
        start: {
            type: Number,
            required: true,
        },
        length: {
            type: Number,
            required: true,
        },
        i18n: {
            type: Function,
            required: true,
        },
        loading: {
            type: Boolean,
            required: true,
        },
        selected: {
            type: Array,
            required: true,
        },
    },

    computed: {
        hasEntries() {
            return this.body.data.length > 0;
        },
    },
};

</script>
