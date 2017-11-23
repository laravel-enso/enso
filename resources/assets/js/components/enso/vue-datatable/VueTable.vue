<template>

    <div class="box"
        v-if="body">
        <h5 class="title is-5">
            <span class="icon">
                <i :class="template.icon"></i>
            </span>
            {{ i18n(template.name) }}
        </h5>
        <div class="columns table-top-controls">
            <div class="column">
                <top-controls :template="template"
                    :i18n="i18n"
                    :length="length"
                    @update-length="length=$event"
                    @export-data="exportData"
                    @reload="getData()">
                </top-controls>
            </div>
            <div class="column has-text-right"
                v-if="body.count">
                <input class="input table-search-input is-pulled-right"
                    type="search"
                    v-model="search"
                    :placeholder="i18n('Search')">
            </div>
        </div>
        <div class="table-responsive">
            <table class="table is-fullwidth vue-data-table"
                :class="template.style">
                <table-header :template="template"
                    :i18n="i18n"
                    @sort-update="getData">
                </table-header>
                <table-body :template="template"
                    v-on="$listeners"
                    :body="body"
                    :start="start"
                    :i18n="i18n"
                    :custom-render="customRender"
                    @ajax="ajax"
                    v-if="body.count">
                </table-body>
                <table-footer v-if="template.total && body.count"
                    :template="template"
                    :body="body"
                    :i18n="i18n">
                </table-footer>
            </table>
            <overlay size="medium" v-if="loading"></overlay>
        </div>
        <div class="columns table-bottom-controls"
            v-if="body.count">
            <div class="column">
                <records-info :body="body"
                    :i18n="i18n"
                    :start="start"
                    :length="length">
                </records-info>
            </div>
            <div class="column is-narrow has-text-right">
                <pagination :start="start"
                    :length="length"
                    :records="body.filtered"
                    :i18n="i18n"
                    @jump-to="start = $event;getData()">
                </pagination>
            </div>
        </div>
        <div v-if="!body.count"
            class="has-text-centered no-records-found">
            {{ i18n('No records were found.') }}
        </div>
    </div>

</template>

<script>

import toastr from 'toastr';
import { debounce } from 'lodash';
import TopControls from './TopControls.vue';
import TableHeader from './TableHeader.vue';
import TableBody from './TableBody.vue';
import TableFooter from './TableFooter.vue';
import RecordsInfo from './RecordsInfo.vue';
import Pagination from './Pagination.vue';
import Overlay from '../bulma/Overlay.vue';

export default {
    name: 'VueTable',

    components: {
        TopControls, TableHeader, TableBody, TableFooter, RecordsInfo, Overlay, Pagination,
    },

    props: {
        id: {
            type: String,
            default: null,
        },
        path: {
            type: String,
            required: true,
        },
        filters: {
            type: Object,
            default: null,
        },
        params: {
            type: Object,
            default: null,
        },
        intervals: {
            type: Object,
            default: null,
        },
        customRender: {
            type: Function,
            default: (row, column) => {
                toastr.warning(`'Custom render function is missing for column: ${column.name}'`);
                return row[column.name];
            },
        },
        i18n: {
            type: Function,
            default: value => value,
        },
    },

    computed: {
        table() {
            return this.$el.querySelector('table');
        },
    },

    data() {
        return {
            loading: false,
            template: null,
            search: null,
            start: 0,
            body: null,
            length: 0,
        };
    },

    watch: {
        search: {
            handler() {
                this.filterUpdate();
            },
        },
        filters: {
            handler() {
                this.filterUpdate();
            },
            deep: true,
        },
        intervals: {
            handler() {
                this.filterUpdate();
            },
            deep: true,
        },
        length: {
            handler() {
                this.filterUpdate();
            },
        },
    },

    created() {
        this.getData = debounce(this.getData, 500);
        this.init();
    },

    methods: {
        init() {
            axios.get(this.path).then(({ data }) => {
                this.template = data.template;
                [this.length] = this.template.lengthMenu;
                this.getData();
            }).catch((error) => {
                const { status, data } = error.response;

                if (status === 555) {
                    toastr.error(data.message);
                }

                this.handleError(error);
            });
        },
        getData() {
            this.loading = true;

            axios.get(this.template.readPath, { params: this.readRequest() }).then(({ data }) => {
                this.body = data;
                this.loading = false;
            }).catch((error) => {
                this.handleError(error);
                this.loading = false;
            });
        },
        readRequest() {
            return {
                columns: this.requestColumns(),
                meta: {
                    start: this.start,
                    length: this.length,
                    sort: this.template.sort,
                    total: this.template.total,
                    enum: this.template.enum,
                },
                search: this.search,
                appends: this.template.appends,
                filters: this.filters,
                intervals: this.intervals,
                params: this.params,
            };
        },
        requestColumns() {
            return this.template.columns.reduce((columns, column) => {
                columns.push({
                    name: column.name,
                    data: column.data,
                    meta: {
                        searchable: column.meta.searchable,
                        sortable: column.meta.sortable,
                        sort: column.meta.sort,
                        total: column.meta.total,
                    },
                    enum: column.enum,
                });

                return columns;
            }, []);
        },
        exportData(path) {
            axios.get(path, { params: this.readRequest() }).then(({ data }) => {
                toastr.success(data.message);
            }).catch(error => this.handleError(error));
        },
        ajax(method, path) {
            axios[method.toLowerCase()](path).then(({ data }) => {
                toastr.success(data.message);
                this.getData();
            }).catch(error => this.reportEnsoException(error));
        },
        filterUpdate() {
            this.start = 0;
            this.getData();
        },
    },

    mounted() {

    },
};

</script>

<style>

    .table.vue-data-table {
        margin-bottom: 0;
    }

    .table-responsive {
        position: relative;
        display: block;
        width: 100%;
        min-height: .01%;
        overflow-x: auto;
    }

    .table-responsive table {
        font-size: 15px;
    }

    .table-search-input {
        width: 300px;
    }

    div.table-bottom-controls {
        margin-top: .5rem;
    }

    div.no-records-found {
        margin-top: 20px;
    }

</style>
