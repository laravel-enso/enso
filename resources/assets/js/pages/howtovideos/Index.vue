<template>

    <div class="columns is-reverse-mobile">
        <div class="column is-three-quarters">
            <div class="field has-addons video-description animated fadeInDown"
                v-if="addingVideo || editingVideo">
                <div class="control">
                    <input class="input"
                        v-focus
                        type="text"
                        :placeholder="__('video name')"
                        v-model="video.name">
                </div>
                <div class="control is-expanded">
                    <input class="input"
                        type="text"
                        :placeholder="__('video description')"
                        v-model="video.description">
                </div>
                <div class="control animated fadeIn"
                    v-if="video.name">
                    <file-uploader :url="uploadLink"
                        :params="video"
                        :file-size-limit="20000000"
                        file-key="video"
                        @upload-successful="reset(); getVideos()"
                        v-if="addingVideo">
                        <div slot="upload-button"
                            slot-scope="{ openFileBrowser }">
                            <div class="file"
                                @click="openFileBrowser">
                                <label class="file-label">
                                    <span class="file-cta">
                                        <span class="file-icon">
                                            <fa icon="upload"/>
                                        </span>
                                        <span class="file-label">
                                            {{ __('Video') }}…
                                        </span>
                                    </span>
                                </label>
                            </div>
                        </div>
                    </file-uploader>
                    <a class="button is-outlined is-success"
                        @click="video = video; update()"
                        v-if="editingVideo">
                        <span class="icon">
                            <fa icon="check"/>
                        </span>
                    </a>
                </div>
                <div class="control animated fadeIn"
                    v-if="addingVideo || editingVideo">
                    <a class="button is-danger is-outlined"
                        @click="reset()">
                        <span class="icon">
                            <fa icon="ban"/>
                        </span>
                    </a>
                </div>
            </div>
            <div class="columns is-multiline">
                <div class="column is-half"
                    v-for="(vid, index) in filteredVideos"
                    :key="index">
                    <how-to-video :video="vid"
                        :tags="tags"
                        @start-tagging="video = vid; taggingId = video.id"
                        @stop-tagging="video = vid; taggingId = null; update()"
                        @delete="videos.splice(index, 1)"
                        @update="video = vid; update()"
                        @edit="video = vid; editingVideo = true;"/>
                </div>
            </div>
        </div>
        <div class="column is-one-quarter">
            <a class="button is-info is-fullwidth has-margin-bottom-medium"
                :disabled="addingVideo || editingVideo"
                @click="addingVideo = true"
                v-if="canAccess('howTo.videos.store')">
                <span>
                    {{ __('Add video') }}
                </span>
                <span class="icon is-small">
                    <fa icon="plus"/>
                </span>
            </a>
            <div class="box">
                <div class="level">
                    <div class="level-left">
                        <div class="level-item">
                            <label class="label">
                                <span class="icon is-small">
                                    <fa icon="tags"
                                        size="xs"/>
                                </span>
                                {{ __('Tags') }}
                            </label>
                        </div>
                    </div>
                    <div class="level-right">
                        <div class="level-item">
                            <a class="button is-small is-outlined is-success"
                                @click="addTag"
                                v-if="canAccess('howTo.tags.store') && query && tagIsNew">
                                <span class="icon is-small">
                                    <fa icon="check"/>
                                </span>
                            </a>
                            <a class="button is-small is-outlined is-danger"
                                v-if="canAccess('howTo.tags.update') && !query && selectedTag"
                                @click="editingTag = true">
                                <span class="icon is-small">
                                    <fa icon="pencil-alt"/>
                                </span>
                            </a>
                            <a class="button is-small is-outlined is-success has-margin-left-small"
                                v-if="editingTag"
                                @click="editingTag = false; updateTag()">
                                <span class="icon is-small">
                                    <fa icon="check"/>
                                </span>
                            </a>
                            <a class="button is-small is-outlined has-margin-left-small"
                                v-if="editingTag"
                                @click="editingTag = false">
                                <span class="icon is-small">
                                    <fa icon="ban"/>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <input class="input"
                    type="text"
                    v-model="selectedTag.name"
                    v-if="editingTag">
                <input class="input"
                    type="text"
                    v-model="query"
                    @keypress.enter="addTag"
                    v-else>
                <div class="field is-grouped is-grouped-multiline has-margin-top-medium">
                    <div class="control"
                        v-for="tag in filteredTags"
                        :key="tag.id">
                        <div class="tags has-addons">
                            <span :class="['tag is-clickable', { 'is-warning' : tag.selected }]"
                                @click="taggingId
                                    ? video.tagList.push(tag.id)
                                    : tag.selected = !tag.selected">
                                {{ tag.name }}
                            </span>
                            <a class="tag is-delete"
                                @click="deleteTag(tag.id)"
                                v-if="canAccess('howTo.tags.destroy') && !taggingId"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import fontawesome from '@fortawesome/fontawesome';
import { faPlus, faUpload, faBan, faCheck, faPencilAlt, faTags } from '@fortawesome/fontawesome-free-solid/shakable.es';
import FileUploader from '../../components/enso/fileuploader/FileUploader.vue';
import HowToVideo from '../../components/enso/howtovideos/HowToVideo.vue';

fontawesome.library.add([faPlus, faUpload, faBan, faCheck, faPencilAlt, faTags]);

export default {
    components: { FileUploader, HowToVideo },

    data() {
        return {
            videos: [],
            query: '',
            tags: [],
            video: {
                name: null,
                description: null,
                tagList: [],
            },
            addingVideo: false,
            editingVideo: false,
            taggingId: null,
            editingTag: false,
        };
    },

    computed: {
        uploadLink() {
            return route('howTo.videos.store');
        },
        filteredVideos() {
            if (this.taggingId) {
                return this.videos.filter(({ id }) => id === this.taggingId);
            }

            return this.selectedTags.length === 0
                ? this.videos
                : this.videos.filter(({ tagList }) =>
                    tagList.filter(tagId =>
                        this.selectedTags.findIndex(({ id }) =>
                            tagId === id) !== -1).length === this.selectedTags.length);
        },
        filteredTags() {
            return !this.query
                ? this.tags.filter(({ id }) => !this.video.tagList.includes(id))
                : this.tags.filter(({ name, id }) => !this.video.tagList.includes(id) &&
                    name.toLowerCase().indexOf(this.query.toLowerCase()) > -1);
        },
        tagIsNew() {
            return !!this.query && this.tags.findIndex(({ name }) =>
                name.toLowerCase() === this.query.toLowerCase()) === -1;
        },
        selectedTags() {
            return this.tags.filter(({ selected }) => selected);
        },
        selectedTag() {
            return this.selectedTags.length === 1 && this.selectedTags[0];
        },
    },

    created() {
        this.getVideos();
        this.getTags();
    },

    methods: {
        getVideos() {
            axios.get(route('howTo.videos.index'))
                .then(({ data }) => (this.videos = data))
                .catch(error => this.handleError(error));
        },
        getTags() {
            axios.get(route('howTo.tags.index'))
                .then(({ data }) => (this.tags = data))
                .catch(error => this.handleError(error));
        },
        reset() {
            this.video = {
                name: null,
                description: null,
                tagList: [],
            };

            this.addingVideo = false;
            this.editingVideo = false;
            this.taggingId = null;
            this.editingTag = false;
        },
        tagVideo(tagMode) {
            if (!tagMode) {
                this.video.tagList.push(...this.selectedTags);
                this.update();
            }

            this.deselectTags();
        },
        deselectTags() {
            this.tags.map((tag) => {
                tag.selected = false;
                return tag;
            });
        },
        addTag() {
            if (!this.tagIsNew) {
                return;
            }

            axios.post(route('howTo.tags.store'), { name: this.query })
                .then(({ data }) => {
                    this.tags.push(data);
                    this.query = '';
                }).catch(error => this.handleError(error));
        },
        updateTag() {
            axios.patch(route('howTo.tags.update', this.selectedTag.id), {
                name: this.selectedTag.name,
            }).catch(error => this.handleError(error));
        },
        deleteTag(tagId) {
            axios.delete(route('howTo.tags.destroy', tagId))
                .then(() => {
                    const index = this.tags.findIndex(({ id }) => id === tagId);
                    this.tags.splice(index, 1);
                }).catch(error => this.handleError(error));
        },
        update() {
            axios.patch(route('howTo.videos.update', this.video.id), this.video)
                .then(({ data }) => {
                    this.$toastr.success(data.message);
                    this.reset();
                }).catch(error => this.handleError(error));
        },
    },
};

</script>
