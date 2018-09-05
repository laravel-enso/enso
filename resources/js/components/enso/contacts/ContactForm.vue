<template>
    <modal v-on="$listeners"
        :show="true">
        <vue-form class="box"
            v-on="$listeners"
            :params="params"
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
        id: {
            type: Number,
            default: null,
        },
        type: {
            type: String,
            default: '',
        },
        form: {
            type: Object,
            default: null,
        },
    },

    computed: {
        params() {
            return {
                contactable_id: this.id,
                contactable_type: this.type,
            };
        },
    },
};

</script>
