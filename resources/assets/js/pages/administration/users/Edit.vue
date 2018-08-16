<template>

    <div class="columns is-centered">
        <div class="column is-three-quarters">
            <vue-form-ss class="box animated fadeIn"
                :route-params="[$route.name, $route.params.id, false]"
                ref="form"
                @loaded="pivotParams.owners.id = $refs.form.field('owner_id').value">
                <template slot="owner_id" slot-scope="{ field, errors }">
                    <vue-select v-model="field.value"
                        :has-error="errors.has(field.name)"
                        @input="pivotParams.owners.id=$event;errors.clear(field.name)"
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
            pivotParams: { owners: { id: null } },
            password: null,
            passwordConfirmation: null,
        };
    },
};

</script>
