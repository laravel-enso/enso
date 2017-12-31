<template>

    <div class="container">
        <div class="columns is-centered">
            <div class="column is-three-quarters">
                <vue-form :data="form"
                    class="box animated fadeIn"
                    v-if="initialised">
                    <template slot="owner_id" slot-scope="props">
                        <vue-select name="owner_id"
                            v-model="props.field.value"
                            :has-error="props.errors.has(props.field.name)"
                            @input="pivotParams.owners.id=$event;props.errors.clear(props.field.column)"
                            :source="props.field.meta.source">
                        </vue-select>
                    </template>
                    <template slot="role_id" slot-scope="props">
                        <vue-select name="role_id"
                            :pivot-params="pivotParams"
                            :has-error="props.errors.has(props.field.name)"
                            v-model="props.field.value"
                            @input="props.errors.clear(props.field.column);"
                            :source="props.field.meta.source">
                        </vue-select>
                    </template>
                </vue-form>
            </div>
        </div>
    </div>

</template>

<script>

import VueForm from '../../../../components/enso/vueforms/VueForm.vue';
import VueSelect from '../../../../components/enso/select/VueSelect.vue';

export default {
    components: { VueForm, VueSelect },

    data() {
        return {
            initialised: false,
            form: {},
            pivotParams: { owners: { id: null } },
        };
    },

    created() {
        axios.get(route(this.$route.name, null, false)).then(({ data }) => {
            this.form = data.form;
            this.initialised = true;
        }).catch(error => this.handleError(error));
    },
};

</script>
