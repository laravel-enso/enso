<template>

    <tbody>
        <tr v-for="(row, index) in body.data"
            :key="index">
            <td :class="template.align"
                v-if="template.crtNo">
                {{ start + index + 1 }}.
            </td>
            <td :class="template.align"
                v-for="(column, index) in template.columns"
                :key="index"
                v-if="column.meta.visible">
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
                :class="template.align">
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
    },

    data() {
        return {
            modal: false,
            row: null,
            button: null,
        };
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
                this.$router.push({ name: button.route, params: { id: row.dtRowId } });
            }
        },
    },
};

</script>

<style>

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

    .tag.is-boolean {
        font-size: 0.8rem;
        height: 1.4em;
        width: 1.8em;
        padding: 6px;
    }

</style>
