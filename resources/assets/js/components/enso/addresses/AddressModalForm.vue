<template>
    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
        <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-content">
                <span class="icon is-pulled-right">
                  <i class="fa fa-times close-button" @click="$emit('form-close')"></i>
                </span>

                <vue-form class="box"
                    :data="form"
                    :params="params"
                    v-on="$listeners">
                        <template
                            v-for="field in form.fields"
                            v-if="field.meta.custom"
                            :slot="field.column"
                            slot-scope="props">
                                <slot
                                    :name="props.field.column"
                                    :field="props.field"
                                    :errors="props.errors">
                                </slot>
                        </template>

                </vue-form>
            </div>
            <button class="modal-close is-large" aria-label="close"></button>
        </div>
    </transition>
</template>

<script>

import { mapGetters } from 'vuex';
import VueForm from '../vueforms/VueForm.vue';

export default {
    components: { VueForm },
    props: {
        form: {
            type: Object,
            default: null,
        },
        id: {
            type: Number,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
    },

    computed: {
        ...mapGetters('locale', ['__']),
        params() {
            return {
                id: this.id,
                type: this.type,
            };
        },
    },

    data() {
        return {
            errors: {},
        };
    },
};

</script>

<style scoped>

    .close-button {
        z-index: 1;
        position: relative;
        cursor: hand;
    }

    .modal.is-active {
        z-index: 1100;
    }

    .modal-content {
        width: 80%;
    }
</style>
