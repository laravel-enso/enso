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
                <comments :id="$refs.form.data.params.owner_id"
                    type="owner">
                </comments>
                <documents :id="$refs.form.data.params.owner_id"
                    type="owner">
                </documents>
                <addresses :id="$refs.form.data.params.owner_id"
                    type="owner">
                </addresses>
            </div>
        </div>
    </div>

</template>

<script>

import Documents from '../../../components/enso/documents/Documents.vue';
import Comments from '../../../components/enso/comments/Comments.vue';
import Contacts from '../../../components/enso/contacts/Contacts.vue';
import Addresses from '../../../components/enso/addresses/Addresses.vue';
import VueFormSs from '../../../components/enso/vueforms/VueFormSs.vue';

export default {
    components: {
        Comments, Contacts, Documents, Addresses, VueFormSs,
    },

    data() {
        return {
            initialised: false,
        };
    },
};

</script>
