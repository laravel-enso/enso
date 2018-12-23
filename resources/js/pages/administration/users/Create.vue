<template>

    <div class="columns is-centered">
        <div class="column is-three-quarters-desktop is-full-touch">
            <enso-form class="box has-background-light raises-on-hover animated fadeIn">
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
            </enso-form>
        </div>
    </div>

</template>

<script>

import EnsoForm from '../../../components/enso/vueforms/EnsoForm.vue';
import InputField from '../../../components/enso/vueforms/fields/InputField.vue';
import SelectField from '../../../components/enso/vueforms/fields/SelectField.vue';

export default {
    components: { EnsoForm, InputField, SelectField },

    data: () => ({
        pivotParams: { userGroups: { id: null } },
    }),
};

</script>
