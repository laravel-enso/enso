<template>

    <card :title="name"
        refresh
        :icon="icon"
        @refresh="getData"
        :overlay="loading"
        :controls="1">
        <a slot="control-1"
            class="card-header-icon">
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
                    <td class="has-text-centered"
                        v-for="i in header.length" >
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

import { mapGetters, mapState } from 'vuex';
import Card from '../bulma/Card.vue';
import Modal from '../bulma/Modal.vue';

export default {
    name: 'Datatable',

    components: { Card, Modal },

    props: {
        source: {
            type: String,
            required: true,
        },
        id: {
            type: String,
            default: null,
        },
        customRender: {
            type: Function,
            default: (data) => {
                toastr.warning('Custom render function is missing');
                return data;
            },
        },
        extraFilters: {
            type: Object,
            default: () => ({}),
        },
        customParams: {
            type: Object,
            default: () => ({}),
        },
        intervalFilters: {
            type: Object,
            default: () => ({}),
        },
    },

    computed: {
        ...mapGetters('locale', {
            __: '__',
            locale: 'current',
        }),
        ...mapState(['auth']),
        hasTotals() {
            return Object.keys(this.totals).length > 0;
        },
        table() {
            return this.$el.querySelector('table');
        },
    },

    data(self = this) {
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
                render(data) {
                    return self.getActionButtons(data);
                },
                responsivePriority: 1,
                searchable: false,
                orderable: false,
            },
            tableOptions: {
                dom: 'Bfrtip',
                stateSave: true, // store
                lengthMenu: [10, 15, 20, 25, 30],
                autoWidth: false,
                pagingType: 'full_numbers',
                filter: true,
                stateDuration: 60 * 60 * 24 * 90,
                order: [],
                colReorder: true,
                responsive: true,
                serverSide: true,
                ajax: {
                    url: route(`${this.source}.getTableData`, null, false),
                    type: 'GET',
                    data: {
                        totals() { return JSON.stringify(self.totals); },
                        extraFilters() { return JSON.stringify(self.extraFilters); },
                        intervalFilters() { return JSON.stringify(self.intervalFilters); },
                        customParams() { return JSON.stringify(self.customParams); },
                    },
                    error({ status }) {
                        if (status === 401) {
                            if (self.$store.getters['auth/isAuth']) {
                                self.$store.dispatch('auth/logout');
                            }

                            self.$router.push({ name: 'login' });
                        }
                    },
                },
                buttons: [
                    'pageLength',
                    { extend: 'colvis', text: '<span class="icon is-small"><i class="fa fa-eye"></i></span>' },
                    { extend: 'copy', text: '<span class="icon is-small"><i class="fa fa-clipboard"></i></span>' },
                    {
                        className: 'export-excel',
                        text: '<span class="icon is-small"><i class="fa fa-file-excel-o"></i></span>',
                        action() {
                            self.exportExcel();
                        },
                    },
                    {
                        className: 'create-record',
                        text: '<span class="icon is-small"><i class="fa fa-plus-square-o"></i></span>',
                        action() {
                            self.createRecord();
                        },
                    },
                ],
                drawCallback() {
                    const getColumn = index => self.dtHandle.context[0].json.totals[index];

                    Object.keys(self.totals).forEach(index =>
                        self.drawTotalsColumn(this.api(), index, getColumn(index)));

                    $(self.table).on('draw.dt', () => {
                        self.addPostDrawListeners();
                    });

                    self.$emit('draw');
                },
            },
            editorOptions: {
                ajax: {
                    url: null,
                    headers: { 'X-CSRF-TOKEN': Laravel.csrfToken },
                    type: 'PATCH',
                    data: {
                        extraFilters() { return JSON.stringify(self.extraFilters); },
                        intervalFilters() { return JSON.stringify(self.intervalFilters); },
                        customParams() { return JSON.stringify(self.customParams); },
                    },
                },
                table: `#${this.id || `table-${this._uid}`}`,
                fields: [],
            },
        };
    },

    watch: {
        extraFilters: {
            handler() {
                this.getData.call(this);
            },
            deep: true,
        },
        intervalFilters: {
            handler() {
                this.getData.call(this);
            },
            deep: true,
        },
        customParams: {
            handler() {
                this.getData.call(this);
            },
            deep: true,
        },
        locale: {
            handler() {
                this.dtHandle.destroy();
                this.tableOptions.oLanguage = this.locales[this.locale];
                this.mountDataTable();
                this.$bus.$emit('nprogress-done');
            },
        },
    },

    created() {
        this.getData = _.debounce(this.getData, 500);
    },

    methods: {
        initTable() {
            axios.get(route(`${this.source}.initTable`, null, false)).then(({ data }) => {
                this.processInitData(data);
            }).then(() => this.mountDataTable())
                .catch(error => this.handleError(error));
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
            this.computeRender(data);
            this.totals = data.totals || {};
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
                return;
            }

            const self = this;

            data.boolean.forEach((index) => {
                const render = value => (value
                    ? '<span class="tag is-table-tag is-success"><span class="icon is-small"><i class="fa fa-check"></span></span>'
                    : '<span class="tag is-table-tag is-danger"><span class="icon is-small"><i class="fa fa-times"></span></span>');

                self.$set(self.tableOptions.columns[index], 'render', render);
            });
        },
        computeCustomRender(data) {
            if (!data.render) {
                return;
            }

            const self = this;

            data.render.forEach((index) => {
                const column = self.tableOptions.columns[index].data;
                const render = (value, type, row, meta) =>
                    self.customRender(column, value, type, row, meta);

                self.$set(self.tableOptions.columns[index], 'render', render);
            });
        },
        computeEditor(data) {
            this.hasEditor = data.editable && data.editable.length > 0;

            if (!this.hasEditor) {
                return;
            }

            const self = this;
            data.editable.forEach(column => self.editorOptions.fields.push(column));
            this.editorOptions.ajax.url = route(`${this.source}.setTableData`, null, false);
        },
        mountDataTable() {
            if (this.hasEditor) {
                this.initEditor();
            }

            this.dtHandle = $(this.table).DataTable(this.tableOptions);
            this.setSearchInputStyle();
            this.setHeaderButtons();
            this.addProcessingListener();
        },
        setSearchInputStyle() {
            const searchInput = this.$el.querySelector('input[type=search]');

            searchInput.classList.add('input');
            searchInput.classList.add('is-small');
        },
        setHeaderButtons() {
            if (!this.headerButtons.includes('create')) {
                this.dtHandle.buttons(['.create-record']).disable();
            }

            if (!this.headerButtons.includes('exportExcel')) {
                this.dtHandle.buttons(['.export-excel']).disable();
            }
        },
        addProcessingListener() {
            const self = this;

            this.dtHandle.on('processing.dt', (e, settings, processing) => {
                self.updateLoadingState(processing);
            });
        },
        addPostDrawListeners() {
            this.addStandardActionListeners();
            this.addCustomActionListeners();
        },
        addStandardActionListeners() {
            const self = this;

            $('table a.show-record').off('click').on('click', ({ currentTarget }) =>
                self.$router.push({ name: `${self.source}.show`, params: { id: $(currentTarget).data('id') } }));

            $('table a.edit-record').off('click').on('click', ({ currentTarget }) =>
                self.$router.push({ name: `${self.source}.edit`, params: { id: $(currentTarget).data('id') } }));

            $('table a.delete-record').off('click').on('click', ({ currentTarget }) => {
                self.showModal = true;
                self.selectedRecord = $(currentTarget).data('id');
            });
        },
        addCustomActionListeners() {
            const self = this;

            if (self.actionButtons.custom) {
                self.actionButtons.custom.forEach((button) => {
                    $(`table a.${button.event.toLowerCase()}`).off('click').on('click', ({ currentTarget }) =>
                        self.$emit($(currentTarget).data('event'), $(currentTarget).data('id')));
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
            const self = this;

            $(this.table).on('click', 'tbody tr td.editable', ({ currentTarget }) => {
                self.editedCell.value = self.dtHandle.cell(currentTarget).data();
                const index = self.dtHandle.cell(currentTarget).index().column;
                self.editedCell.id = currentTarget.parentNode.id;
                self.editedCell.column = self.tableOptions.columns[index].data;
                self.dtEditorHandle.inline(currentTarget);
            });
        },
        addSelectOnFocusListener() {
            const self = this;

            $('input', this.dtEditorHandle.node()).on('focus', ({ currentTarget }) => {
                $(currentTarget).val(self.editedCell.value);
                currentTarget.select();
            });
        },
        addBlurListener() {
            const self = this;

            $('input', this.dtEditorHandle.node()).on('blur', () => {
                $('div.DTE_Field_InputControl').removeClass('has-error');
                self.editedCell = {};
            });
        },
        addPreSubmitListener() {
            const self = this;
            // fixme
            this.dtEditorHandle.on('preSubmit', (event, payload) => {
                for (const table in payload.data[self.editedCell.id]) {
                    for (const property in payload.data[self.editedCell.id][table]) {
                        if (property !== self.editedCell.column) {
                            delete payload.data[self.editedCell.id][table][property];
                        }
                    }
                }
            });
        },
        addPostSubmitListener() {
            this.dtEditorHandle.on('postSubmit', (event, response) => {
                if (!response) {
                    toastr.error('Something went wrong');
                }

                if (response.level) {
                    $('div.DTE_Field_InputControl').addClass('has-error');
                    toastr[response.level](response.message);
                    return;
                }

                $('div.DTE_Field_InputControl').removeClass('has-error');
                toastr.success(response.message);
            });
        },
        updateLoadingState(processing) {
            this.loading = processing;

            return processing
                ? this.$bus.$emit('nprogress-add-request')
                : this.$bus.$emit('nprogress-add-response');
        },
        drawTotalsColumn(api, column, total) {
            const formattedTotal = this.$options.filters.numberFormat(parseFloat(total).toFixed(2));
            $(api.table().column(column).footer()).html(`<b>${formattedTotal}</b>`);
        },
        getActionButtons(data) {
            return this.getCustomActionButtons(data) + this.getStandardActionButtons(data);
        },
        getCustomActionButtons(data) {
            let buttons = '<span class="action-buttons">';

            this.actionButtons.custom.forEach((action) => {
                buttons += `<a class="button is-small is-table-button \
                ${action.event.toLowerCase()} ${action.class}" data-id="${data}" \
                data-event="${action.event}"><span class="icon is-small">\
                <i class="${action.icon}"></i></span></a>`;
            });

            return buttons;
        },
        getStandardActionButtons(data) {
            return `${
                this.actionButtons.standard.includes('show')
                    ? `<a class="button show-record is-small is-table-button is-success" data-id="${data}">
                        <span class="icon is-small">
                            <i class="fa fa-eye"></i>
                        </span>
                    </a>`
                    : ''}${
                this.actionButtons.standard.includes('edit')
                    ? `<a class="button edit-record is-small is-table-button is-warning has-margin-left-small" data-id="${data}">
                        <span class="icon is-small">
                            <i class="fa fa-pencil"></i>
                        </span>
                    </a>`
                    : ''}${
                this.actionButtons.standard.includes('download')
                    ? `<a class="button is-table-button is-small is-primary has-margin-left-small" href="${route(`${this.source}.download`, data, false)}">
                        <span class="icon is-small" data-id="${data}">
                            <i class="fa fa-cloud-download"></i>
                        </span>
                    </a>`
                    : ''}${
                this.actionButtons.standard.includes('destroy')
                    ? `<a class="button delete-record is-table-button is-small is-danger has-margin-left-small" data-id="${data}">
                        <span class="icon is-small">
                            <i class="fa fa-trash-o"></i>
                        </span>
                    </a>` : ''
            }`;
        },
        getData() {
            if (!this.dtHandle) {
                this.initTable();
                return;
            }

            const pageNumber = this.dtHandle.page.info().page;
            this.dtHandle.page(pageNumber).draw('page');
        },
        createRecord() {
            this.$router.push({ name: `${this.source}.create` });
        },
        deleteRecord() {
            this.showModal = false;

            axios.delete(route(`${this.source}.destroy`, this.selectedRecord, false).toString()).then((response) => {
                this.dtHandle.ajax.reload();
                toastr.success(response.data.message);
            }).catch(error => this.handleError(error));

            this.selectedRecord = null;
        },
        clearState() {
            this.dtHandle.state.clear();
            this.dtHandle.colReorder.reset();

            for (let i = 0; i < this.dtHandle.columns.length; i++) {
                this.dtHandle.column(i).visible(true);
            }

            this.dtHandle.destroy();
            this.mountDataTable();
            this.$bus.$emit('nprogress-done');
        },
        exportExcel() {
            axios.get(route(`${this.source}.exportExcel`, null, false), {
                params: this.getExportParams(),
            }).then(({ data }) => {
                toastr.success(data.message);
            }).catch(error => this.handleError(error));
        },
        getExportParams() {
            return {
                recordsDisplay: this.dtHandle.page.info().recordsDisplay,
                columns: this.dtHandle.ajax.params().columns,
                search: this.dtHandle.ajax.params().search,
                totals: JSON.stringify(this.totals),
                extraFilters: JSON.stringify(this.extraFilters),
                intervalFilters: JSON.stringify(this.intervalFilters),
                customParams: JSON.stringify(this.customParams),
            };
        },
    },

    mounted() {
        this.initTable();
    },

    beforeDestroy() {
        // this.dtHandle.destroy();
    },
};

</script>

<style src="./css/datatable.css"></style>
<style src="./css/buttons.css"></style>
<style src="./css/responsive.css"></style>
<style src="./css/ensoTable.css"></style>
