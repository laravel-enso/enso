<template>
    <div class="vue-dropzone dropzone"/>
</template>

<script>

import Dropzone from 'dropzone';
// add aws support

Dropzone.autoDiscover = false;

export default {
    props: {
        options: {
            type: Object,
            required: false,
            default: () => ({}),
        },
        awss3: {
            type: Object,
            required: false,
            default: null,
        },
        url: {
            type: String,
            required: false,
            default: 'http://ensov2.test/api/core/documents',
        },
        multiple: {
            type: Boolean,
            default: false,
        },
        fileSizeLimit: {
            type: Number,
            default: 8,
        },
        fileKey: {
            type: String,
            default: 'file',
        },
        acceptedFiles: {
            type: String,
            default: null,
        },
    },

    data: () => ({
        formData: new FormData(),
        isS3: false,
        isS3OverridesServerPropagation: false,
        wasQueueAutoProcess: true,
    }),

    computed: {
        settings() {
            return {
                thumbnailWidth: 200,
                thumbnailHeight: 200,
                uploadMultiple: this.multiple,
                maxFilesize: this.fileSizeLimit,
                url: this.url,
                acceptedFiles: this.acceptedFiles,
                ...this.options,
            };

        // check duplicates
        },
    },

    mounted() {
        this.dropzone = new Dropzone(this.$el, this.settings);
        // add events
    },
};
</script>

<style lang="scss">
@import '~dropzone/dist/dropzone.css';
</style>
