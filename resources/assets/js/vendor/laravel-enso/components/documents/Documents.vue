<template>

    <box :theme="theme"
        collapsible refresh search removable
        :border="!solid"
        :solid="solid"
        :open="open"
        :body-style="bodyStyle"
        @refresh="get()"
        icon="fa fa-files-o"
        :title="title || labels.documents"
        :overlay="loading"
        ref="box"
        @query-update="query = $event"
        :badge="documents.length">
        <span slot="btn-box-tool">
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
        </span>
        <div class="documents">
            <div class="col-md-12">
                <div class="list-group list-group-unbordered">
                    <li class="list-group-item"
                        v-for="(document, index) in filteredDocuments">
                        <document :document="document"
                            :index="index"
                            @delete="destroy($event)">
                        </document>
                    </li>
                </div>
            </div>
        </div>
    </box>

</template>

<script>

     export default {
        props: {
            theme: {
                type: String,
                default: 'primary'
            },
            open: {
                type: Boolean,
                default: false
            },
            solid: {
                type: Boolean,
                default: false
            },
            id: {
                type: Number,
                required: true
            },
            type: {
                type: String,
                required: true
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
                query: "",
                loading: false,
                bodyStyle: {'max-height': '370px', 'overflow-y': 'auto'}
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
            destroy(index) {
                this.documents.splice(index,1);
                this.count--;
            },
        },

        mounted() {
            this.get();
        }
    }

</script>

<style>

    span.action-buttons {
        width: 50px;
    }

</style>