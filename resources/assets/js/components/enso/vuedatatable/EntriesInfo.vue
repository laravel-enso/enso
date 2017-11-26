<template>

    <span class="table-entries-info">
        {{ `${i18n('From')} ${this.start + 1} ${i18n('to')} ${length <= body.filteredCount ? length : body.filteredCount} \
        ${i18n('of')} ${body.filteredCount} ${i18n('entries')}` }}
        <span v-if="body.filteredCount !== body.count">
            {{ `(${i18n('filtered')} ${i18n('from')} ${body.count} \
            ${i18n('total')} ${i18n('entries')})` }}
        </span>
    </span>

</template>

<script>

export default {
    name: 'EntriesInfo',

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
};

</script>

<style>

    .table-entries-info {
        font-size: 15px;
    }

</style>
