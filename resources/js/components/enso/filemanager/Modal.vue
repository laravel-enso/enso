<template>
    <modal v-on="$listeners"
        :show="show">
        <div class="box">
            <div class="field has-addons">
                <div class="control is-expanded">
                    <input class="input"
                        :value="link"
                        v-select-on-focus
                        v-focus>
                </div>
                <div class="control">
                    <a class="button"
                        @click="copy">
                        <span class="icon is-small">
                            <fa icon="copy"/>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </modal>
</template>

<script>

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import Modal from '../../../components/enso/bulma/Modal.vue';

library.add(faCopy);

export default {
    components: { Modal },

    props: {
        show: {
            type: Boolean,
            required: true,
        },
        link: {
            type: String,
            default: '',
            required: true,
        },
    },

    methods: {
        copy() {
            document.execCommand('copy');
            this.$toastr.success(this.__('Copied to clipboard'));
        },
    },
};

</script>
