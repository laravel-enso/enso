<template>

    <span class="table-entries-info">
        {{ recordsInfo }}
        <span v-if="body.filtered !== body.count">
            {{ filteredInfo }}
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
        length: {
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
        recordsInfo() {
            return `${this.i18n('From')} ${this.start + 1} ${this.i18n('to')} \
            ${(this.start + this.length) <= this.body.filtered ? this.start + this.length : this.body.filtered} \
            ${this.i18n('of')} ${this.body.filtered} ${this.i18n('entries')}`;
        },
        filteredInfo() {
            return `(${this.i18n('filtered')} ${this.i18n('from')} ${this.body.count} \
            ${this.i18n('total')} ${this.i18n('records')})`;
        },
    },
};

</script>

<style>

    .table-entries-info {
        font-size: 15px;
    }

</style>
