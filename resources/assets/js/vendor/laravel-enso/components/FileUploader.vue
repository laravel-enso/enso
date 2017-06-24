<template>

    <span>
        <span @click="openFileBrowser" class="file-upload">
            <slot name="upload-button">
                <i class="btn btn-xs btn-primary fa fa-upload"></i>
            </slot>
        </span>
        <form :id="'file-form-' + _uid">
            <input :id="'upload-input-' + _uid"
                type="file"
                :name="multiple ? 'files[]' : 'file'"
                :multiple="multiple"
                class="hidden"
                @change="upload">
        </form>
    </span>

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

        data() {
            return {
                input: null,
            };
        },

        methods: {
            openFileBrowser() {
                this.input.click();
            },
            upload() {
                axios.post(this.url, this.getFormData()).then(response => {
                    this.resetForm();
                    this.$emit('upload-successful', response.data);
                }).catch(error => {
                    this.resetForm();
                    this.reportEnsoException(error);
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
                if (file.size > this.maxFileSize) {
                    toastr.warning('File size Limit of ' + this.maxFileSize + ' Kb excedeed by ' + file.name);

                    return false;
                }

                return true;
            },
            resetForm() {
                let form = document.getElementById('file-form-' + this._uid);
                form.reset();
            }
        },

        mounted() {
            this.input = document.getElementById('upload-input-' + this._uid);
        }
    }

</script>

<style>

    button.file-upload {
        background: transparent;
    }

</style>