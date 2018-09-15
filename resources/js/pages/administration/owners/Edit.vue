<template>

    <div class="columns is-centered">
        <div class="column is-three-quarters animated fadeIn">
            <vue-form-ss class="box is-raised animated fadeIn"
                :route-params="[$route.name, $route.params.id, false]"
                @loaded="initialised = true"
                ref="form"/>
            <div v-if="initialised">
                <morphable-container type="owner"
                    :id="$refs.form.data.params.owner_id"
                    contacts
                    comments
                    documents
                    addresses>
                    blah
                </morphable-container>
            </div>
        </div>
    </div>

</template>

<script>

import MorphableContainer from '../../../components/enso/bulma/MorphableContainer.vue';
import DocumentsCard from '../../../components/enso/documents/DocumentsCard.vue';
import CommentsCard from '../../../components/enso/comments/CommentsCard.vue';
import ContactsCard from '../../../components/enso/contacts/ContactsCard.vue';
import AddressesCard from '../../../components/enso/addresses/AddressesCard.vue';
import VueFormSs from '../../../components/enso/vueforms/VueFormSs.vue';

export default {
    components: {
        MorphableContainer, CommentsCard, ContactsCard, DocumentsCard, AddressesCard, VueFormSs,
    },

    data() {
        return {
            initialised: false,
        };
    },
};

</script>
