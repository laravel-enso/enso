<template>

    <div class="columns is-centered">
        <div class="column is-three-quarters-desktop is-full-touch">
            <vue-form-ss class="box has-background-light raises-on-hover animated fadeIn"
                :route-params="[$route.name, $route.params.id, false]"
                @loaded="
                    userId = $refs.form.data.params.userId;
                    personId = $refs.form.data.params.personId;
                    initialised = true;
                "
                ref="form">
                <span slot="actions">
                    <a class="button is-warning"
                        v-if="userId"
                        @click="$router.push({
                            name: 'administration.users.edit',
                            params: { id: userId }
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
                        v-else-if="personId">
                        <span class="is-hidden-mobile"
                            @click="$router.push({
                                name: 'administration.users.create',
                                params: { id: personId }
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
                    :id="$refs.form.data.params.personId"
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
        userId: null,
        personId: null,
        initialised: false,
    }),
};

</script>
