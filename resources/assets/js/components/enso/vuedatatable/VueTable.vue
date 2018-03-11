<template>

    <div v-if="initialised">
        <top-controls :template="template"
            class="has-padding-small has-padding-bottom-large"
            :i18n="i18n"
            :length="length"
            @update-length="length=$event"
            @export-data="exportData"
            @reload="getData()"
            @reset="resetPreferences"
            v-on="$listeners"
            v-model="search">
        </top-controls>
        <div class="table-responsive"
            v-responsive>
            <table class="table is-fullwidth vue-data-table"
                :class="template.style"
                id="id">
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
                    :expanded="expanded"
                    @ajax="ajax"
                    v-if="hasContent">
                    <template v-for="column in template.columns"
                        :slot="column.name"
                        v-if="column.meta.slot"
                        slot-scope="{ column, value }">
                        <slot :name="column.name"
                            :column="column"
                            :value="value">
                        </slot>
                    </template>
                </table-body>
                <table-footer v-if="template.total && hasContent"
                    :template="template"
                    :body="body"
                    :i18n="i18n">
                </table-footer>
            </table>
            <overlay v-if="loading"></overlay>
        </div>
        <div class="columns table-bottom-controls"
            v-if="hasContent">
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
        <div v-if="body && !body.count"
            class="has-text-centered no-records-found">
            {{ i18n('No records were found.') }}
        </div>
    </div>

</template>

<script>

import debounce from 'lodash/debounce';
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
        customRender: {
            type: Function,
            default: (row, column) => row[column.name],
        },
        i18n: {
            type: Function,
            default: value => value,
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
                    align: this.template.align,
                },
                columns: this.template.columns.reduce((collector, column) => {
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
        this.getData = debounce(this.getData, 100);
        this.init();
    },

    methods: {
        init() {
            axios.get(this.path).then(({ data }) => {
                this.template = data.template;
                this.start = 0;
                [this.length] = this.template.lengthMenu;
                this.setPreferences();
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

            if (localStorage.getItem(this.preferencesKey) !== null) {
                this.setUserPreferences();
            }

            this.$nextTick(() => {
                this.initialised = true;
            });
        },
        setDefaultPreferences() {
            this.template.columns.forEach(({ meta }) => {
                this.$set(meta, 'sort', null);
                this.$set(meta, 'hidden', false);
            });

            this.$set(this.template, 'sort', false);
        },
        setUserPreferences() {
            const prefs = JSON.parse(localStorage.getItem(this.preferencesKey));

            Object.keys(prefs.global).forEach((key) => {
                this.$set(this, key, prefs.global[key]);
            });

            Object.keys(prefs.template).forEach((key) => {
                this.$set(this.template, key, prefs.template[key]);
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
                    date: this.template.date,
                    actions: this.template.actions,
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
                        date: column.meta.date,
                    },
                    enum: column.enum,
                });

                return columns;
            }, []);
        },
        exportData(path) {
            axios.get(path, { params: this.exportRequest() }).then(({ data }) => {
                this.$toastr.success(data.message);
            }).catch((error) => {
                const { status, data } = error.response;

                if (status === 555) {
                    this.$toastr.error(data.message);
                    return;
                }

                this.handleError(error);
            });
        },
        exportRequest() {
            return {
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
        },
        ajax(method, path) {
            axios[method.toLowerCase()](path).then(({ data }) => {
                this.$toastr.success(data.message);
                this.getData();
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
