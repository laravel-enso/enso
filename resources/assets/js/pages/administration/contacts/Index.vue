<template>

    <div>
        <vue-table class="box"
            :path="path"
            @edit-contact="edit"
            ref="contacts"
            id="contacts"/>
        <contact-form :form="form"
            @close="form=null"
            @destroy="$refs.contacts.getData(); form=null"
            @submit="$refs.contacts.getData();form=null"
            v-if="form"/>
    </div>

</template>

<script>

import { library } from '@fortawesome/fontawesome-svg-core';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import VueTable from '../../../components/enso/vuedatatable/VueTable.vue';
import ContactForm from '../../../components/enso/contacts/ContactForm.vue';

library.add(faAddressCard);

export default {
    components: { VueTable, ContactForm },

    data() {
        return {
            path: route('core.contacts.initTable'),
            form: null,
            contact: {},
        };
    },

    methods: {
        edit(contact) {
            this.$refs.contacts.loading = true;
            axios.get(route('core.contacts.edit', contact.dtRowId))
                .then(({ data }) => {
                    this.$refs.contacts.loading = false;
                    this.form = data.form;
                }).catch((error) => {
                    this.$refs.contacts.loading = false;
                    this.handleError(error);
                });
        },
    },
};

</script>
