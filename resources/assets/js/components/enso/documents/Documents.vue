<template>

    <card icon="fa fa-files-o"
        refresh search
        :title="title || __('Documents')"
        :overlay="loading"
        @refresh="get()"
        :open="open"
        @query-update="query = $event"
        :badge="documents.length"
        :controls="1">
        <a slot="control-1" class="card-header-icon">
            <file-uploader
                @upload-successful="get()"
                :url="uploadLink"
                multiple>
            </file-uploader>
        </a>
        <div class="documents-wrapper has-padding-medium">
            <ul>
                <li class="has-margin-bottom-medium list-document"
                    v-for="(doc, index) in filteredDocuments">
                    <document :document="doc"
                        :index="index"
                        @delete="deletingIndex = index">
                    </document>
                </li>
            </ul>
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
        showModal() {
            return this.deletingIndex !== null;
        },
        uploadLink() {
            return route('core.documents.upload', [this.type, this.id], false);
        },
        filteredDocuments() {
            if (this.query) {
                return this.documents.filter(document => document.original_name
                    .toLowerCase()
                    .indexOf(this.query.toLowerCase()) > -1);
            }

            return this.documents;
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
            this.showModal = false;
            this.loading = true;

            axios.delete(route('core.documents.destroy', this.documents[this.deletingIndex], false)).then(() => {
                this.loading = false;
                this.documents.splice(this.deletingIndex, 1);
                this.count--;
                this.deletingIndex = null;
            }).catch((error) => {
                this.loading = false;
                this.deletingIndex = null;
                this.handleError(error);
            });
        },
    },

    mounted() {
        this.get();
    },
};

</script>

<style>

    .documents-wrapper {
        max-height: 370px;
        overflow-y: auto;
    }

    span.action-buttons {
        width: 50px;
    }

    li.list-document {
        border-bottom: 1px solid #eee;
    }

</style>
