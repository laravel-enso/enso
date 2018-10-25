<template>

    <div class="columns is-centered">
        <div class="column is-three-quarters-desktop is-full-touch">
            <vue-form-ss class="box has-background-light raises-on-hover animated fadeIn"
                @loaded="initialised = true"
                ref="form">
                <span slot="actions">
                    <a class="button is-warning"
                        v-if="initialised && $refs.form.data.params.userId"
                        @click="$router.push({
                            name: 'administration.users.edit',
                            params: { user: $refs.form.data.params.userId }
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
                        v-else-if="initialised">
                        <span class="is-hidden-mobile"
                            @click="$router.push({
                                name: 'administration.users.create',
                                params: { person: $refs.form.data.routeParams.person }
                            })">
                            {{ __('Create User') }}
                        </span>
                        <span class="icon">
                            <fa icon="user"/>
                        </span>
                        <span class="is-hidden-mobile"/>
                    </a>
                </span>
            </vue-form-ss>
            <div v-if="initialised">
                <morphable-container type="LaravelEnso\People\app\Models\Person"
                    :id="$refs.form.data.routeParams.person"
                    addresses/>
            </div>
        </div>
    </div>

</template>

<script>

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import VueFormSs from '../../../components/enso/vueforms/VueFormSs.vue';
import MorphableContainer from '../../../components/enso/bulma/MorphableContainer.vue';

library.add(faUser);

export default {
    components: { VueFormSs, MorphableContainer },

    data: () => ({
        initialised: false,
    }),
};

</script>
