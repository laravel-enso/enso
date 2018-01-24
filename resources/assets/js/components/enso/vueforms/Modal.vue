<template>

    <transition enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut">
        <div :class="['modal', { 'is-active': show }]">
            <div class="modal-background"></div>
            <div class="modal-content">
                <div class="box">
                    <h5 class="subtitle is-5">
                        {{ __(message || "Are you sure ?") }}
                    </h5>
                    <hr>
                    <div class="level">
                        <div class="level-left"></div>
                        <div class="level-right">
                            <div class="level-item">
                                <button class="button is-success"
                                    @click="$emit('cancel')">
                                    {{ __("Cancel") }}
                                </button>
                                <button class="button is-danger has-margin-left-small"
                                    @click="$emit('commit')">
                                    {{ __("Yes") }}
                                </button>
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
        z-index: 10;
    }

</style>
