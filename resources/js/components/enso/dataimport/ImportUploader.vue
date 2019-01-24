<template>
    <div class="wrapper">
        <file-uploader :url="path"
            :params="params"
            :file-size-limit="fileSizeLimit"
            file-key="import"
            v-on="$listeners"
            @upload-start="running = true"
            @upload-error="running = false"
            @upload-successful="uploaded">
            <a slot="upload-button"
                slot-scope="{ openFileBrowser }"
                :class="['button is-success', { 'is-loading': running }]"
                @click="openFileBrowser"
                v-if="!hasErrors">
                <slot>
                    <span>{{ __('Select file for import') }}</span>
                    <span class="icon is-small">
                        <fa icon="upload"/>
                    </span>
                </slot>
            </a>
        </file-uploader>
        <modal :show="hasErrors"
            v-on="$listeners"
            container="import-summary"
            @close="summary = null"
            v-if="hasErrors">
            <div class="box">
                <p class="title is-4 has-text-centered">
                    <fa icon="exclamation-triangle"/>
                    {{ __('Structure Errors') }}
                </p>
                <div
                    v-for="(errors, category) in summary.errors"
                    :key="category">
                    <p class="title is-6 has-text-centered is-marginless">
                        {{ category }}:
                    </p>
                    <div class="tags is-centered has-padding-top-large has-padding-bottom-large">
                        <span class="tag is-medium is-bold has-text-danger"
                            v-for="error in errors"
                            :key="error">
                            {{ error }}
                        </span>
                    </div>
                </div>
            </div>
        </modal>
    </div>
</template>

<script>

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import FileUploader from '../filemanager/FileUploader.vue';
import Modal from '../bulma/Modal.vue';

library.add(faUpload);


export default {
    name: 'ImportUploader',

    components: { FileUploader, Modal },

    props: {
        fileSizeLimit: {
            type: Number,
            default: 100000000,
        },
        params: {
            type: Object,
            required: true,
            validator: v => Object.keys(v).includes('type'),
        },
        path: {
            type: String,
            required: true,
        },
    },

    data: () => ({
        running: false,
        summary: null,
    }),

    computed: {
        hasErrors() {
            return !!this.summary
                && !!this.summary.errors
                && Object.keys(this.summary.errors).length > 0;
        },
    },

    methods: {
        uploaded($event) {
            this.summary = $event;
            this.running = false;
            this.$emit('upload-successful');
        },
    },
};

</script>
