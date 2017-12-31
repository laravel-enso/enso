<template>

    <transition enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut">
        <div class="modal"
            :class="{ 'is-active': show }"
            v-if="show">
            <div class="modal-background"></div>
            <div class="table-modal modal-content">
                <div class="box">
                    <slot name="content">
                        <h5 class="subtitle is-5">
                            {{ __(message || "Are you sure ?") }}
                        </h5>
                    </slot>
                    <hr>
                    <div class="level">
                        <div class="level-left"></div>
                        <div class="level-right">
                            <div class="level-item">
                                <slot name="controls">
                                    <button class="button is-success"
                                          @click="$emit('cancel-action')">
                                          {{ __("Cancel") }}
                                      </button>
                                      <button class="button is-danger has-margin-left-small"
                                        @click="$emit('commit-action')">
                                        {{ __("Yes") }}
                                    </button>
                                </slot>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>

</template>

<script>

export default {
    props: {
        show: {
            type: Boolean,
            required: true,
        },
        message: {
            type: String,
            default: null,
        },
        __: {
            type: Function,
            required: true,
        },
    },
};

</script>

<style>

    .modal.is-active {
        z-index: 1100;
    }

</style>
