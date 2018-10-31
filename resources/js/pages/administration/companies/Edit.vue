<template>

    <div class="columns is-centered">
        <div class="column is-three-quarters is-full-touch">
            <vue-form-ss class="box has-background-light raises-on-hover animated fadeIn"
                @loaded="ready = true"
                ref="form"/>
            <div v-if="ready">
                <accessories type="LaravelEnso\Companies\app\Models\Company"
                    :id="$refs.form.data.routeParams.company"
                    addresses
                    discussions
                    documents>
                    <template slot="custom"
                        slot-scope="{count}">
                        <tab keep-alive
                             id="Contacts">
                            <contacts controls
                                :id="$refs.form.data.routeParams.company"
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
import VueFormSs from '../../../components/enso/vueforms/VueFormSs.vue';
import Contacts from '../../../components/enso/contacts/Contacts.vue';
import Tab from '../../../components/enso/bulma/Tab.vue';

export default {
    components: {
        VueFormSs, Accessories, Contacts, Tab,
    },

    data: () => ({
        ready: false,
    }),
};

</script>
