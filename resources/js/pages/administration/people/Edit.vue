<template>

    <div class="columns is-centered">
        <div class="column is-three-quarters-desktop is-full-touch">
            <enso-form class="box has-background-light raises-on-hover animated fadeIn"
                @loaded="ready = true"
                ref="form">
                <span slot="actions">
                    <a class="button is-warning"
                        v-if="ready && $refs.form.param('userId')"
                        @click="$router.push({
                            name: 'administration.users.edit',
                            params: { user: $refs.form.param('userId') }
                        })">
                        <span class="is-hidden-mobile">
                            {{ __('Edit User') }}
                        </span>
                        <span class="icon">
                            <fa icon="user"/>
                        </span>
                        <span class="is-hidden-mobile"/>
                    </a>
                    <a class="button is-primary"
                        v-else-if="ready">
                        <span class="is-hidden-mobile"
                            @click="$router.push({
                                name: 'administration.users.create',
                                params: { person: $refs.form.routeParam('person') }
                            })">
                            {{ __('Create User') }}
                        </span>
                        <span class="icon">
                            <fa icon="user"/>
                        </span>
                        <span class="is-hidden-mobile"/>
                    </a>
                </span>
            </enso-form>
            <div v-if="ready">
                <accessories type="LaravelEnso\People\app\Models\Person"
                    :id="$refs.form.routeParam('person')"
                    addresses/>
            </div>
        </div>
    </div>

</template>

<script>

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import EnsoForm from '../../../components/enso/vueforms/EnsoForm.vue';
import Accessories from '../../../components/enso/bulma/Accessories.vue';

library.add(faUser);

export default {
    components: { EnsoForm, Accessories },

    data: () => ({
        ready: false,
    }),
};

</script>
