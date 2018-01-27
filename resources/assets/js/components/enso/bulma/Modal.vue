<template>

    <transition enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut">
        <div :class="['modal', { 'is-active': show }]">
            <div class="modal-background"></div>
            <div class="modal-card"
                v-if="card">
                <header class="modal-card-head">
                    <slot name="header">
                    </slot>
                </header>
                <section class="modal-card-body">
                    <slot name="body">
                        {{ __("The selected item is about to be deleted! Are you sure?") }}
                    </slot>
                </section>
                <footer class="modal-card-foot">
                    <slot name="footer">
                        <button class="button"
                              @click="$emit('cancel')">
                              {{ __("Cancel") }}
                          </button>
                          <button class="button is-success"
                            @click="$emit('commit')">
                            {{ __("Yes") }}
                        </button>
                    </slot>
                </footer>
            </div>
            <div v-else class="modal-content">
                <div class="box">
                    <slot name="content">
                        <h5 class="subtitle is-5">
                            {{ __("The selected item is about to be deleted! Are you sure?") }}
                        </h5>
                    </slot>
                    <hr>
                    <div class="level">
                        <div class="level-left"></div>
                        <div class="level-right">
                            <div class="level-item">
                                <slot name="controls">
                                    <button class="button is-success"
                                          @click="$emit('cancel')">
                                          {{ __("Cancel") }}
                                    </button>
                                    <button class="button is-danger has-margin-left-small"
                                        @click="$emit('commit')">
                                        {{ __("Yes") }}
                                    </button>
                                </slot>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button class="modal-close is-large"
                aria-label="close"
                @click="$emit('cancel')"
                v-if="!card">
            </button>
        </div>
    </transition>

</template>

<script>

import { mapGetters } from 'vuex';

export default {
    props: {
        show: {
            type: Boolean,
            required: true,
        },
        card: {
            type: Boolean,
            default: false,
        },
    },

    computed: {
        ...mapGetters('locale', ['__']),
    },
};

</script>

<style>

    footer.modal-card-foot {
        justify-content: flex-end;
    }

    .modal.is-active {
        z-index: 10;
    }

</style>
