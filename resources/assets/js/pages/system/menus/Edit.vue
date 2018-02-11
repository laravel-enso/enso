<template>

    <div class="columns is-centered">
        <div class="column is-three-quarters">
            <vue-form :data="form"
                class="box animated fadeIn"
                v-if="initialised">
                <template slot="icon" slot-scope="{ field, errors }">
                    <div class="control has-icons-right">
                        <input class="input"
                            :class="{ 'is-danger': errors.has('icon') }"
                            @keydown="errors.clear(field.name)"
                            v-model="field.value"
                            type="text">
                        <span class="icon is-small is-right"
                            v-if="errors.has('icon')">
                            <fa icon="exclamation-triangle"></fa>
                        </span>
                    </div>
                </template>
            </vue-form>
        </div>
    </div>

</template>

<script>

import fontawesome from '@fortawesome/fontawesome';
import { faExclamationTriangle } from '@fortawesome/fontawesome-free-solid/shakable.es';
import VueForm from '../../../components/enso/vueforms/VueForm.vue';

fontawesome.library.add(faExclamationTriangle);

export default {
    components: { VueForm },

    data() {
        return {
            initialised: false,
            form: {},
        };
    },

    created() {
        axios.get(route(this.$route.name, this.$route.params.id, false)).then((response) => {
            this.form = response.data.form;
            this.initialised = true;
        }).catch(error => this.handleError(error));
    },
};

</script>
