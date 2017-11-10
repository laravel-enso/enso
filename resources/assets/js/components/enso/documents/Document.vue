<template>

    <span>
        <span>
            <a href="#"
                v-if="document.isDownloadable"
                @click="show(document.id)">
                <span>
                    {{ index + 1 }}.
                </span>
                {{ document.original_name }}
            </a>
            <span v-if="!document.isDownloadable">
                {{ document.original_name }}
            </span>
        </span>
        <span class="is-pulled-right">
            <a class="button is-small is-info"
                v-if="document.isDownloadable"
                :href="getDownloadLink(document)">
                <span class="icon is-small">
                    <i class="fa fa-cloud-download"></i>
                </span>
            </a>
            <a class="button is-small is-danger"
                v-if="document.isDeletable"
                @click="$emit('delete')">
                <span class="icon is-small">
                    <i class="fa fa-trash-o"></i>
                </span>
            </a>
        </span>
        <span class="is-pulled-right has-margin-right-large">
            <span class="icon is-small"
                v-tooltip="document.owner.fullName">
                <i class="fa fa-male">
                </i>
            </span>
            <span class="icon is-small"
                v-tooltip="$options.filters.timeFromNow(document.created_at)">
                <i class="fa fa-calendar">
                </i>
            </span>
            <span class="icon is-small"
                v-tooltip="$options.filters.numberFormat(document.size) + ' Kb'">
                <i class="fa fa-database">
                </i>
            </span>
        </span>
    </span>

</template>

<script>

import Modal from '../bulma/Modal.vue';

export default {
    name: 'Document',

    components: { Modal },

    props: {
        document: {
            type: Object,
            required: true,
        },
        index: {
            type: Number,
            required: true,
        },
    },

    methods: {
        show(id) {
            window.open(route('core.documents.show', id, false), '_blank').focus();
        },
        getDownloadLink(doc) {
            return route('core.documents.download', doc.id, false);
        },
    },
};

</script>
