<template>
	 <div>
        <datatable source="core.contacts"
            @edit-contact="edit"
            ref="contacts"
	        id="contacts">
	    </datatable>
        <contact-form :show="showForm"
            v-if="showForm"
            :edit-mode="true"
            :contact="contact"
            @closed="showForm=false;contact={};"
            @update="update()">
        </contact-form>
    </div>


</template>

<script>

	import PageHeader from '../../layout/PageHeader.vue';
    import Datatable from '../../../../components/enso/datatable/Datatable.vue';
	import ContactForm from '../../../../components/enso/contacts/ContactForm.vue';

    export default {
    	components: { PageHeader, Datatable, ContactForm },

        data() {
            return {
                showForm: false,
                contact: {},
            };
        },

        methods: {
            edit(id) {
                let data = this.$refs.contacts.dtHandle.data().toArray(),
                    contact = data.find(function(contact) {
                        return contact.DT_RowId === id;
                    });

                this.setContact(contact);
                this.showForm = true;
            },
            setContact(contact) {
                Object.assign(this.contact, contact);
                this.contact.id = contact.DT_RowId;
                this.contact.is_active = contact.is_active_bool;
            },
            update() {
                this.showForm = false;
                this.$refs.contacts.dtHandle.ajax.reload();
            }
        }
    }

</script>