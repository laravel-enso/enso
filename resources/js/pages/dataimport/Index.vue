<template>

    <div>
        <div class="columns">
            <div class="column is-3-desktop is-8-tablet is-12-mobile">
                <vue-select v-model="importType"
                    :options="importTypes"
                    placeholder="Import Type"
                    @input="getTemplate"/>
            </div>
            <div class="column is-6 is-hidden-touch has-text-centered"
                v-if="importType">
                <file-uploader class="animated fadeIn"
                    :url="templateLink"
                    :params="{ type: importType }"
                    file-key="template"
                    @upload-start="loadingTemplate=true"
                    @upload-successful="
                        template = $event;
                        loadingTemplate = false
                    "
                    @upload-error="loadingTemplate = false"
                    v-if="!template">
                    <a slot="upload-button"
                        class="button is-info"
                        slot-scope="{ openFileBrowser }"
                        @click="openFileBrowser">
                        <span>{{ __('Upload Template') }}</span>
                        <span class="icon is-small">
                            <fa icon="upload"/>
                        </span>
                    </a>
                </file-uploader>
                <a class="button is-info animated fadeIn has-margin-right-small"
                    v-if="template"
                    v-tooltip="template.original_name"
                    :href="downloadLink">
                    <span>{{ __('Download Template') }}</span>
                    <span class="icon is-small">
                        <fa icon="download"/>
                    </span>
                </a>
                <a class="button is-danger animated fadeIn"
                    @click="modal = true"
                    v-if="template"
                    :disabled="!canAccess('import.deleteTemplate')">
                    <span>{{ __('Delete Template') }}</span>
                    <span class="icon is-small">
                        <fa icon="trash-alt"/>
                    </span>
                </a>
            </div>
            <div class="column has-text-centered-touch has-text-right-desktop"
                v-if="importType">
                <import-uploader :path="importLink"
                    :params="{ type: importType }"
                    @upload-successful="$refs.imports.fetch()"/>
            </div>
        </div>
        <vue-table class="box is-paddingless raises-on-hover is-rounded animated fadeIn"
            :path="path"
            id="imports"
            @download-rejected="downloadRejected"
            ref="imports">
            <b slot="entries"
                slot-scope="{ row }"
                class="has-text-info">
                {{ row.entries || '-' }}
            </b>
            <b slot="successful" slot-scope="{ row }"
                class="has-text-success">
                {{ row.successful === null ? '-' : row.successful }}
            </b>
            <b slot="failed"
                slot-scope="{ row }"
                class="has-text-danger">
                {{ row.failed === null ? '-' : row.failed }}
            </b>
            <span slot="computedStatus"
                slot-scope="{ row }"
                :class="[
                    'tag is-table-tag',
                    {'is-info': row.status === 10},
                    {'is-warning': row.status === 20},
                    {'is-primary': row.status === 23},
                    {'is-danger': row.status === 26},
                    {'is-success': row.status === 30}
                ]">
                {{ row.computedStatus }}
            </span>
        </vue-table>
        <modal :show="modal"
            @close="modal = false"
            :i18n="__"
            @commit="deleteTemplate(template.id); modal = false"/>
    </div>

</template>

<script>

import { VTooltip } from 'v-tooltip';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUpload, faDownload, faTrashAlt, faFileExcel } from '@fortawesome/free-solid-svg-icons';
import VueSelect from '../../components/enso/select/VueSelect.vue';
import VueTable from '../../components/enso/vuedatatable/VueTable.vue';
import FileUploader from '../../components/enso/filemanager/FileUploader.vue';
import ImportUploader from '../../components/enso/dataimport/ImportUploader.vue';
import Modal from './Modal.vue';
import Card from '../../components/enso/bulma/Card.vue';

library.add(faUpload, faDownload, faTrashAlt, faFileExcel);

export default {
    components: {
        VueSelect, VueTable, FileUploader, ImportUploader, Card, Modal,
    },

    directives: { tooltip: VTooltip },

    data() {
        return {
            path: route('import.initTable'),
            importType: null,
            summary: {},
            template: null,
            modal: false,
            loadingTemplate: false,
            importTypes: [],
        };
    },

    computed: {
        templateLink() {
            return this.importType
                && route('import.uploadTemplate');
        },
        downloadLink() {
            return this.template
                && route('import.downloadTemplate', this.template.id);
        },
        importLink() {
            return this.importType
                && route('import.store');
        },
        hasErrors() {
            return this.summary
                && this.summary.errors
                && Object.keys(this.summary.errors).length;
        },
    },

    created() {
        axios.get(route('import.index'))
            .then(({ data }) => {
                this.importTypes = data.importTypes;
            }).catch(error => this.handleError(error));
    },

    methods: {
        getTemplate() {
            if (!this.importType) {
                return;
            }

            this.loadingTemplate = true;

            axios.get(route('import.template', this.importType))
                .then(({ data }) => {
                    this.template = data;
                    this.loadingTemplate = false;
                }).catch((error) => {
                    this.loadingTemplate = false;
                    this.handleError(error);
                });
        },
        deleteTemplate(id) {
            this.loadingTemplate = true;
            axios.delete(route('import.deleteTemplate', id))
                .then(({ data }) => {
                    this.template = null;
                    this.modal = false;
                    this.$toastr.success(data.message);
                    this.loadingTemplate = false;
                }).catch((error) => {
                    this.modal = false;
                    this.loadingTemplate = false;
                    this.handleError(error);
                });
        },
        downloadRejected({ rejectedId }) {
            if (!rejectedId) {
                this.$toastr.info(this.__('No rejected summary available'));
                return;
            }

            window.location.href = route('import.downloadRejected', rejectedId);
        },
    },
};

</script>
