<template>

    <span>
        <span>
            {{ index + 1 }}.
        </span>
        <span>
            <a href="#"
                v-if="document.isDownloadable"
                @click="show(document.id)">
                {{ document.original_name }}
            </a>
            <span v-if="!document.isDownloadable">{{ document.original_name }}</span>
        </span>
        <span class="pull-right action-buttons">
            <a class="btn btn-xs btn-info"
                v-if="document.isDownloadable"
                :href="'/core/documents/download/' + document.id">
                <i class="fa fa-cloud-download"></i>
            </a>
            <a class="btn btn-xs btn-danger"
                v-if="document.isDeletable"
                @click="idToBeDeleted = document.id; showModal = true;">
                <i class="fa fa-trash-o"></i>
            </a>
        </span>
        <span class="pull-right">
            <i class="fa fa-male margin-right-md"
                v-tooltip="document.owner.fullName">
            </i>
            <i class="fa fa-calendar margin-right-md"
                v-tooltip="$options.filters.timeFromNow(document.created_at)">
            </i>
            <i class="fa fa-database margin-right-md"
                v-tooltip="$options.filters.numberFormat(document.size) + ' Kb'">
            </i>
        </span>
        <modal :show="showModal"
            @cancel-action="showModal = false"
            @commit-action="destroy()">
        </modal>
    </span>

</template>

<script>

     export default {
        props: {
            document: {
                type: Object,
                required: true
            },
            index: {
                type: Number,
                required: true
            }
        },

        data() {
            return {
                showModal: false
            }
        },

        methods: {
            show(id) {
                window.open('/core/documents/show/' + id, '_blank').focus();
            },
            destroy() {
                this.showModal = false;
                this.$parent.$parent.loading = true;

                axios.delete('/core/documents/destroy/' + this.document.id).then((response) => {
                    this.$parent.$parent.loading = false;
                    this.$emit('delete', this.index);
                }).catch(error => {
                    this.$parent.$parent.loading = false;
                    this.reportEnsoException(error);
                });
            },
        }
    }

</script>

<style>

    span.action-buttons {
        width: 50px;
    }

</style>