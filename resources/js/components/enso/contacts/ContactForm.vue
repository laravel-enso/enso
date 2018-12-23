<template>
    <modal show
        container="contact-form"
        v-on="$listeners">
        <vue-form class="box has-background-light"
            v-bind="$attrs"
            v-on="$listeners"
            ref="form">
            <a slot="actions"
                class="button is-warning"
                @click="
                    show = false;
                    $router.push({
                        name: 'administration.people.edit',
                        params: { person: field('person_id').value }
                    })">
                <span class="is-hidden-mobile">
                    {{ __('Edit Person') }}
                </span>
                <span class="icon">
                    <fa icon="user-tie"/>
                </span>
                <span class="is-hidden-mobile"/>
            </a>
        </vue-form>
    </modal>
</template>

<script>

import Modal from '../bulma/Modal.vue';
import VueForm from '../vueforms/VueForm.vue';

export default {
    name: 'ContactForm',

    components: { Modal, VueForm },

    methods: {
        field(field) {
            return this.$refs.form.data
                ? this.$refs.form.field(field)
                : null;
        },
    },
};

</script>

<style lang="scss">

    .contact-form {
        .modal-content {
            overflow: unset;
        }
    }

</style>
