<template>

    <div class="columns is-centered">
        <div class="column is-three-quarters">
            <vue-form-ss class="box animated fadeIn"
                :params="[$route.name, $route.params.id, false]"
                ref="form"
                @loaded="pivotParams.owners.id = getOwnerId()">
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

    methods: {
        getOwnerId() {
            return this.$refs.form.data.fields
                .find(({ name }) => name === 'owner_id').value;
        },
    },
};

</script>
