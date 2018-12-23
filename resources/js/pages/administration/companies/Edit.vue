<template>

    <div class="columns is-centered">
        <div class="column is-three-quarters is-full-touch">
            <enso-form class="box has-background-light raises-on-hover animated fadeIn"
                @loaded="ready = true"
                ref="form"/>
            <div v-if="ready">
                <accessories addresses
                    comments
                    discussions
                    documents
                    type="LaravelEnso\Companies\app\Models\Company"
                    :id="$refs.form.routeParam('company')">
                    <template slot="custom"
                        slot-scope="{count}">
                        <tab keep-alive
                             id="Contacts">
                            <contacts controls
                                :id="$refs.form.routeParam('company')"
                                route-key="company"
                                route-prefix="administration.companies.contacts"
                                @update="$set(count, 'contacts', $refs.contacts.count)"
                                ref="contacts"/>
                        </tab>
                    </template>
                </accessories>
            </div>
        </div>
    </div>

</template>

<script>

import Accessories from '../../../components/enso/bulma/Accessories.vue';
import EnsoForm from '../../../components/enso/vueforms/EnsoForm.vue';
import Contacts from '../../../components/enso/contacts/Contacts.vue';
import Tab from '../../../components/enso/bulma/Tab.vue';

export default {
    components: {
        EnsoForm, Accessories, Contacts, Tab,
    },

    data: () => ({
        ready: false,
    }),
};

</script>
