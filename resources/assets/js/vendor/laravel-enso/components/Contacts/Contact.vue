<template>

    <small-box icon="fa fa-address-card-o"
        :theme="contact.is_active ? 'bg-olive' : 'bg-gray'">
        <address class="contact-info">
            <b>{{ contact.first_name }} {{ contact.last_name }}</b><br>
            {{ contact.owner }} <br>
            <i class="fa fa-envelope"></i> {{ contact.email }} <br>
            <i class="fa fa-phone"></i> {{ contact.phone }} <br>
            <i class="fa fa-sticky-note "></i> {{ contact.obs }} <br>
        </address>
        <span slot="footer">
            <i class="fa fa-pencil-square-o pull-left margin-left-md"
                @click="showForm=true"></i>
            <i class="fa fa-trash-o pull-right margin-right-md"
                @click="showModal=true"></i>
            <div class="clearfix"></div>
        </span>
        <contact-form :show="showForm"
            v-if="showForm"
            :contact="Object.assign({}, contact)"
            :type="type"
            :id="id"
            @update="Object.assign(contact, $event);showForm=false"
            @closed="showForm=false">
        </contact-form>
        <modal :show="showModal"
            @cancel-action="showModal=false"
            @commit-action="destroy()">
        </modal>
    </small-box>

</template>

<script>

    export default {
        props: {
            contact: {
                type: Object,
                required: true
            },
            id: {
                type: Number,
                required: true
            },
            type: {
                type: String,
                required: true
            },
            index: {
                type: Number,
                required: true
            }
        },

        data() {
            return {
                labels: Store.labels,
                showForm: false,
                showModal: false
            };
        },

        methods: {
            destroy() {
                this.showModal = false;
                this.$parent.$parent.loading = true;

                axios.delete('/core/contacts/' + this.contact.id).then(response => {
                    this.$emit('delete', this.index);
                    this.$parent.$parent.loading = false;
                }).catch(error => {
                    this.$parent.$parent.loading = false;
                    this.reportEnsoException(error);
                });
            }
        }
    }

</script>

<style>

    address.contact-info {
        padding-left: 5px;
        padding-top: 5px;
    }

    .small-box-footer.controls > i {
        cursor: pointer;
    }

    .modal-body {
        color: #3c3a3a !important;
    }

</style>