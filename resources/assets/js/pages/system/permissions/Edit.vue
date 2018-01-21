<template>

    <div class="columns is-centered">
        <div class="column is-three-quarters">
            <vue-form :data="form"
                class="box animated fadeIn"
                v-if="initialised">
            </vue-form>
        </div>
    </div>

</template>

<script>

import VueForm from '../../../components/enso/vueforms/VueForm.vue';

export default {
    components: { VueForm },

    data() {
        return {
            initialised: false,
            form: {},
        };
    },

    created() {
        axios.get(route(this.$route.name, this.$route.params.id, false)).then(({ data }) => {
            this.form = data.form;
            this.initialised = true;
        }).catch(error => this.handleError(error));
    },
};

</script>
