<template>

    <card icon="fa fa-files-o"
        refresh
        :search="documents.length > 1"
        :title="title || __('Documents')"
        :overlay="loading"
        @refresh="get()"
        ref="card"
        :open="open && !isEmpty"
        @expand="isEmpty ? $refs.card.collapse() : null"
        @query-update="query = $event"
        :badge="count"
        :controls="1">
        <a slot="control-1" class="card-header-icon">
            <file-uploader
                @upload-successful="get()"
                :url="uploadLink"
                multiple>
            </file-uploader>
        </a>
        <div class="documents-wrapper has-padding-medium has-colored-background is-light">
            <document v-for="(doc, index) in filteredDocuments"
                :key="index"
                :doc="doc"
                @delete="deletingIndex = index">
            </document>
        </div>
        <modal :show="showModal"
            @cancel-action="deletingIndex = null"
            @commit-action="destroy()">
        </modal>
    </card>

</template>

<script>

import { mapGetters } from 'vuex';
import Card from '../bulma/Card.vue';
import Document from './Document.vue';
import FileUploader from '../fileuploader/FileUploader.vue';
import Modal from '../bulma/Modal.vue';

export default {
    name: 'Documents',

    components: {
        Card, Document, FileUploader, Modal,
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

    computed: {
        ...mapGetters('locale', ['__']),
        count() {
            return this.documents.length;
        },
        isEmpty() {
            return this.count === 0;
        },
        showModal() {
            return this.deletingIndex !== null;
        },
        uploadLink() {
            return route('core.documents.upload', [this.type, this.id], false);
        },
        filteredDocuments() {
            return this.query
                ? this.documents.filter(doc => doc.original_name.toLowerCase()
                    .indexOf(this.query.toLowerCase()) > -1)
                : this.documents;
        },
    },

    data() {
        return {
            documents: [],
            query: '',
            loading: false,
            deletingIndex: null,
        };
    },

    watch: {
        isEmpty() {
            if (this.isEmpty) {
                this.$refs.card.collapse();
            }
        },
    },

    created() {
        this.get();
    },

    methods: {
        get() {
            this.loading = true;

            axios.get(route('core.documents.index', [this.type, this.id], false)).then(({ data }) => {
                this.documents = data;
                this.loading = false;
            }).catch((error) => {
                this.loading = false;
                this.handleError(error);
            });
        },
        destroy() {
            this.loading = true;

            axios.delete(route('core.documents.destroy', [this.documents[this.deletingIndex].id], false)).then(() => {
                this.loading = false;
                this.documents.splice(this.deletingIndex, 1);
                this.deletingIndex = null;
            }).catch((error) => {
                this.loading = false;
                this.deletingIndex = null;
                this.handleError(error);
            });
        },
    },
};

</script>

<style>

    .documents-wrapper {
        max-height: 500px;
        overflow-y: auto;
    }

</style>
