<template>

    <div class="columns is-centered">
        <div class="column is-three-quarters">
            <vue-form :data="form"
                class="box animated fadeIn"
                v-if="initialised">
                <template slot="icon" slot-scope="props">
                    <div class="control has-icons-right">
                        <input class="input"
                            :class="{ 'is-danger': props.errors.has('icon') }"
                            @keydown="props.errors.clear(props.field.name)"
                            v-model="props.field.value"
                            type="text">
                        <span class="icon is-small is-right"
                            v-if="props.errors.has('icon')">
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
import { faExclamationTriangle } from '@fortawesome/fontawesome-free-solid';
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
