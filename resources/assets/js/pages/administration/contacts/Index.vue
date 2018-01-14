<template>
    <div>
        <vue-table :path="path"
            :i18n="__"
            @edit-contact="edit"
            ref="contacts"
            id="contacts">
        </vue-table>
        <contact-form :show="showForm"
            v-if="showForm"
            action="edit"
            :contact-id="contact.id"
            @form-close="showForm=false;contact={};$refs.contacts.getData()"
            @update="update()">
        </contact-form>
    </div>


</template>

<script>

import { mapGetters } from 'vuex';
import VueTable from '../../../components/enso/vuedatatable/VueTable.vue';
import ContactForm from '../../../components/enso/contacts/ContactForm.vue';

export default {
    components: { VueTable, ContactForm },

    computed: {
        ...mapGetters('locale', ['__']),
    },

    data() {
        return {
            path: route('core.contacts.initTable', [], false),
            showForm: false,
            contact: {},
        };
    },

    methods: {
        edit(contact) {
            this.setContact(contact);
            this.showForm = true;
        },
        setContact(contact) {
            Object.assign(this.contact, contact);
            this.contact.id = contact.dtRowId;
            this.contact.is_active = contact.is_active_bool;
        },
        update() {
            this.showForm = false;
            this.$refs.contacts.getData();
        },
    },
};

</script>
