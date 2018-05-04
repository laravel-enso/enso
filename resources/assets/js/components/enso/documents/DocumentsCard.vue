<template>

    <card :icon="icon"
        refresh
        scrollable
        :search="count > 1"
        :title="title || __('Documents')"
        :overlay="$refs.documents && $refs.documents.loading"
        @refresh="$refs.documents.get()"
        ref="card"
        :collapsed="!open || isEmpty"
        @expand="isEmpty
            ? $refs.card.collapse()
            : null"
        @query-update="query = $event"
        :badge="count"
        :controls="1">
        <card-control slot="control-1">
            <file-uploader
                @upload-successful="$refs.documents.get();"
                :url="uploadLink"
                multiple/>
        </card-control>
        <div class="wrapper has-padding-medium">
            <documents :id="id"
                :type="type"
                :query="query"
                @update="count = $refs.documents.count; $refs.card.resize()"
                ref="documents"/>
        </div>
    </card>

</template>

<script>

import fontawesome from '@fortawesome/fontawesome';
import { faCopy } from '@fortawesome/fontawesome-free-solid/shakable.es';
import Card from '../bulma/Card.vue';
import CardControl from '../bulma/CardControl.vue';
import Documents from './Documents.vue';
import FileUploader from '../fileuploader/FileUploader.vue';

fontawesome.library.add(faCopy);

export default {
    name: 'DocumentsCard',

    components: {
        Card, CardControl, Documents, FileUploader,
    },

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
    },

    data() {
        return {
            query: '',
            count: 0,
        };
    },

    computed: {
        isEmpty() {
            return this.count === 0;
        },
        uploadLink() {
            return route('core.documents.store', [this.type, this.id]);
        },
        icon() {
            return faCopy;
        },
    },

    watch: {
        isEmpty() {
            if (this.isEmpty) {
                this.$refs.card.collapse();
            }
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
