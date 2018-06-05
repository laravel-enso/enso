<template>

    <card icon="video"
        :title="video.name"
        :controls="5">
        <card-control slot="control-1"
            v-tooltip="video.description">
            <span class="icon">
                <fa icon="info-circle"/>
            </span>
        </card-control>
        <card-control slot="control-2"
            v-if="!video.poster_saved_name && canAccess('howTo.posters.store')">
            <file-uploader :url="uploadLink"
                :params="{ videoId: video.id }"
                file-key="poster"
                @upload-successful="video.poster_saved_name = $event.saved_name">
                <span class="icon"
                    slot="upload-button"
                    slot-scope="{ openFileBrowser }"
                    @click="openFileBrowser">
                        <fa :icon="['far', 'image']"/>
                </span>
            </file-uploader>
        </card-control>
        <card-control slot="control-3"
            v-if="canAccess('howTo.videos.update')">
            <span class="icon"
                @click="$emit('edit')">
                <fa :icon="['far', 'edit']"/>
            </span>
        </card-control>
        <card-control slot="control-4"
            v-if="canAccess('howTo.videos.update')">
            <span class="icon"
                @click="tagging = !tagging; $emit(tagging ? 'start-tagging' : 'stop-tagging')">
                <fa :icon="tagging ? 'check' : 'tags'"/>
            </span>
        </card-control>
        <card-control slot="control-5"
            v-if="canAccess('howTo.posters.destroy') && video.poster_saved_name">
            <popover @confirm="destroyPoster"
                v-tooltip="__('Remove poster')">
                <span class="icon is-small">
                    <fa :icon="['far', 'trash-alt']"/>
                </span>
            </popover>
        </card-control>
        <card-control slot="control-5"
            v-else-if="canAccess('howTo.videos.destroy')">
            <popover @confirm="destroyVideo"
                v-tooltip="__('Delete video')">
                <span class="icon is-small">
                    <fa :icon="['far', 'trash-alt']"/>
                </span>
            </popover>
        </card-control>
        <video-player :options="options()"
            class="vjs-custom-skin"
            playsinline/>
        <div slot="footer"
            class="card-footer">
            <div class="card-footer-item">
                <div class="field is-grouped is-grouped-multiline"
                    v-if="video.tagList.length">
                    <div class="control"
                        v-for="(tag, index) in tagList"
                        :key="index">
                        <div class="tags has-addons">
                            <span class="tag">
                                {{ tag.name }}
                            </span>
                            <a class="tag is-delete"
                                 @click="removeTag(tag)"
                                v-if="canAccess('howTo.videos.update') && tagging"/>
                        </div>
                    </div>
                </div>
                <span class="tag"
                    v-else>
                    {{ __('untagged') }}
                </span>
            </div>
        </div>
    </card>
</template>

<script>

import { VTooltip } from 'v-tooltip';
import { videoPlayer } from 'vue-video-player';
import 'video.js/dist/video-js.css';
import 'vue-video-player/src/custom-theme.css';
import fontawesome from '@fortawesome/fontawesome';
import { faInfo, faTags, faInfoCircle } from '@fortawesome/fontawesome-free-solid/shakable.es';
import { faTrashAlt, faEdit, faImage } from '@fortawesome/fontawesome-free-regular/shakable.es';
import Card from '../bulma/Card.vue';
import CardControl from '../bulma/CardControl.vue';
import Popover from '../bulma/Popover.vue';
import FileUploader from '../fileuploader/FileUploader.vue';

fontawesome.library.add([faTrashAlt, faInfo, faTags, faEdit, faImage, faInfoCircle]);

export default {
    name: 'HowToVideo',

    directives: { tooltip: VTooltip },

    components: {
        Card, CardControl, Popover, videoPlayer, FileUploader,
    },

    props: {
        video: {
            type: Object,
            required: true,
        },
        tags: {
            type: Array,
            required: true,
        },
    },

    data() {
        return {
            tagging: false,
        };
    },

    computed: {
        uploadLink() {
            return route('howTo.posters.store');
        },
        tagList() {
            return this.tags.filter(({ id }) =>
                this.video.tagList.includes(id));
        },
    },

    methods: {
        options() {
            return {
                muted: false,
                language: 'en',
                playbackRates: [0.7, 1.0, 1.5, 2.0],
                aspectRatio: '16:9',
                sources: [{
                    type: 'video/mp4',
                    src: route('howTo.videos.show', this.video.id),
                }],
                poster: this.video.poster_saved_name
                    ? route('howTo.posters.show', this.video.id)
                    : '',
            };
        },
        destroyPoster() {
            axios.delete(route('howTo.posters.destroy', this.video.id))
                .then(({ data }) => {
                    this.$toastr.success(data.message);
                    this.video.poster_saved_name = null;
                    this.video.poster_original_name = null;
                }).catch(error => this.handleError(error));
        },
        destroyVideo() {
            axios.delete(route('howTo.videos.destroy', this.video.id))
                .then(({ data }) => {
                    this.$toastr.success(data.message);
                    this.$emit('delete');
                }).catch(error => this.handleError(error));
        },
        removeTag(tag) {
            const index = this.video.tagList.findIndex(id => id === tag.id);
            this.video.tagList.splice(index, 1);
        },
    },
};

</script>

<style lang="scss" scoped>

    .card-footer {
        white-space: nowrap;
        overflow: scroll;
        text-overflow: ellipsis;
    }

</style>
