<template>

    <box :theme="theme"
        collapsible refresh removable
        :solid="solid"
        :open="true"
        @refresh="getData()"
        icon="fa fa-table"
        :title="tableName"
        :overlay="loading">
        <span slot="btn-box-tool">
            <button class="btn btn-box-tool btn-sm"
                @click="clearState()">
                reset
            </button>
            <button class="btn btn-box-tool btn-sm"
                @click="toggleDisplayClass()">
                <i class="fa fa-th-list" v-if="classes.display"></i>
                <i class="fa fa-bars" v-else></i>
            </button>
            <button class="btn btn-box-tool btn-sm"
                @click="toggleCompactClass()">
                <i v-if="classes.compact" class="fa fa-th-large"></i>
                <i v-else class="fa fa-th" ></i>
            </button>
        </span>
        <div class="table-responsive">
            <table
                :id="tableId"
                class="table display"
                :class="tableClass"
                width="100%">
                <thead>
                    <tr>
                        <th v-for="label in header"
                            :class="'text-' + headerAlign">
                            {{ label }}
                        </th>
                    </tr>
                </thead>
                <tbody :class="'text-' + bodyAlign"></tbody>
                <tfoot v-if="hasTotals">
                <tr>
                    <td v-for="i in header.length" class="text-center">
                        <span v-if="i == 2"
                            class="totals">
                            {{ labels.totals }}
                        </span>
                    </td>
                </tr>
                </tfoot>
            </table>
        </div>
        <modal :show="showModal"
            @cancel-action="showModal=false;deleteRoute = null"
            @commit-action="deleteModel()">
        </modal>
    </box>

</template>

<script>

    export default {
        props: {
            source: {
                type: String,
                required: true
            },
            id: {
                type: String,
                default: null
            },
            theme: {
                type: String,
                default: 'primary'
            },
            solid: {
                type: Boolean,
                default: false,
            },
            customRender: {
                type: Function,
                default() {
                    return (data) => {
                        toastr.warning('Custom render function is missing');

                        return data;
                    }
                }
            },
            extraFilters: {
                type: Object,
                default() {
                    return {}
                }
            },
            customParams: {
                type: Object,
                default() {
                    return {}
                }
            },
            intervalFilters: {
                type: Object,
                default() {
                    return {}
                }
            }
        },

        computed: {
            hasTotals() {
                return Object.keys(this.totals).length > 0;
            },
            tableId() {
                return this.id || 'table-' + this._uid;
            },
            settingsKey() {
                return 'DataTables_' + this.tableId + '_' + this.source +'_settings';
            }
        },

        data (self = this) {
            return {
                labels: Store.labels,
                tableName: null,
                showModal: false,
                loading: false,
                hasEditor: false,
                dtHandle: null,
                dtEditorHandle: null,
                header: {},
                totals: {},
                actionButtons: {},
                headerAlign: null,
                bodyAlign: null,
                tableClass: null,
                deleteRoute: null,
                editedCell: {},
                customButtons: false,
                classes: {
                    compact: false,
                    display: false,
                },
                firstColumn: {
                    render(data, type, row, meta) {
                        return meta.settings._iDisplayStart + meta.row + 1;
                    },
                    responsivePriority: 1,
                    searchable: false,
                    orderable: false,
                },
                lastColumn: {
                    data: 'DT_RowId',
                    render(data, type, row, meta) {
                        return self.getActionButtons(data);
                    },
                    responsivePriority: 1,
                    searchable: false,
                    orderable: false,
                },
                tableOptions: {
                    dom: 'Bfrtip',
                    ajax: {
                        url: this.source + '/getTableData',
                        type: 'GET',
                        data: {
                            totals() { return JSON.stringify(self.totals); },
                            extraFilters() { return JSON.stringify(self.extraFilters); },
                            intervalFilters() { return JSON.stringify(self.intervalFilters); },
                            customParams() { return JSON.stringify(self.customParams); }
                        }
                    },
                    buttons: [
                        { extend: 'pageLength' },
                        { extend: 'colvis', text: '<i class="fa fa-eye"></i>'},
                        { extend: 'copy', text:'<i class="fa fa-clipboard"></i>'},
                        {
                            className: 'excel',
                            text: '<i class="fa fa-file-excel-o"></i>',
                            action() {
                                self.exportExcel();
                            }
                        }
                    ],
                    drawCallback() {
                        self.toggleClasses();

                        for (let index in self.totals) {
                            self.drawColumnTotal(this.api(), index, self.dtHandle.context[0].json.totals[index]);
                        }

                        $('#' + self.tableId).on('draw.dt', function () {
                            self.addPostDrawListeners();
                        });
                    },
                },
                editorOptions: {
                    ajax: {
                        url: this.source + '/setTableData',
                        headers: { 'X-CSRF-TOKEN': Laravel.csrfToken },
                    },
                    table: this.id || '#table-' + this._uid,
                    fields: []
                }
            }
        },

        watch: {
            'extraFilters': {
                handler() {
                    this.getData.call(this);
                },
                deep: true
            },
            'intervalFilters': {
                handler() {
                    this.getData.call(this);
                },
                deep: true
            },
            'customParams': {
                handler() {
                    this.getData.call(this);
                },
                deep: true
            }
        },

        created() {
            this.getData = _.debounce(this.getData, 500);
        },

        methods: {
            initTable() {
                axios.get(this.source + '/initTable').then(response => {
                    this.processInitData(response.data);
                }).catch(error => {
                    this.reportEnsoException(error);
                }).then(() => {
                    this.mountDataTable();
                });
            },
            processInitData(data) {
                this.getSettings();
                this.setStyle(data);
                this.tableOptions.language = data.language || null;
                this.tableName = data.tableName;
                this.header = data.header;
                this.tableOptions.columns = data.columns;
                this.computeExtraColumns(data);
                this.totals = data.totals || {};
                this.computeRender(data);
                this.computeEditor(data);
                this.customButtons = data.customButtons;
            },
            getSettings() {
                let settings = Store.user.preferences.global.dtStateSave && localStorage.hasOwnProperty(this.settingsKey)
                    ? JSON.parse(localStorage.getItem(this.settingsKey))
                    : null;
                this.classes = settings ? settings : this.classes;
            },
            setStyle(data) {
                this.tableClass = data.tableClass || null;
                this.headerAlign = data.headerAlign;
                this.bodyAlign = data.bodyAlign;
                this.tableOptions.dom = data.dom || this.tableOptions.dom;
            },
            computeExtraColumns(data) {
                if (data.actionButtons) {
                    this.tableOptions.columns.push(this.lastColumn);
                    this.header.push(data.actionButtons.label);
                    this.actionButtons = data.actionButtons;
                }

                if (data.crtNo) {
                    this.tableOptions.columns.unshift(this.firstColumn);
                    this.header.unshift(data.crtNo);
                }
            },
            computeRender(data) {
                this.computeBoolean(data);
                this.computeCustomRender(data);
            },
            computeBoolean(data) {
                if (!data.boolean) {
                    return false;
                }

                let self = this;

                data.boolean.forEach(index => {
                    let render = (data, type, row, meta) => {
                        return data ? '<span class="label bg-green"><i class="fa fa-check"></span>'
                            : '<span class="label bg-red"><i class="fa fa-times"></span>';
                    };

                    self.$set(self.tableOptions.columns[index], 'render', render);
                });
            },
            computeCustomRender(data) {
                if (!data.render) {
                    return false;
                }

                let self = this;

                data.render.forEach(index => {
                    let render = (data, type, row, meta) => {
                        return self.customRender(
                            self.tableOptions.columns[index].data, data, type, row, meta
                        );
                    };

                    self.$set(self.tableOptions.columns[index], 'render', render);
                });
            },
            computeEditor(data) {
                let self = this;

                this.hasEditor = data.editable && data.editable.length > 0;
                if (!this.hasEditor) {
                    return false;
                }

                data.editable.forEach(column => {
                    self.editorOptions.fields.push(column);
                });
            },
            mountDataTable() {
                if (this.hasEditor) {
                    this.initEditor();
                };

                this.dtHandle = $('#' + this.tableId).DataTable(this.tableOptions);
                this.setCustomButtons();
                this.addProcessingListener();
            },
            setCustomButtons() {
                if (!this.customButtons) {
                    this.dtHandle.buttons(['.excel']).disable();
                }
            },
            addProcessingListener() {
                let self = this;

                this.dtHandle.on('processing.dt', (e, settings, processing) => {
                    self.updateLoadingState(processing);
                });
            },
            addPostDrawListeners() {
                let self = this;

                $('table a.delete-model').off('click').on('click', function(event) {
                    self.deleteRoute = $(event.currentTarget).data('route');
                    self.showModal = true;
                });

                if(self.actionButtons.custom) {
                    self.actionButtons.custom.forEach(button => {
                        $('table a.' + button.event.toLowerCase()).off('click').on('click', function() {
                            self.$emit($(this).data('event'), $(this).data('id'));
                        });
                    });
                }
            },
            initEditor() {
                this.dtEditorHandle = new $.fn.dataTable.Editor(this.editorOptions);
                this.addClickListener();
                this.addSelectOnFocusListener();
                this.addBlurListener();
                this.addPreSubmitListener();
                this.addPostSubmitListener();
            },
            addClickListener() {
                let self = this;

                $('#' + this.tableId).on('click', 'tbody tr td.editable', function() {
                    self.editedCell.value = self.dtHandle.cell(this).data();
                    let index = self.dtHandle.cell(this).index().column;
                    self.editedCell.id = this.parentNode.id;
                    self.editedCell.column = self.tableOptions.columns[index].data;
                    self.dtEditorHandle.inline(this);
                });
            },
            addSelectOnFocusListener () {
                let self = this;

                $('input', this.dtEditorHandle.node()).on('focus', function() {
                    $(this).val(self.editedCell.value);
                    this.select();
                });
            },
            addBlurListener() {
                let self = this;

                $('input', this.dtEditorHandle.node()).on('blur', function() {
                    $('div.DTE_Field_InputControl').removeClass('has-error');
                    self.editedCell = {};
                });
            },
            addPreSubmitListener() {
                let self = this;

                this.dtEditorHandle.on('preSubmit', function(event, payload, action) {
                    for (let table in payload.data[self.editedCell.id]) {
                        for (let property in payload.data[self.editedCell.id][table]) {
                            if (property !== self.editedCell.column) {
                                delete payload.data[self.editedCell.id][table][property];
                            }
                        }
                    }
                });
            },
            addPostSubmitListener() {
                this.dtEditorHandle.on('postSubmit', function(event, response) {
                    if (!response) {
                        toastr.error("Something went wrong");
                        throw 500;
                    }

                    if (response.level) {
                        $('div.DTE_Field_InputControl').addClass('has-error');
                        return toastr[response.level](response.message);
                    }

                    $('div.DTE_Field_InputControl').removeClass('has-error');
                    toastr.success(response.message);
                });
            },
            updateLoadingState(processing) {
                return (this.loading = processing) ? NProgress.start() : NProgress.done();
            },
            drawColumnTotal(api, column, total) {
                $(api.table().column(column).footer()).html('<b>' +
                    this.$options.filters.numberFormat(parseFloat(total).toFixed(2)) + '</b>');
            },
            getActionButtons(data) {
                return '<span style="display: inline-flex">' +
                    this.getCustomActionButtons(data) +
                    this.getStandardActionButtons(data) +
                    '</span>';
            },
            getCustomActionButtons(data) {
                let buttons = '';

                this.actionButtons.custom.forEach(action => {
                    buttons += '<a class="margin-left-xs ' + action.event.toLowerCase() + '"data-id="' +
                        data + '" data-event="' + action.event + '"><i class="btn btn-xs ' + action.class + '"></i></a>';
                });

                return buttons;
            },
            getStandardActionButtons(data) {
                return ''
                + (this.actionButtons.standard.show ? '<a class="btn btn-xs btn-success margin-left-xs" href="' + this.source + '/' + data + '"><i class="fa fa-eye"></i></a>' : '')
                + (this.actionButtons.standard.edit ? '<a class="btn btn-xs btn-warning margin-left-xs" href="' + this.source + '/' + data + '/edit"><i class="fa fa-pencil-square-o"></i></a>' : '')
                + (this.actionButtons.standard.download ? '<a class="btn btn-xs btn-success margin-left-xs" href="' + this.source + '/' + 'download/' + data + '"><i class="fa fa-cloud-download"></i></a>' : '')
                + (this.actionButtons.standard.delete ? '<a class="btn btn-xs btn-danger margin-left-xs delete-model" data-route="' + this.source + '/' + data + '"><i class="fa fa-trash-o"><i class=""></i></a>' : '');
            },
            getData() {
                if (!this.dtHandle) {
                    return this.initTable();
                }

                let pageNumber = this.dtHandle.page.info().page;
                this.dtHandle.page(pageNumber).draw('page');
            },
            deleteModel() {
                this.showModal = false;

                axios.delete(this.deleteRoute).then(response => {
                    this.dtHandle.ajax.reload();
                    toastr.success(response.data.message);
                }).catch(error => {
                    this.reportEnsoException(error);
                });
            },
            toggleClasses() {
                if (this.classes.compact) {
                    $('#' + this.tableId).toggleClass('compact');
                }

                if (this.classes.display) {
                    $('#' + this.tableId).toggleClass('display');
                }
            },
            toggleCompactClass() {
                this.classes.compact = !this.classes.compact;
                $('#' + this.tableId).toggleClass('compact');
                if (Store.user.preferences.global.dtStateSave) {
                    localStorage.setItem(this.settingsKey, JSON.stringify(this.classes));
                }
            },
            toggleDisplayClass() {
                this.classes.display = !this.classes.display;
                $('#' + this.tableId).toggleClass('display');
                if (Store.user.preferences.global.dtStateSave) {
                    localStorage.setItem(this.settingsKey, JSON.stringify(this.classes));
                }
            },
            clearState() {
                if (localStorage.hasOwnProperty(this.settingsKey)) {
                    localStorage.removeItem(this.settingsKey)
                }

                this.dtHandle.state.clear();
                window.location.reload();
            },
            exportExcel() {
                axios.get(this.source + '/exportExcel' , {params: this.getExportParams()}).then(response => {
                    toastr.success(response.data.message);
                }).catch(error => {
                    this.reportEnsoException(error);
                });
            },
            getExportParams() {
                return {
                    'recordsDisplay': this.dtHandle.page.info().recordsDisplay,
                    'columns' : this.dtHandle.ajax.params().columns,
                    'search': this.dtHandle.ajax.params().search,
                    'totals': JSON.stringify(this.totals),
                    'extraFilters': JSON.stringify(this.extraFilters),
                    'intervalFilters': JSON.stringify(this.intervalFilters),
                    'customParams': JSON.stringify(this.customParams)
                }
            }
        },

        mounted() {
            this.initTable();
        },

        beforeDestroy() {
            this.dtHandle.destroy();
        }
    };

</script>

<style>

    .DTE_Field_Input input {
        height: 26px;
    }

    tfoot > tr > td > span.totals {
        font-weight: bold;
    }

    td.editable {
        color: #00776c;
    }

    div.DTE_Inline div.DTE_Inline_Field div.DTE_Field input,
    div.DTE_Inline div.DTE_Inline_Buttons div.DTE_Field input {
        width: 100%;
        text-align: center;
    }

    table .editable {
        cursor: pointer;
    }

    table.dataTable thead th {
        background-color: #405665;
        color: white;
    }

    table.dataTable thead th,
    table.dataTable tfoot th {
        font-weight: normal;
    }

    table.dataTable thead th {
        position: relative;
        background-image: none !important;
    }

    table.dataTable tfoot td {
        background-color: #405665;
        color: white;
    }

    table.dataTable tfoot td {
        position: relative;
        background-image: none !important;
    }

    table.dataTable thead th.sorting:after,
    table.dataTable thead th.sorting_asc:after,
    table.dataTable thead th.sorting_desc:after {
        position: absolute;
        top: calc(50% - 8.17px);
        right: 3px;
        display: block;
        font-family: FontAwesome;
    }

    table.dataTable thead th.sorting:after {
        content: "\f0dc";
        color: #ddd;
        font-size: 0.8em;
        padding-top: 0.12em;
    }

    table.dataTable thead th.sorting_asc:after {
        content: "\f0de";
    }

    table.dataTable thead th.sorting_desc:after {
        content: "\f0dd";
    }

    /* datatables-responsive control button */
    table.dataTable.dtr-column > tbody > tr > td.control,
    table.dataTable.dtr-column > tbody > tr > th.control {
        position: relative;
        cursor: pointer;
    }

    table.dataTable.dtr-inline.collapsed > tbody > tr > td:first-child:before,
    table.dataTable.dtr-inline.collapsed > tbody > tr > th:first-child:before {
        color: inherit;
        background-color:inherit;
        font-family: "FontAwesome";
        content: '\f0fe';
        box-shadow: none;
    }

    table.dataTable.dtr-inline.collapsed > tbody > tr.parent > td:first-child:before,
    table.dataTable.dtr-inline.collapsed > tbody > tr.parent > th:first-child:before {
        background-color: inherit;
        font-family: "FontAwesome";
        content: '\f146';
    }

    table > tbody > tr.selected {
        font-weight: bold;
    }

    div.dataTables_filter input {
        border: 1px solid #ddd;
    }

    div.dataTables_filter label,
    div.dataTables_length label {
        font-weight: 400;
    }

    div.dataTables_length {
        margin-right: 4px;
    }

    div.dataTables_length > label > div.bootstrap-select > button.btn.dropdown-toggle.btn-default {
        box-shadow: none;
        border: 1px solid #ddd;
    }

    div.dt-button-collection {
        width: auto;
    }

</style>