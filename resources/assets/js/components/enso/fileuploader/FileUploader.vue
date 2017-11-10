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
            default: false,
        },
        url: {
            type: String,
            required: true,
        },
        fileSizeLimit: {
            type: Number,
            default: 8388608,
            validator: value => value <= 8388608,
        },
        params: {
            type: Object,
            default: null,
        },
    },

    data() {
        return {
            input: null,
            formData: new FormData(),
        };
    },

    methods: {
        openFileBrowser() {
            this.input.click();
        },
        upload() {
            this.$emit('upload-start');
            this.setFormData();

            axios.post(this.url, this.formData).then((response) => {
                this.resetForm();
                this.$emit('upload-successful', response.data);
            }).catch((error) => {
                this.resetForm();
                this.$emit('upload-error');
                this.handleError(error);
            });
        },
        setFormData() {
            const { files } = this.input;
            this.addFiles(files);
            this.addParams();
        },
        addFiles(files) {
            for (let i = 0; i < files.length; i++) {
                if (this.sizeCheckPasses(files[i])) {
                    this.formData.append(`file_${i}`, files[i]);
                }
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
                toastr.warning(`File size Limit of ${this.fileSizeLimit} Kb excedeed by ${file.name}`);
                return false;
            }

            return true;
        },
        resetForm() {
            this.$el.reset();
        },
    },

    mounted() {
        this.input = this.$el.querySelector('input');
    },
};

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
