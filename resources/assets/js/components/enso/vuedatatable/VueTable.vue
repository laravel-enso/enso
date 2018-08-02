<template>

    <div v-if="initialised">
        <top-controls :template="template"
            class="has-padding-small has-padding-bottom-large"
            :i18n="i18n"
            :length="length"
            :loading="loading"
            :info="body !== null && !body.fullRecordInfo"
            @update-length="length=$event"
            @export-data="exportData"
            @action="action"
            @reload="getData()"
            @reset="resetPreferences"
            @request-full-info="forceInfo = true; getData()"
            v-on="$listeners"
            v-model="search"/>
        <div class="table-responsive"
            v-responsive>
            <table class="table is-fullwidth vue-data-table"
                :class="template.style"
                id="id">
                <table-header :template="template"
                    :i18n="i18n"
                    @sort-update="getData"/>
                <table-body :template="template"
                    v-on="$listeners"
                    :body="body"
                    :start="start"
                    :i18n="i18n"
                    :expanded="expanded"
                    @ajax="ajax"
                    v-if="hasContent">
                    <template v-for="column in template.columns"
                        :slot="column.name"
                        v-if="column.meta.slot"
                        slot-scope="{ row, column }">
                        <slot :name="column.name"
                            :column="column"
                            :row="row"
                            :loading="loading">
                            {{ row[column.name] }}
                        </slot>
                    </template>
                </table-body>
                <table-footer v-if="template.total && hasContent && body.fullRecordInfo"
                    :template="template"
                    :body="body"
                    :i18n="i18n"/>
            </table>
            <overlay v-if="loading"/>
        </div>
        <div class="columns table-bottom-controls"
            v-if="hasContent">
            <div class="column">
                <records-info :body="body"
                    :i18n="i18n"
                    :start="start"/>
            </div>
            <div class="column is-narrow has-text-right">
                <pagination :loading="loading"
                    :start="start"
                    :length="length"
                    :records="body.filtered"
                    :i18n="i18n"
                    :extended="body.fullRecordInfo"
                    @jump-to="start = $event;getData()"
                    v-if="body.data.length > 0"/>
            </div>
        </div>
        <div v-if="body && !body.count"
            class="has-text-centered no-records-found">
            {{ i18n('No records were found') }}
        </div>
    </div>

</template>

<script>

import debounce from 'lodash/debounce';
import accounting from 'accounting-js';
import TopControls from './TopControls.vue';
import TableHeader from './TableHeader.vue';
import TableBody from './TableBody.vue';
import TableFooter from './TableFooter.vue';
import RecordsInfo from './RecordsInfo.vue';
import Pagination from './Pagination.vue';
import Overlay from './Overlay.vue';
import vResponsive from './responsive/vResponsive';

export default {
    name: 'VueTable',

    components: {
        TopControls, TableHeader, TableBody, TableFooter, RecordsInfo, Overlay, Pagination,
    },

    directives: {
        responsive: vResponsive,
    },

    props: {
        id: {
            type: String,
            required: true,
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
        i18n: {
            type: Function,
            default(key) {
                return Object.keys(this.$options.methods).includes('__')
                    ? this.__(key)
                    : key;
            },
        },
    },

    data() {
        return {
            loading: false,
            initialised: false,
            template: null,
            search: '',
            start: null,
            body: null,
            length: null,
            expanded: [],
            forceInfo: false,
        };
    },

    computed: {
        preferencesKey() {
            return `VueTable_${this.id}_preferences`;
        },
        preferences() {
            if (!this.initialised) {
                return null;
            }

            return {
                global: {
                    length: this.length,
                    search: this.search,
                    start: this.start,
                },
                template: {
                    sort: this.template.sort,
                    style: this.template.style,
                },
                columns: this.template.columns
                    .reduce((collector, column) => {
                        collector.push({
                            sort: column.meta.sort,
                            visible: column.meta.visible,
                        });

                        return collector;
                    }, []),
            };
        },
        hasContent() {
            return this.body && this.body.count;
        },
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
        params: {
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
        preferences: {
            handler() {
                if (this.hasContent) {
                    this.savePreferences();
                }
            },
            deep: true,
        },
    },

    created() {
        this.init();
    },

    methods: {
        init() {
            axios.get(this.path).then(({ data }) => {
                this.template = data.template;
                this.start = 0;
                [this.length] = this.template.lengthMenu;
                this.getData = debounce(this.getData, this.template.debounce);
                this.setPreferences();
                this.$nextTick(() => {
                    this.initialised = true;
                    this.$emit('initialised');
                });
                this.getData();
            }).catch((error) => {
                const { status, data } = error.response;

                if (status === 555) {
                    this.$toastr.error(data.message);
                    return;
                }

                this.handleError(error);
            });
        },
        setPreferences() {
            this.setDefaultPreferences();
            this.checkSavedPreferences();
        },
        checkSavedPreferences() {
            if (localStorage.getItem(this.preferencesKey) === null) {
                return;
            }

            const prefs = JSON.parse(localStorage.getItem(this.preferencesKey));

            if (prefs.columns.length !== this.template.columns.length) {
                localStorage.removeItem(this.preferencesKey);
                return;
            }

            this.setUserPreferences(prefs);
        },
        setDefaultPreferences() {
            this.template.columns.forEach(({ meta }) => {
                this.$set(meta, 'sort', null);
                this.$set(meta, 'hidden', false);
            });

            this.$set(this.template, 'sort', false);
        },
        setUserPreferences(prefs) {
            Object.keys(prefs.global).forEach((key) => {
                this.$set(this, key, prefs.global[key]);
            });

            Object.keys(prefs.template).forEach((key) => {
                if (this.template[key] !== undefined) {
                    this.$set(this.template, key, prefs.template[key]);
                }
            });

            prefs.columns.forEach((column, index) => {
                Object.keys(column).forEach((key) => {
                    this.$set(this.template.columns[index].meta, key, column[key]);
                });
            });
        },
        savePreferences() {
            localStorage.setItem(this.preferencesKey, JSON.stringify(this.preferences));
        },
        resetPreferences() {
            localStorage.removeItem(this.preferencesKey);
            this.search = '';
            this.init();
        },
        getData() {
            this.loading = true;
            this.expanded = [];

            axios[this.template.method.toLowerCase()](
                this.template.readPath,
                this.readRequest(),
            ).then(({ data }) => {
                this.loading = false;
                this.forceInfo = false;

                if (data.data.length === 0 && this.start > 0) {
                    this.start = 0;
                    this.getData();
                    return;
                }

                this.body = this.template.money
                    ? this.processMoney(data)
                    : data;

                this.$emit('draw');
            }).catch((error) => {
                this.handleError(error);
                this.loading = false;
            });
        },
        readRequest(method = null) {
            const params = {
                columns: this.requestColumns(),
                meta: {
                    start: this.start,
                    length: this.length,
                    sort: this.template.sort,
                    total: this.template.total,
                    enum: this.template.enum,
                    date: this.template.date,
                    actions: this.template.actions,
                    forceInfo: this.forceInfo,
                },
                search: this.search,
                appends: this.template.appends,
                filters: this.filters,
                intervals: this.intervals,
                params: this.params,
            };

            method = method || this.template.method;

            return method === 'GET'
                ? { params }
                : params;
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
                        date: column.meta.date,
                    },
                    enum: column.enum,
                });

                return columns;
            }, []);
        },
        processMoney(body) {
            this.template.columns
                .filter(column => column.money)
                .forEach((column) => {
                    let money = body.data.map(row => parseFloat(row[column.name]) || 0);
                    money = accounting.formatColumn(money, column.money);
                    body.data = body.data.map((row, index) => {
                        row[column.name] = money[index];
                        return row;
                    });

                    if (this.template.total && body.total.hasOwnProperty(column.name)) {
                        body.total[column.name] = accounting
                            .formatMoney(body.total[column.name], column.money);
                    }
                });

            return body;
        },
        exportData(path) {
            axios[this.template.method.toLowerCase()](
                path,
                this.exportRequest(),
            ).catch((error) => {
                const { status, data } = error.response;

                if (status === 555) {
                    this.$toastr.error(data.message);
                    return;
                }

                this.handleError(error);
            });
        },
        exportRequest() {
            const params = {
                name: this.template.name,
                columns: this.template.columns,
                meta: {
                    start: 0,
                    length: this.body.filtered,
                    sort: this.template.sort,
                    enum: this.template.enum,
                    date: this.template.date,
                    total: false,
                },
                search: this.search,
                appends: this.template.appends,
                filters: this.filters,
                intervals: this.intervals,
                params: this.params,
            };

            return this.template.method === 'GET'
                ? { params }
                : params;
        },
        ajax(method, path, postEvent) {
            axios[method.toLowerCase()](path).then(({ data }) => {
                this.$toastr.success(data.message);
                this.getData();
                if (postEvent) {
                    this.$emit(postEvent);
                }
            }).catch(error => this.handleError(error));
        },
        action(method, path, postEvent) {
            this.loading = true;

            axios[method.toLowerCase()](path, this.readRequest(method))
                .then(() => {
                    this.loading = false;

                    if (postEvent) {
                        this.$emit(postEvent);
                    }
                }).catch(error => this.handleError(error));
        },
        filterUpdate() {
            if (!this.initialised) {
                return;
            }

            this.start = 0;
            this.getData();
        },
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

    div.table-bottom-controls {
        margin-top: .5rem;
    }

    div.no-records-found {
        margin-top: 20px;
    }

</style>
