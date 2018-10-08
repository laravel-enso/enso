<template>

    <div class="columns is-centered">
        <div class="column is-three-quarters-desktop is-full-touch">
            <vue-form-ss class="box has-background-light raises-on-hover animated fadeIn"
                :route-params="[$route.name, $route.params.id, false]"
                ref="form"
                @loaded="
                    personId = $refs.form.data.params.personId
                    pivotParams.userGroups.id = $refs.form.field('group_id').value;
                ">
                <template slot="group_id" slot-scope="{ field, errors }">
                    <vue-select v-model="field.value"
                        :has-error="errors.has(field.name)"
                        @input="pivotParams.userGroups.id=$event;errors.clear(field.name)"
                        :source="field.meta.source"/>
                </template>
                <template slot="role_id" slot-scope="{ field, errors }">
                    <vue-select v-model="field.value"
                        :pivot-params="pivotParams"
                        :has-error="errors.has(field.name)"
                        @input="errors.clear(field.name);"
                        :source="field.meta.source"/>
                </template>
                <template slot="password" slot-scope="{ field, errors }">
                    <div class="control has-icons-right">
                        <input :class="['input', { 'is-danger': errors.has(field.name) }]"
                            v-model="field.value"
                            :type="field.meta.content"
                            @keydown="$emit('update');"
                            @input="errors.clear(field.name); password = $event.target.value"
                            v-if="!field.meta.hidden">
                        <span class="icon is-small is-right">
                            <fa icon="lock"/>
                        </span>
                    </div>
                    <password-strength class="has-margin-top-small"
                        :password="field.value"/>
                </template>
                <template slot="password_confirmation" slot-scope="{ field, errors }">
                    <div class="control has-icons-right">
                        <input :class="['input', { 'is-danger': errors.has('password') }]"
                            v-model="field.value"
                            :type="field.meta.content"
                            @keydown="$emit('update');"
                            @input="errors.clear(field.name); passwordConfirmation = $event.target.value"
                            v-if="!field.meta.hidden">
                        <span class="icon is-small is-right has-text-success"
                            v-if="password && password === passwordConfirmation">
                            <fa icon="check"/>
                        </span>
                    </div>
                </template>
                <a slot="actions"
                    class="button is-warning"
                    @click="$router.push({
                        name: 'administration.people.edit',
                        params: { id: personId }
                    })">
                    <span class="is-hidden-mobile">
                        {{ __('Edit Person') }}
                    </span>
                    <span class="icon">
                        <fa icon="user-tie"/>
                    </span>
                    <span class="is-hidden-mobile"/>
                </a>
            </vue-form-ss>
        </div>
    </div>

</template>

<script>

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck, faLock } from '@fortawesome/free-solid-svg-icons';

import VueFormSs from '../../../components/enso/vueforms/VueFormSs.vue';
import VueSelect from '../../../components/enso/select/VueSelect.vue';
import PasswordStrength from '../../auth/password/PasswordStrength.vue';

library.add(faCheck, faLock);

export default {
    components: { VueFormSs, VueSelect, PasswordStrength },

    data() {
        return {
            personId: null,
            pivotParams: { userGroups: { id: null } },
            password: null,
            passwordConfirmation: null,
        };
    },
};

</script>
