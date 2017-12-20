<template>

    <tbody>
        <tr v-for="(row, index) in body.data"
            :key="index">
            <td class="table-crt-no"
                :class="template.align"
                v-if="template.crtNo && !isChild(row)">
                {{ getIndex(row) }}
                <span class="icon is-small"
                    v-if="hiddenCount"
                    @click="toggleExpand(row, index)">
                    <i class="fa fa-minus-square"
                        v-if="isExpanded(row)">
                    </i>
                    <i class="fa fa-plus-square"
                        v-else>
                    </i>
                </span>
            </td>
            <td :class="template.align"
                v-for="(column, index) in template.columns"
                :key="index"
                v-if="column.meta.visible && !column.meta.hidden && !isChild(row)">
                <span v-if="column.meta.boolean"
                    v-html="row[column.name] ? template.boolean[1] : template.boolean[0]">
                </span>
                <span v-else-if="column.meta.render"
                    v-html="customRender(row, column)">
                </span>
                <span v-else-if="column.meta.translation">{{ i18n(row[column.name]) }}</span>
                <span v-else>{{ row[column.name] }}</span>
            </td>
            <td class="table-actions"
                :class="template.align"
                v-if="template.actions && !isChild(row)">
                <span class="table-action-buttons">
                    <a v-for="(button, index) in template.buttons.row"
                        :key="index"
                        class="button is-small is-table-button has-margin-left-small"
                        :class="button.class"
                        :href="button.action === 'href' ? getPath(button, row.dtRowId) : null"
                        @click="button.confirmation ? showModal(button, row) : doAction(button, row)">
                        <span class="icon is-small">
                            <i :class="button.icon"></i>
                        </span>
                    </a>
                </span>
            </td>
            <td :colspan="hiddenColSpan"
                :class="template.align"
                v-if="isChild(row)">
                <ul>
                    <li class="child-row"
                        v-for="column in row"
                        :key="column.label">
                        <b>{{ column.label }}</b>: {{ column.value }}
                    </li>
                </ul>
            </td>
        </tr>
        <modal v-if="modal"
            :show="modal"
            :i18n="i18n"
            :message="button.message"
            @cancel-action="closeModal()"
            @commit-action="doAction(button, row)">
        </modal>
    </tbody>

</template>

<script>

import TableBody from './TableBody.vue';
import Modal from './Modal.vue';

export default {
    name: 'TableBody',

    components: { TableBody, Modal },

    props: {
        template: {
            type: Object,
            required: true,
        },
        body: {
            type: Object,
            required: true,
        },
        i18n: {
            type: Function,
            required: true,
        },
        customRender: {
            type: Function,
            required: true,
        },
        start: {
            type: Number,
            required: true,
        },
        expanded: {
            type: Array,
            required: true,
        },
    },

    computed: {
        hiddenColumns() {
            return this.template.columns
                .filter(column => column.meta.hidden && column.meta.visible);
        },
        hiddenCount() {
            return this.hiddenColumns.length;
        },
        hiddenColSpan() {
            return this.template.columns.length - this.hiddenColumns.length
                + (this.template.actions ? 2 : 1);
        },
    },

    data() {
        return {
            modal: false,
            row: null,
            button: null,
        };
    },

    watch: {
        hiddenCount: {
            handler(newVal) {
                if (!newVal) {
                    this.removeChilds();
                }
            },
        },
    },

    methods: {
        getPath(button, dtRowId) {
            return button.path.replace('dtRowId', dtRowId);
        },
        showModal(button, row) {
            this.row = row;
            this.button = button;
            this.modal = true;
        },
        closeModal() {
            this.modal = false;
            this.row = null;
            this.button = null;
        },
        doAction(button, row) {
            if (this.modal) {
                this.modal = false;
            }

            if (button.event) {
                this.$emit(button.event, row);
            }

            if (button.action === 'ajax') {
                this.$emit('ajax', button.method, this.getPath(button, row.dtRowId));
                return;
            }

            if (button.action === 'router') {
                this.$router.push({ name: button.route, params: this.getRouteParams(button, row) });
            }
        },
        getRouteParams(button, row) {
            var params = {
                id: row.dtRowId
            }

            if (button.params) {
                return Object.assign(params, button.params);
            }

            return params;
        },
        getIndex(row) {
            return this.body.data.filter(r => !this.isChild(r))
                .findIndex(r => r.dtRowId === row.dtRowId) + this.start + 1;
        },
        isExpanded(row) {
            return this.expanded.includes(row.dtRowId);
        },
        isChild(row) {
            return Array.isArray(row);
        },
        toggleExpand(row, index) {
            if (!this.isExpanded(row)) {
                this.expanded.push(row.dtRowId);
                this.addChildRow(row, index);
                return;
            }

            const idx = this.expanded.findIndex(id => id === row.dtRowId);
            this.expanded.splice(idx, 1);
            this.body.data.splice(index + 1, 1);
        },
        addChildRow(row, index) {
            const newRow = this.hiddenColumns.reduce((collector, column) => {
                collector.push({ label: column.label, value: row[column.name] });
                return collector;
            }, []);

            this.body.data.splice(index + 1, 0, newRow);
        },
        removeChilds() {
            const indexes = [];

            this.body.data.forEach((row, index) => {
                if (this.isChild(row)) {
                    indexes.push(index);
                }
            });

            indexes.sort((a, b) => a < b).forEach(index => this.body.data.splice(index, 1));

            this.expanded.splice(0);
        },
    },
};

</script>

<style>

    td.table-crt-no {
        white-space:nowrap;
        align-content: center;
    }

    .table-crt-no .fa-plus-square,
    .table-crt-no .fa-minus-square {
        cursor: pointer;
    }

    td.table-actions {
        padding: .35em .5em;
    }

    span.table-action-buttons {
        display: inline-flex;
    }

    .button.is-small.is-table-button {
        height: 1.6em;
        width: 1.6em;
        font-size: .9em;
    }

    .tag.is-table-tag {
        font-size: 0.8rem;
        font-weight: bold;
        height: 1.4em;
        padding: 3px;
    }

    li.child-row:not(:last-child) {
        border-bottom: 1px solid #efefef;
    }

    li.child-row {
        padding: 0.5em 0;
    }

</style>
