<template>

    <file-uploader v-on="$listeners"
        v-bind="$attrs"
        :multiple="multiple"
        ref="uploader">
        <div slot="upload-button"
            slot-scope="{ openFileBrowser }"
            @click="openFileBrowser">
            <div :class="['file', {'is-small': isSmall}, {'is-large': isLarge}]">
                <label class="file-label">
                    <span class="file-cta">
                        <span class="file-icon">
                            <fa icon="upload"/>
                        </span>
                        <span class="file-label">
                            {{ __(label) }}…
                        </span>
                    </span>
                </label>
            </div>
        </div>
    </file-uploader>

</template>

<script>

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUpload }
    from '@fortawesome/free-solid-svg-icons';
import FileUploader from './FileUploader.vue';

library.add(faUpload);

export default {
    name: 'Uploader',

    components: { FileUploader },

    props: {
        isSmall: {
            type: Boolean,
            default: false,
        },
        isLarge: {
            type: Boolean,
            default: false,
        },
        multiple: {
            type: Boolean,
            default: false,
        },
    },

    computed: {
        label() {
            return this.multiple
                ? 'File(s)'
                : 'File';
        },
    },
};
</script>
