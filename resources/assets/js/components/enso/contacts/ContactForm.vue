<template>
    <transition enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut">
        <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-content">
                <a class="delete is-pulled-right has-margin-top-medium has-margin-right-medium"
                    @click="$emit('form-close')">
                </a>
                <vue-form class="box"
                    @destroy="$emit('destroy')"
                    @submit="$emit('submit')"
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
        form: {
            type: Object,
            default: null,
        },
    },

    computed: {
        params() {
            return {
                id: this.id,
                type: this.type,
            };
        },
    },
};

</script>
