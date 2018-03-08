<template>

    <modal v-on="$listeners"
        :show="show">
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
                            @click="$emit('close')">
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
    </modal>

</template>

<script>

import Modal from '../../../components/enso/bulma/Modal.vue';

export default {
    components: { Modal },

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
