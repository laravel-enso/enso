<template>

    <file-uploader v-on="$listeners"
        v-bind="$attrs">
        <div slot="upload-button"
            slot-scope="{ openFileBrowser }"
            @click="openFileBrowser">
            <div class="file is-small">
                <label class="file-label">
                    <span class="file-cta">
                        <span class="file-icon">
                            <fa :icon="['fal', 'upload']"/>
                        </span>
                        <span class="file-label is-hidden-tablet-only">
                            {{ __('File(s)') }}…
                        </span>
                    </span>
                </label>
            </div>
        </div>
    </file-uploader>

</template>

<script>

import fontawesome from '@fortawesome/fontawesome';
import { faUpload }
    from '@fortawesome/fontawesome-free-solid/shakable.es';
import FileUploader from './FileUploader.vue';

fontawesome.library.add(faUpload);

export default {
    name: 'Uploader',

    components: { FileUploader },
};
</script>
