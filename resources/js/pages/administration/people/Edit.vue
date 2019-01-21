<template>

    <div class="columns is-centered">
        <div class="column is-three-quarters-desktop is-full-touch">
            <enso-form class="box has-background-light raises-on-hover animated fadeIn"
                @loaded="ready = true"
                ref="form">
                <span slot="actions">
                    <a class="button is-warning"
                        @click="$router.push({
                            name: 'administration.users.edit',
                            params: { user: $refs.form.param('userId') }
                        })"
                        v-if="ready && $refs.form.param('userId')">
                        <span class="is-hidden-mobile">
                            {{ __('Edit User') }}
                        </span>
                        <span class="icon">
                            <fa icon="user"/>
                        </span>
                        <span class="is-hidden-mobile"/>
                    </a>
                    <a class="button is-primary"
                        @click="$router.push({
                            name: 'administration.users.create',
                            params: { person: $refs.form.routeParam('person') }
                        })"
                        v-else-if="ready">
                        <span class="is-hidden-mobile">
                            {{ __('Create User') }}
                        </span>
                        <span class="icon">
                            <fa icon="user"/>
                        </span>
                        <span class="is-hidden-mobile"/>
                    </a>
                </span>
            </enso-form>
            <accessories v-if="ready">
                <template slot-scope="{ count }">
                    <tab keep-alive
                        id="Addresses">
                        <addresses controls
                            type="LaravelEnso\People\app\Models\Person"
                            :id="$refs.form.routeParam('person')"
                            @update="$set(count, 'addresses', $refs.addresses.count)"
                            ref="addresses"/>
                    </tab>
                </template>
            </accessories>
        </div>
    </div>

</template>

<script>

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import EnsoForm from '../../../components/enso/vueforms/EnsoForm.vue';
import Accessories from '../../../components/enso/bulma/Accessories.vue';
import Tab from '../../../components/enso/bulma/Tab.vue';
import Addresses from '../../../components/enso/addresses/Addresses.vue';

library.add(faUser);

export default {
    components: {
        EnsoForm, Accessories, Tab, Addresses,
    },

    data: () => ({
        ready: false,
    }),
};

</script>
