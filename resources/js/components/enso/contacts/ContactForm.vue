<template>
    <modal v-on="$listeners"
        :show="true">
        <vue-form class="box"
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

    created() {
        this.field('contactable_type').value = this.type;
        this.field('contactable_id').value = this.id;
    },

    methods: {
        field(field) {
            return this.form.sections
                .reduce((fields, section) => fields.concat(section.fields), [])
                .find(item => item.name === field);
        },
    },
};

</script>
