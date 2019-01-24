<template>
    <modal v-on="$listeners"
        :show="show">
        <div class="box">
            <h5 class="subtitle is-5">
                {{ i18n(message || "Are you sure that you want to delete the template file?") }}
            </h5>
            <hr>
            <div class="level">
                <div class="level-left"/>
                <div class="level-right">
                    <div class="level-item">
                        <button class="button is-outlined"
                            @click="$emit('close')">
                            {{ i18n("Cancel") }}
                        </button>
                        <button class="button is-danger has-margin-left-small"
                            @click="$emit('commit')"
                            v-focus>
                            {{ i18n("Yes") }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </modal>
</template>

<script>

import Modal from '../../components/enso/bulma/Modal.vue';

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
        i18n: {
            type: Function,
            required: true,
        },
    },
};

</script>
