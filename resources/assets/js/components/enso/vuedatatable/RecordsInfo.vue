<template>

    <div class="records-info has-text-centered-touch">
        {{ chunkInfo }}
        <span v-if="body.filters">
            {{ fromInfo }}
        </span>
        <span v-if="hasSelected">
            {{ selectedInfo }}
        </span>
    </div>

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
        selected: {
            type: Array,
            required: true,
        },
    },

    computed: {
        hasRecords() {
            return this.body.data.length > 0;
        },
        hasSelected() {
            return this.selected.length > 0;
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
        selectedInfo() {
            return this.hasSelected
                ? `(${this.selected.length} ${this.i18n('selected')})`
                : ``;
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

<style lang="scss" scoped>

    .records-info {
        font-size: 0.9em;
        padding: 1em;
    }

</style>
