<template>
    <div>
        <vue-table :path="path"
            :i18n="__"
            @edit-contact="edit"
            ref="contacts"
            id="contacts">
        </vue-table>
        <contact-form
            v-if="form"
            :form="form"
            @form-close="form=null"
            @destroy="$refs.contacts.getData(); form=null"
            @submit="$refs.contacts.getData();form=null">
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
            form: null,
            contact: {},
        };
    },

    methods: {
        edit(contact) {
            this.$refs.contacts.loading = true;
            axios.get(route('core.contacts.edit', contact.dtRowId, false)).then(({ data }) => {
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
