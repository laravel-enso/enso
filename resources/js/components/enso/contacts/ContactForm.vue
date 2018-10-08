<template>
    <modal v-on="$listeners"
        :show="true">
        <vue-form class="box has-background-light"
            v-on="$listeners"
            :data="form"/>
    </modal>
</template>

<script>

import Modal from '../bulma/Modal.vue';
import VueForm from '../vueforms/VueForm.vue';

export default {
    name: 'ContactForm',

    components: { Modal, VueForm },

    props: {
        form: {
            type: Object,
            default: null,
        },
    },
};

</script>
