<template>

    <card :title="name"
        refresh
        :icon="icon"
        @refresh="getData"
        :overlay="loading"
        :controls="1">
        <a slot="control-1" class="card-header-icon">
            <button class="button is-small is-primary is-outlined"
                @click="clearState()">
                reset
            </button>
        </a>
        <div class="has-padding-medium">
            <table :id="id"
                class="table is-striped is-narrow is-fullwidth is-bordered"
                :class="tableClass"
                width="100%">
                <thead>
                    <tr>
                        <th v-for="label in header"
                            class="has-text-centered">
                            {{ __(label) }}
                        </th>
                    </tr>
                </thead>
                <tbody></tbody>
                <tfoot v-if="hasTotals">
                <tr>
                    <td v-for="i in header.length" class="has-text-centered">
                        <span v-if="i == 2"
                            class="totals">
                            {{ __('Totals') }}
                        </span>
                    </td>
                </tr>
                </tfoot>
            </table>

            <modal :show="showModal"
                @cancel-action="showModal=false;selectedRecord=null"
                @commit-action="deleteRecord()">
            </modal>
        </div>
    </card>

</template>

<script>

    import Card from '../bulma/Card.vue';
    import Modal from '../bulma/Modal.vue';
    import { mapGetters } from 'vuex';
    import { mapState } from 'vuex';

    export default {
        name: 'Datatable',

        components: { Card, Modal },

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
            ...mapGetters('locale', {
                __: '__',
                locale: 'current'
            }),
            ...mapState(['auth']),
            hasTotals() {
                return Object.keys(this.totals).length > 0;
            },
            table() {
                return this.$el.querySelector('table');
            }
        },

        data (self = this) {
            return {
                name: null,
                icon: null,
                showModal: false,
                loading: false,
                hasEditor: false,
                dtHandle: null,
                dtEditorHandle: null,
                selectedRecord: null,
                header: {},
                totals: {},
                actionButtons: {},
                headerAlign: null,
                bodyAlign: null,
                tableClass: null,
                editedCell: {},
                headerButtons: [],
                locales: [],
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
                    orderable: false
                },
                tableOptions: {
                    dom: 'Bfrtip',
                    stateSave: true, //store
                    lengthMenu: [10, 15, 20, 25, 30],
                    autoWidth: false,
                    pagingType: "full_numbers",
                    filter: true,
                    stateDuration: 60 * 60 * 24 * 90,
                    order: [],
                    colReorder: true,
                    responsive: true,
                    serverSide: true,
                    ajax: {
                        url: route(this.source + '.getTableData', null, false),
                        type: 'GET',
                        data: {
                            totals() { return JSON.stringify(self.totals); },
                            extraFilters() { return JSON.stringify(self.extraFilters); },
                            intervalFilters() { return JSON.stringify(self.intervalFilters); },
                            customParams() { return JSON.stringify(self.customParams); }
                        },
                        beforeSend: function (xhr) {
                            xhr.setRequestHeader("Authorization", 'Bearer '+ self.auth.jwt);
                        }
                    },
                    buttons: [
                        'pageLength',
                        { extend: 'colvis', text: '<span class="icon is-small"><i class="fa fa-eye"></i></span>'},
                        { extend: 'copy', text:'<span class="icon is-small"><i class="fa fa-clipboard"></i></span>'},
                        {
                            className: 'export-excel',
                            text: '<span class="icon is-small"><i class="fa fa-file-excel-o"></i></span>',
                            action() {
                                self.exportExcel();
                            }
                        },
                        {
                            className: 'create-record',
                            text: '<span class="icon is-small"><i class="fa fa-plus-square-o"></i></span>',
                            action() {
                                self.createRecord();
                            }
                        }
                    ],
                    drawCallback() {
                        self.toggleClasses();

                        for (let index in self.totals) {
                            self.drawColumnTotal(this.api(), index, self.dtHandle.context[0].json.totals[index]);
                        }

                        $(self.table).on('draw.dt', function () {
                            self.addPostDrawListeners();
                        });

                        self.$emit('draw');
                    },
                },
                editorOptions: {
                    ajax: {
                        // url: route(this.source + '.setTableData', null, false),
                        // headers: 
                    },
                    table: this.id || '#table-' + this._uid,
                    fields: []
                }
            }
        },

        watch: {
            extraFilters: {
                handler() {
                    this.getData.call(this);
                },
                deep: true
            },
            intervalFilters: {
                handler() {
                    this.getData.call(this);
                },
                deep: true
            },
            customParams: {
                handler() {
                    this.getData.call(this);
                },
                deep: true
            },
            locale: {
                handler() {
                    this.dtHandle.destroy();
                    this.tableOptions.oLanguage = this.locales[this.locale];
                    this.mountDataTable();
                    this.$bus.$emit('nprogress-done');
                }
            }
        },

        created() {
            this.getData = _.debounce(this.getData, 500);
        },

        methods: {
            initTable() {
                axios.get(route(this.source + '.initTable', null, false)).then(response => {
                    this.processInitData(response.data);
                }).then(() => {
                    this.mountDataTable();
                }).catch(error => {
                    this.handleError(error);
                });
            },
            processInitData(data) {
                this.setStyle(data);
                this.locales = data.locales;
                this.tableOptions.oLanguage = data.locales[this.locale];
                this.name = data.name;
                this.icon = data.icon;
                this.header = data.header;
                this.tableOptions.columns = data.columns;
                this.computeExtraColumns(data);
                this.totals = data.totals || {};
                this.computeRender(data);
                this.computeEditor(data);
                this.headerButtons = data.headerButtons;
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
                        return data ? '<span class="tag is-table-tag is-success"><span class="icon is-small"><i class="fa fa-check"></span></span>'
                            : '<span class="tag is-table-tag is-danger"><span class="icon is-small"><i class="fa fa-times"></span></span>';
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

                this.dtHandle = $(this.table).DataTable(this.tableOptions);
                this.setSearchInputStyle();
                this.setHeaderButtons();
                this.addProcessingListener();
            },
            setSearchInputStyle() {
                let searchInput = this.$el.querySelector('input[type=search]');
                searchInput.classList.add('input');
                searchInput.classList.add('is-small');
            },
            setHeaderButtons() {
                if (!this.headerButtons.includes('create')) {
                    this.dtHandle.buttons(['.create-record']).disable();
                }

                if (!this.headerButtons.includes('exportExcel')){
                    this.dtHandle.buttons(['.export-excel']).disable();
                }
            },
            addProcessingListener() {
                let self = this;

                this.dtHandle.on('processing.dt', (e, settings, processing) => {
                    self.updateLoadingState(processing);
                });
            },
            addPostDrawListeners() {
                this.addStandardActionListeners();
                this.addCustomActionListeners();
            },
            addStandardActionListeners() {
                let self = this;

                $('table a.show-record').off('click').on('click', function(event) {
                    self.$router.push({ name: self.source + '.show', params: { id: $(this).data('id') }});
                });

                $('table a.edit-record').off('click').on('click', function(event) {
                    self.$router.push({ name: self.source + '.edit', params: { id: $(this).data('id') }});
                });

                $('table a.delete-record').off('click').on('click', function(event) {
                    self.showModal = true;
                    self.selectedRecord = $(this).data('id');
                });
            },
            addCustomActionListeners() {
                let self = this;

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

                $(this.table).on('click', 'tbody tr td.editable', function() {
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
                return (this.loading = processing) ? this.$bus.$emit('nprogress-add-request') : this.$bus.$emit('nprogress-add-response');
            },
            drawColumnTotal(api, column, total) {
                $(api.table().column(column).footer()).html('<b>' +
                    this.$options.filters.numberFormat(parseFloat(total).toFixed(2)) + '</b>');
            },
            getActionButtons(data) {
                return this.getCustomActionButtons(data) +
                    this.getStandardActionButtons(data);
            },
            getCustomActionButtons(data) {
                let buttons = '<span class="action-buttons">';

                this.actionButtons.custom.forEach(action => {
                    buttons += '<a class="button is-small is-table-button ' + action.event.toLowerCase() + ' ' + action.class + '" data-id="' +
                        data + '" data-event="' + action.event + '"><span class="icon is-small"><i class="' + action.icon + '"></i></span></a>';
                });

                return buttons;
            },
            getStandardActionButtons(data) {
                return ''
                + (this.actionButtons.standard.includes('show') ? '<a class="button show-record is-small is-table-button is-success" data-id="' + data + '"><span class="icon is-small"><i class="fa fa-eye"></i></span></a>' : '')
                + (this.actionButtons.standard.includes('edit') ? '<a class="button edit-record is-small is-table-button is-warning has-margin-left-small" data-id="' + data + '"><span class="icon is-small"><i class="fa fa-pencil"></i></span></a>' : '')
                + (this.actionButtons.standard.includes('download') ? '<a class="button is-table-button is-small is-primary has-margin-left-small" href="' + route(this.source + '.download', data, false).toString() +'"><span class="icon is-small" data-id="' + data + '"><i class="fa fa-cloud-download"></i></span></a>' : '')
                + (this.actionButtons.standard.includes('destroy') ? '<a class="button delete-record is-table-button is-small is-danger has-margin-left-small" data-id="' + data + '"><span class="icon is-small"><i class="fa fa-trash-o"><i class=""></i></span></a>' : '')
                + '</span>';
            },
            getData() {
                if (!this.dtHandle) {
                    return this.initTable();
                }

                let pageNumber = this.dtHandle.page.info().page;
                this.dtHandle.page(pageNumber).draw('page');
            },
            createRecord() {
                this.$router.push({ name: this.source + '.create' });
            },
            deleteRecord() {
                this.showModal = false;

                axios.delete(route(this.source + '.destroy', this.selectedRecord, false).toString()).then(response => {
                    this.dtHandle.ajax.reload();
                    toastr.success(response.data.message);
                }).catch(error => {
                    this.handleError(error);
                });

                this.selectedRecord = null;
            },
            toggleClasses() {
                if (this.classes.compact) {
                    $(this.table).toggleClass('compact');
                }

                if (this.classes.display) {
                    $(this.table).toggleClass('display');
                }
            },
            clearState() {
                this.dtHandle.state.clear();
                this.dtHandle.colReorder.reset();

                for (let i in this.dtHandle.columns.length) {
                    this.dtHandle.column(i).visible(true);
                }

                this.dtHandle.destroy();
                this.mountDataTable();
                this.$bus.$emit('nprogress-done');
            },
            exportExcel() {
                axios.get(route(this.source + '.exportExcel', null, false), {params: this.getExportParams()}).then(response => {
                    toastr.success(response.data.message);
                }).catch(error => {
                    this.handleError(error);
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
            // this.dtHandle.destroy();
        }
    };

</script>

<style src="./css/datatable.css"></style>
<style src="./css/buttons.css"></style>
<style src="./css/responsive.css"></style>
<style src="./css/ensoTable.css"></style>