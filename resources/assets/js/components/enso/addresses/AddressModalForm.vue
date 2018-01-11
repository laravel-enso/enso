<template>
    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
        <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-content" style="width:80%">
                <div class="box">
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

<style>

    .close-button {
        z-index: 1;
        position: relative;
        cursor: hand;
    }

    .modal.is-active {
        z-index: 1100;
    }

    .address-modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        transition: opacity .3s ease;
    }

    .address-modal-container {
        min-width: 250px;
        min-height: 415px;
        width:80%;
        max-height: 90%;
        overflow-y: auto;
        margin: 0 auto;
        padding: 0;
        color: #3c3a3a;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
    }

    .address-modal-container .box {
        margin-bottom: 0;
        padding-left: 5px;
        padding-right: 5px;
    }
</style>
