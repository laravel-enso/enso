<template>

    <div class="columns is-centered">
        <div class="column is-three-quarters animated fadeIn"
            v-if="initialised">
            <vue-form :data="form"
                class="box">
            </vue-form>
            <contacts :id="owner.id"
                type="owner">
            </contacts>
            <comments :id="owner.id"
                type="owner">
            </comments>
            <documents :id="owner.id"
                type="owner">
            </documents>
            <addresses :id="owner.id"
                type="owner">
            </addresses>
        </div>
    </div>

</template>

<script>

import Documents from '../../../components/enso/documents/Documents.vue';
import Comments from '../../../components/enso/comments/Comments.vue';
import Contacts from '../../../components/enso/contacts/Contacts.vue';
import VueForm from '../../../components/enso/vueforms/VueForm.vue';
import Addresses from "../../../components/enso/addresses/Addresses";

export default {
    components: {
        Addresses,
        Comments, Contacts, Documents, VueForm,
    },

    data() {
        return {
            initialised: false,
            form: {},
            owner: {},
        };
    },

    created() {
        axios.get(route(this.$route.name, this.$route.params.id, false)).then(({ data }) => {
            this.form = data.form;
            this.owner = data.owner;
            this.initialised = true;
        }).catch(error => this.handleError(error));
    },
};

</script>
