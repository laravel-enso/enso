<template>

    <div :class="'box collapsed-box box-' + headerClass" :id="'box' + _uid">
        <div class="box-header with-border">
            <i class="fa fa-files-o"></i>
            <h3 class="box-title">
                {{ title || labels.documents }}
            </h3>
            <div class="box-tools pull-right">
                <i v-if="documents.length > 1"
                    class="fa fa-search">
                </i>
                <input type="text"
                    class="documents-filter"
                    size=15
                    v-model="query"
                    v-if="documents.length > 1">
                <button class="btn btn-box-tool btn-sm">
                    <file-uploader
                        @upload-successful="get()"
                        :url="'/core/documents/upload/' + this.type + '/' + this.id"
                        :file-size-limit="fileSizeLimit"
                        multiple>
                        <span slot="upload-button">
                            <i class="fa fa-upload"></i>
                        </span>
                    </file-uploader>
                </button>
                <span class="badge bg-orange">
                    {{ documents.length }}
                </span>
                <button type="button"
                    class="btn btn-box-tool btn-sm"
                    @click="get()">
                    <i class="fa fa-refresh"></i>
                </button>
                <button class="btn btn-box-tool btn-sm"
                    data-widget="collapse">
                    <i class="fa fa-plus"></i>
                </button>
            </div>
        </div>
        <div class="box-body documents">
            <div class="col-md-12">
                <div class="list-group list-group-unbordered">
                    <li class="list-group-item"
                        v-for="(document, index) in filteredDocuments">
                        <span>
                            {{ index + 1 }}.
                        </span>
                        <span>
                            <a href="#"
                                v-if="document.isDownloadable"
                                @click="show(document.id)">
                                {{ document.original_name }}
                            </a>
                            <span v-if="!document.isDownloadable">{{ document.original_name }}</span>
                        </span>
                        <span class="pull-right action-buttons">
                            <a class="btn btn-xs btn-info"
                                v-if="document.isDownloadable"
                                :href="'/core/documents/download/' + document.id">
                                <i class="fa fa-cloud-download"></i>
                            </a>
                            <a class="btn btn-xs btn-danger"
                                v-if="document.isDeletable"
                                @click="idToBeDeleted = document.id; showModal = true;">
                                <i class="fa fa-trash-o"></i>
                            </a>
                        </span>
                        <span class="pull-right">
                            <i class="fa fa-male margin-right-md"
                                v-tooltip="document.owner.fullName">
                            </i>
                            <i class="fa fa-calendar margin-right-md"
                                v-tooltip="$options.filters.timeFromNow(document.created_at)">
                            </i>
                            <i class="fa fa-database margin-right-md"
                                v-tooltip="$options.filters.numberFormat(document.size) + ' Kb'">
                            </i>
                        </span>
                    </li>
                </div>
            </div>
        </div>
        <div class="overlay" v-if="loading">
            <i class="fa fa-spinner fa-spin spinner-custom" ></i>
        </div>
        <modal :show="showModal"
            @cancel-action="showModal = false"
            @commit-action="destroy()">
        </modal>
    </div>

</template>

<script>

     export default {
        props: {
            id: {
                type: Number,
                required: true
            },
            type: {
                type: String,
                required: true
            },
            headerClass: {
                type: String,
                default: 'primary'
            },
            fileSizeLimit: {
                type: Number,
                default: 8388608
            },
            title: {
                type: String,
                default: ''
            }
        },

        computed: {
            filteredDocuments() {
                if (this.query) {
                    return this.documents.filter((document) => {
                        return document.original_name.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
                    })
                }

                return this.documents;
            },
        },

        data() {
            return {
                labels: Store.labels,
                documents: [],
                idToBeDeleted: null,
                showModal: false,
                query: "",
                loading: false
            }
        },

        methods: {
            get() {
                this.loading = true;

                axios.get('/core/documents/' + this.type + '/' + this.id).then(response => {
                    this.documents = response.data;
                    this.loading = false;
                }).catch(error => {
                    this.loading = false;
                    this.reportEnsoException(error);
                });
            },
            show(id) {
                window.open('/core/documents/show/' + id, '_blank').focus();
            },
            destroy() {
                this.showModal = false;
                this.loading = true;

                axios.delete('/core/documents/destroy/' + this.idToBeDeleted).then((response) => {
                    this.idToBeDeleted = null;
                    this.get();
                }).catch(error => {
                    this.loading = false;
                    this.reportEnsoException(error);
                });
            },
        },

        mounted() {
            this.get();
        }
    }

</script>

<style>

    .box-body.documents {
        overflow-y:scroll;
        max-height: 300px
    }

    span.action-buttons {
        width: 50px;
    }

</style>