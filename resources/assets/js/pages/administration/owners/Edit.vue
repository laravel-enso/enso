<template>

    <div class="columns is-centered">
        <div class="column is-three-quarters animated fadeIn">
            <vue-form-ss class="box animated fadeIn"
                :params="[$route.name, $route.params.id, false]"
                @loaded="initialised = true"
                ref="form">
            </vue-form-ss>
            <div v-if="initialised">
                <contacts :id="$refs.form.data.params.owner_id"
                    type="owner">
                </contacts>
                <comments-card :id="$refs.form.data.params.owner_id"
                    type="owner">
                </comments-card>
                <documents-card :id="$refs.form.data.params.owner_id"
                    type="owner">
                </documents-card>
                <addresses :id="$refs.form.data.params.owner_id"
                    type="owner">
                </addresses>
            </div>
        </div>
    </div>

</template>

<script>

import DocumentsCard from '../../../components/enso/documents/DocumentsCard.vue';
import CommentsCard from '../../../components/enso/comments/CommentsCard.vue';
import Contacts from '../../../components/enso/contacts/Contacts.vue';
import Addresses from '../../../components/enso/addresses/Addresses.vue';
import VueFormSs from '../../../components/enso/vueforms/VueFormSs.vue';

export default {
    components: {
        CommentsCard, Contacts, DocumentsCard, Addresses, VueFormSs,
    },

    data() {
        return {
            initialised: false,
        };
    },
};

</script>
