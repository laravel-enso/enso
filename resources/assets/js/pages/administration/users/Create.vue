<template>

    <div class="columns is-centered">
        <div class="column is-three-quarters">
            <vue-form-ss class="box animated fadeIn"
                :params="[$route.name, null, false]">
                <template slot="owner_id" slot-scope="{ field, errors }">
                    <vue-select :i18n="__"
                        v-model="field.value"
                        :has-error="errors.has(field.name)"
                        @input="pivotParams.owners.id=$event;errors.clear(field.name)"
                        :source="field.meta.source">
                    </vue-select>
                </template>
                <template slot="role_id" slot-scope="{ field, errors }">
                    <vue-select :i18n="__"
                        :pivot-params="pivotParams"
                        v-model="field.value"
                        :has-error="errors.has(field.name)"
                        @input="errors.clear(field.name);"
                        :source="field.meta.source">
                    </vue-select>
                </template>
            </vue-form-ss>
        </div>
    </div>

</template>

<script>

import { mapGetters } from 'vuex';
import VueFormSs from '../../../components/enso/vueforms/VueFormSs.vue';
import VueSelect from '../../../components/enso/select/VueSelect.vue';

export default {
    components: { VueFormSs, VueSelect },

    data() {
        return {
            pivotParams: { owners: { id: null } },
        };
    },

    computed: {
        ...mapGetters('locale', ['__']),
    },
};

</script>
