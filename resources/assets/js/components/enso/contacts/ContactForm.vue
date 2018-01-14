<template>
    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
        <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-content">
                <a class="delete is-pulled-right has-margin-top-medium has-margin-right-medium"
                    @click="close">
                </a>
                <vue-form
                        @destroy="$emit('destroy')"
                        @submit="$emit('submit')"
                        v-if="form"
                        class="box"
                        :params="params"
                        :data="form">
                </vue-form>
            </div>
        </div>
    </transition>
</template>

<script>

import VueForm from '../vueforms/VueForm.vue';

export default {
    name: 'ContactForm',

    components: { VueForm },

    props: {
        id: {
            default: null,
        },
        type: {
            type: String,
            default: '',
        },
        action: {
            type: String,
            required: true,
        },
        contactId: {
            type: Number,
            default: null,
        },
    },

    data() {
        return {
            form: null,
        };
    },

    computed: {
        params() {
            return {
                id: this.id,
                type: this.type,
            };
        },
    },

    created() {
        this[this.action]();
    },

    methods: {
        close() {
            this.form = null;
            this.$emit('form-close');
        },
        edit() {
            axios.get(route('core.contacts.edit', this.contactId, false)).then(({ data }) => {
                this.$emit('form-loaded', data);
                this.form = data.editForm;
            }).catch((error) => {
                this.handleError(error);
            });
        },
        create() {
            const params = { contactable_id: this.id, contactable_type: this.type };
            axios.get(route('core.contacts.create', params, false)).then(({ data }) => {
                this.form = data.createForm;
            }).catch((error) => {
                this.handleError(error);
            });
        },
    },
};

</script>
