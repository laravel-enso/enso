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
                            {{ i18n(message || "Are you sure that you want to perform this action?") }}
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
                                          {{ i18n("Cancel") }}
                                      </button>
                                      <button class="button is-danger has-margin-left-small"
                                        @click="$emit('commit-action')">
                                        {{ i18n("Yes") }}
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
        i18n: {
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
