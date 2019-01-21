<template>
    <modal show
        container="person-form"
        v-on="$listeners">
        <vue-form class="box has-background-light"
            v-bind="$attrs"
            v-on="$listeners"
            ref="form">
            <a slot="actions"
                class="button is-warning"
                @click="editPerson">
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
    name: 'PersonForm',

    components: { Modal, VueForm },

    methods: {
        editPerson() {
            if (!this.field('id').value) {
                return;
            }

            this.$emit('edit-person', this.field('id').value);
        },
        field(field) {
            return this.$refs.form.data
                ? this.$refs.form.field(field)
                : null;
        },
    },
};

</script>

<style lang="scss">

    .person-form {
        .modal-content {
            overflow: unset;
        }
    }

</style>
