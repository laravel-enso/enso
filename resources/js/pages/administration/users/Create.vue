<template>

    <div class="columns is-centered">
        <div class="column is-three-quarters">
            <vue-form-ss class="box raises-on-hover animated fadeIn"
                :route-params="[$route.name, null, false]">
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
            pivotParams: { owners: { id: null } },
        };
    },
};

</script>
