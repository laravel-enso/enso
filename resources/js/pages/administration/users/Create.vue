<template>

    <div class="columns is-centered">
        <div class="column is-three-quarters-desktop is-full-touch">
            <vue-form-ss class="box has-background-light raises-on-hover animated fadeIn"
                :route-params="[$route.name, $route.params.person, false]">
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
            </vue-form-ss>
        </div>
    </div>

</template>

<script>

import VueFormSs from '../../../components/enso/vueforms/VueFormSs.vue';
import VueSelect from '../../../components/enso/select/VueSelect.vue';

export default {
    components: { VueFormSs, VueSelect },

    data() {
        return {
            pivotParams: { userGroups: { id: null } },
        };
    },
};

</script>
