<template>

    <form class="file-upload is-marginless"
        @submit.prevent>
        <div class="file">
            <label class="file-label">
                <input :multiple="multiple"
                    class="file-input hidden"
                    type="file"
                    @change="upload">
                    <slot name="upload-button"
                        :open-file-browser="openFileBrowser"
                        @click="openFileBrowser">
                        <a class="icon is-small">
                            <i class="fa fa-upload"></i>
                        </a>
                    </slot>
            </label>
        </div>
    </form>

</template>

<script>

    export default {
        props: {
            multiple: {
                type: Boolean,
                default: false
            },
            url: {
                type: String,
                required: true
            },
            fileSizeLimit: {
                type: Number,
                default: 8388608,
                validator(value) {
                    return value <= 8388608;
                }
            }
        },

        computed: {
            input() {
                return this.$el.querySelector('input');
            }
        },

        methods: {
            openFileBrowser() {
                this.input.click();
            },
            upload() {
                this.$emit('upload-start');

                axios.post(this.url, this.getFormData()).then(response => {
                    this.resetForm();
                    this.$emit('upload-successful', response.data);
                }).catch(error => {
                    this.resetForm();
                    this.$emit('upload-error');
                    this.handleError(error);
                });
            },
            getFormData() {
                let formData = new FormData(),
                    files = this.input.files;

                for (let i = 0; i < files.length; i++) {
                    if (this.sizeCheckPasses(files[i])) {
                        formData.append("file_" + i, files[i]);
                    }
                }

                return formData;
            },
            sizeCheckPasses(file) {
                if (file.size > this.fileSizeLimit) {
                    toastr.warning('File size Limit of ' + this.fileSizeLimit + ' Kb excedeed by ' + file.name);
                    return false;
                }

                return true;
            },
            resetForm() {
                this.$el.reset();
            }
        }
    }

</script>

<style>

    form.file-upload {
        display: inline-table;
    }

    button.file-upload {
        background: transparent;
    }

    .file-input.hidden {
        display: none;
    }

</style>