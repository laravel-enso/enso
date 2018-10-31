<template>

    <div class="columns is-centered">
        <div class="column is-three-quarters-desktop is-full-touch">
            <vue-form-ss class="box has-background-light raises-on-hover animated fadeIn"
                :route-params="[$route.name, $route.params.person, false]">
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
            </vue-form-ss>
        </div>
    </div>

</template>

<script>

import VueFormSs from '../../../components/enso/vueforms/VueFormSs.vue';
import InputField from '../../../components/enso/vueforms/fields/InputField.vue';
import SelectField from '../../../components/enso/vueforms/fields/SelectField.vue';

export default {
    components: { VueFormSs, InputField, SelectField },

    data() {
        return {
            pivotParams: { userGroups: { id: null } },
        };
    },
};

</script>
