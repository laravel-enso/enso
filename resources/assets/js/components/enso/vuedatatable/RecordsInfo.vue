<template>

    <span class="table-entries-info">
        {{ chunkInfo }}
        <span v-if="body.filters">
            {{ fromInfo }}
        </span>
    </span>

</template>

<script>

export default {
    name: 'RecordsInfo',

    props: {
        start: {
            type: Number,
            required: true,
        },
        body: {
            type: Object,
            required: true,
        },
        i18n: {
            type: Function,
            required: true,
        },
    },

    computed: {
        hasRecords() {
            return this.body.data.length > 0;
        },
        startInfo() {
            return this.hasRecords
                ? this.start + 1
                : 0;
        },
        filteredInfo() {
            return this.body.filters
                ? `${this.i18n('of')} ${this.body.fullRecordInfo ? this.body.filtered : '...'} \
                 ${this.i18n('entries')}`
                : `${this.i18n('of')} ${this.body.count} ${this.i18n('entries')}`;
        },
        chunkInfo() {
            return this.hasRecords
                ? `${this.i18n('From')} ${this.startInfo} ${this.i18n('to')} \
                ${this.start + this.body.data.length} \
                ${this.filteredInfo}`
                : this.i18n('No records were found');
        },
        fromInfo() {
            return `(${this.i18n('filtered from')} ${this.body.count} ${this.i18n('total records')})`;
        },
    },
};

</script>

<style>

    .table-entries-info {
        font-size: 15px;
    }

</style>
