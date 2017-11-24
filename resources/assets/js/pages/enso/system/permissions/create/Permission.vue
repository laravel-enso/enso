<template>

    <vue-form :data="form"
        class="box animated fadeIn"
        v-if="initialised">
    </vue-form>

</template>

<script>

import VueForm from '../../../../../components/enso/vueforms/VueForm.vue';

export default {
    components: { VueForm },

    data() {
        return {
            initialised: false,
            form: {},
        };
    },

    created() {
        axios.get(route('system.permissions.create', null, false)).then((response) => {
            this.form = response.data.form;
            this.initialised = true;
        }).catch(error => this.handleError(error));
    },
};

</script>
