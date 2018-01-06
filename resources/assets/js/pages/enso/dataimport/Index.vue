<template>

    <div>
        <div class="box animated fadeIn"
            v-if="!summary">
            <div class="columns">
                <div class="column is-one-third">
                    <vue-select :options="importTypes"
                        v-model="importType"
                        @input="getTemplate"
                        key-map="string"
                        ref="importTypeSelect">
                    </vue-select>
                </div>
                <div class="template-controls has-text-centered has-padding-medium"
                    v-if="importType">
                    <file-uploader class="animated fadeIn"
                        v-if="!template.id"
                        :url="uploadTemplateLink"
                        @upload-start="loadingTemplate=true"
                        @upload-successful="template=$event;loadingTemplate=false"
                        @upload-error="loadingTemplate=false">
                        <a slot="upload-button"
                            class="button is-info">
                            <span>{{ __('Upload Template') }}</span>
                            <span class="icon is-small">
                                <i class="fa fa-upload"></i>
                            </span>
                        </a>
                    </file-uploader>
                    <a class="button is-info animated fadeIn has-margin-right-small"
                        v-if="template.id"
                        v-tooltip="template.original_name"
                        :href="downloadTemplateLink">
                        <span>{{ __('Download Template') }}</span>
                        <span class="icon is-small">
                            <i class="fa fa-download"></i>
                        </span>
                    </a>
                    <a class="button is-danger animated fadeIn"
                        v-if="template.id"
                        @click="showModal = true">
                        <span>{{ __('Delete Template') }}</span>
                        <span class="icon is-small">
                            <i class="fa fa-trash"></i>
                        </span>
                    </a>
                </div>
                <div class="column animated fadeIn"
                    v-if="importType">
                    <file-uploader class="is-pulled-right"
                        @upload-start="importing=true"
                        @upload-successful="summary=$event;importing=false"
                        @upload-error="importing=false;importType=null"
                        :url="uploadImportLink">
                        <a slot="upload-button"
                            class="button is-success">
                            <span>{{ __('Start Import') }}</span>
                            <span class="icon is-small">
                                <i class="fa fa-upload"></i>
                            </span>
                        </a>
                    </file-uploader>
                    <div class="is-clearfix"></div>
                </div>
            </div>
        </div>
        <vue-table class="animated fadeIn"
            :path="path"
            :i18n="__"
            id="imports-table"
            :custom-render="customRender"
            @get-summary="getSummary"
            v-if="!summary">
        </vue-table>
        <div class="columns"
            v-if="summary">
            <div class="column is-half-tablet is-one-third-widescreen is-one-quarter-fullhd animated bounceInLeft">
                <nav class="box panel is-paddingless">
                    <p class="panel-heading">
                        {{ __('Import Summary') }}
                    </p>
                    <a class="panel-block">
                        <span class="panel-icon has-text-info">
                            <i class="fa fa-file-excel-o"></i>
                        </span>
                        {{ __('File') }}:&emsp;<span class="has-text-info">{{ summary.fileName }}</span>
                    </a>
                    <a class="panel-block">
                        <span class="panel-icon has-text-info">
                            <i class="fa fa-calendar-check-o"></i>
                        </span>
                        {{ __('Created at') }}:&emsp;<span class="has-text-info">{{ summary.date }}, {{ summary.time }}</span>
                    </a>
                    <a class="panel-block">
                        <span class="panel-icon has-text-success">
                            <i class="fa fa-check"></i>
                        </span>
                        {{ __('Imported Entries') }}:&emsp;<span class="has-text-success">{{ summary.successful }}</span>
                    </a>
                    <a class="panel-block">
                        <span class="panel-icon has-text-danger">
                            <i class="fa fa-times"></i>
                        </span>
                        {{ __('Errors') }}:&emsp;<span class="has-text-danger">{{ summary.errors }}</span>
                    </a>
                    <div class="panel-block">
                        <button class="button is-primary is-outlined is-fullwidth"
                            @click="summary=null">
                            {{ __("Back") }}
                        </button>
                    </div>
                </nav>
            </div>
            <div class="column is-half-tablet is-two-thirds-widescreen is-three-quarters-fullhd animated bounceInRight">
                <card icon="fa fa-book"
                    :title="__('Error List')"
                    @remove="summary=null"
                    v-if="summary.errors > 0">
                    <tabs class="has-padding-medium"
                        title="__('Summary')"
                        align="right"
                        icon="fa fa-file-excel-o"
                        :tabs="getSheetTabs()">
                        <span v-for="sheet in summary.issues"
                            :slot="sheet.name"
                            :key="sheet.name">
                            <tabs :tabs="getCategoryTabs(sheet)">
                                <span v-for="category in sheet.categories"
                                    :slot="category.name"
                                    :key="category.name">
                                    <paginate :list="category.issues">
                                        <template slot-scope="props">
                                            <h5 class="title is-5 has-text-centered">{{ __('Error List') }}</h5>
                                            <ul class="errors has-margin-left-large">
                                                <li v-for="(issue, index) in props.list"
                                                    :key="index">
                                                    <span v-if="issue.column">
                                                        {{ __("Column") }}: <b class="has-text-info">{{ issue.column }}</b>
                                                    </span>
                                                    <span v-if="issue.rowNumber">
                                                        {{ __("Line") }}: <b class="has-text-info">{{ issue.rowNumber }}</b>
                                                    </span>
                                                    <span v-if="issue.value">
                                                        {{ __("Value") }}: <b class="has-text-danger">{{ issue.value }}</b>
                                                    </span>
                                                </li>
                                            </ul>
                                        </template>
                                    </paginate>
                                </span>
                            </tabs>
                        </span>
                    </tabs>
                </card>
            </div>
        </div>
        <modal :show="showModal"
            @cancel-action="showModal = false"
            @commit-action="deleteTemplate(template.id)">
        </modal>
    </div>

</template>

<script>

import { mapGetters } from 'vuex';
import { VTooltip } from 'v-tooltip';
import VueSelect from '../../../components/enso/select/VueSelect.vue';
import VueTable from '../../../components/enso/vuedatatable/VueTable.vue';
import FileUploader from '../../../components/enso/fileuploader/FileUploader.vue';
import Modal from '../../../components/enso/bulma/Modal.vue';
import Card from '../../../components/enso/bulma/Card.vue';
import Overlay from '../../../components/enso/bulma/Overlay.vue';
import Paginate from '../../../components/enso/bulma/Paginate.vue';
import Tabs from '../../../components/enso/bulma/Tabs.vue';

export default {
    components: {
        VueSelect, VueTable, FileUploader, Card, Modal, Overlay, Tabs, Paginate,
    },

    directives: { VTooltip },

    computed: {
        ...mapGetters('locale', ['__']),
        uploadTemplateLink() {
            return route('import.uploadTemplate', this.importType, false);
        },
        downloadTemplateLink() {
            return route('import.downloadTemplate', this.template.id, false);
        },
        uploadImportLink() {
            return route('import.run', this.importType, false);
        },
    },

    data() {
        return {
            path: route('import.initTable', [], false),
            importType: null,
            summary: null,
            template: {},
            showModal: false,
            loadingTemplate: false,
            importing: false,
            importTypes: {},
        };
    },

    created() {
        axios.get(route('import.index', [], false)).then((response) => {
            this.importTypes = response.data.importTypes;
        }).catch(error => this.handleError(error));
    },

    methods: {
        getTemplate() {
            if (!this.importType) {
                return;
            }

            this.loadingTemplate = true;

            axios.get(route('import.getTemplate', this.importType, false)).then((response) => {
                this.template = response.data;
                this.loadingTemplate = false;
            }).catch((error) => {
                this.loadingTemplate = false;
                this.handleError(error);
            });
        },
        deleteTemplate(id) {
            this.loadingTemplate = true;
            axios.delete(route('import.deleteTemplate', id, false)).then((response) => {
                this.template = {};
                this.showModal = false;
                toastr.success(response.data.message);
                this.loadingTemplate = false;
            }).catch((error) => {
                this.showModal = false;
                this.loadingTemplate = false;
                this.handleError(error);
            });
        },
        getSummary(row) {
            this.loading = true;

            axios.get(route('import.getSummary', row.dtRowId, false)).then((response) => {
                this.loading = false;

                if (response.data.errors === 0) {
                    toastr.info('The import has no errors');
                    return;
                }

                this.summary = response.data;
            }).catch((error) => {
                this.loading = false;
                this.handleError(error);
            });
        },
        getSheetTabs() {
            return this.summary.issues.reduce((tabs, sheet) => {
                tabs.push({ label: sheet.name, badge: sheet.categories.length });

                return tabs;
            }, []);
        },
        getCategoryTabs(sheet) {
            return sheet.categories.reduce((tabs, category) => {
                tabs.push({ label: category.name, badge: category.issues.length });

                return tabs;
            }, []);
        },
        customRender(row, column) {
            switch (column.name) {
            case 'successful':
                return `<b class="has-text-success">${row[column.name]}</b>`;
            case 'errors':
                return `<b class="has-text-danger">${row[column.name]}</b>`;
            default:
                toastr.warning(`render for column ${column.name} is not defined.`);
                return row[column.name];
            }
        },
    },
};

</script>

<style>

    div.template-controls {
        display: flex;
        width: 396px;
    }

    ul.errors > li{
        border-bottom: 1px dotted gray;
        padding: 3px;
    }

</style>
