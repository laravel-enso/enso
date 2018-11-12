<template>

    <div class="columns is-centered">
        <div class="column is-three-quarters-desktop is-full-touch">
            <vue-form-ss class="box has-background-light raises-on-hover animated fadeIn"
                ref="form"
                @loaded="
                    ready = true;
                    pivotParams.userGroups.id = $refs.form.field('group_id').value;
                ">
                <template slot="group_id"
                    slot-scope="{ field, errors, i18n }">
                    <select-field :errors="errors"
                        :field="field"
                        :i18n="i18n"
                        @input="pivotParams.userGroups.id = $event"/>
                </template>
                <template slot="role_id"
                    slot-scope="{ field, errors, i18n }">
                    <select-field :errors="errors"
                        :field="field"
                        :i18n="i18n"
                        :pivot-params="pivotParams"/>
                </template>
                <template slot="password"
                    slot-scope="{ field, errors, i18n }">
                    <input-field :errors="errors"
                        :field="field"
                        :i18n="i18n"
                        @input="password = $event.target.value"
                        v-if="!field.meta.hidden"/>
                    <password-strength class="has-margin-top-small"
                        :password="field.value"/>
                </template>
                <template slot="password_confirmation"
                    slot-scope="{ field, errors, i18n }">
                    <input-field :errors="errors"
                        :field="field"
                        :i18n="i18n"
                        @input="passwordConfirmation = $event.target.value"
                        @keydown="$emit('update');"
                        v-if="!field.meta.hidden"/>
                </template>
                <a slot="actions"
                    class="button is-warning"
                    @click="$router.push({
                        name: 'administration.people.edit',
                        params: { person: $refs.form.data.params.personId }
                    })"
                    v-if="ready">
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

import VueFormSs from '../../../components/enso/vueforms/VueFormSs.vue';
import InputField from '../../../components/enso/vueforms/fields/InputField.vue';
import SelectField from '../../../components/enso/vueforms/fields/SelectField.vue';
import PasswordStrength from '../../auth/password/PasswordStrength.vue';

export default {
    components: {
        VueFormSs, InputField, SelectField, PasswordStrength,
    },

    data: () => ({
        ready: false,
        pivotParams: { userGroups: { id: null } },
        password: null,
        passwordConfirmation: null,
    }),
};

</script>
