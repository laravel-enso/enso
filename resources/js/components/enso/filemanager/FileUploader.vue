<template>

    <form class="file-upload is-marginless"
        @submit.prevent>
        <input :multiple="multiple"
            class="file-input hidden"
            type="file"
            ref="input"
            @change="upload">
        <slot name="upload-button"
            :open-file-browser="openFileBrowser">
            <a class="icon is-small"
                @click="openFileBrowser">
                <fa icon="upload"/>
            </a>
        </slot>
    </form>

</template>

<script>

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

library.add(faUpload);

export default {
    name: 'FileUploader',

    props: {
        multiple: {
            type: Boolean,
            default: false,
        },
        url: {
            type: String,
            required: true,
        },
        fileSizeLimit: {
            type: Number,
            default: 20000000,
        },
        params: {
            type: Object,
            default: null,
        },
        fileKey: {
            type: String,
            default: 'file',
        },
    },

    data() {
        return {
            input: null,
            formData: new FormData(),
            succesfull: 0,
        };
    },

    methods: {
        openFileBrowser() {
            this.$refs.input.click();
        },
        upload() {
            this.$emit('upload-start');
            this.setFormData();

            if (this.succesfull === 0) {
                return;
            }

            axios.post(this.url, this.formData).then((response) => {
                this.reset();
                this.$emit('upload-successful', response.data);
            }).catch((error) => {
                this.reset();
                this.$emit('upload-error');
                const { data, status } = error.response;

                if (status === 422) {
                    Object.keys(data.errors)
                        .forEach(key => this.$toastr.error(data.errors[key][0]));
                    return;
                }

                this.handleError(error);
            });
        },
        setFormData() {
            const { files } = this.$refs.input;
            this.addFiles(files);

            if (this.succesfull > 0) {
                this.addParams();
            }
        },
        addFiles(files) {
            if (!this.multiple) {
                this.addFile(this.fileKey, files[0]);
                return;
            }

            for (let i = 0; i < files.length; i++) {
                if (this.sizeCheckPasses(files[i])) {
                    this.addFile(`${this.fileKey}_${i}`, files[i]);
                    this.succesfull++;
                }
            }
        },
        addFile(key, file) {
            if (this.sizeCheckPasses(file)) {
                this.formData.append(key, file);
                this.succesfull++;
            }
        },
        addParams() {
            if (this.params) {
                Object.entries(this.params).forEach(([key, param]) => {
                    const value = typeof param === 'object'
                        ? JSON.stringify(param)
                        : param;

                    this.formData.append(key, value);
                });
            }
        },
        sizeCheckPasses(file) {
            if (file.size > this.fileSizeLimit) {
                this.$toastr.warning(`File size Limit of ${this.fileSizeLimit} Kb exceeded by ${file.name}`);
                return false;
            }

            return true;
        },
        reset() {
            this.$el.reset();
            this.formData = new FormData();
            this.succesfull = 0;
        },
    },
};

</script>

<style>

    button.file-upload {
        background: transparent;
    }

    .file-input.hidden {
        display: none;
    }

</style>
