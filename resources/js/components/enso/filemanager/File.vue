<template>

    <div class="box raises-on-hover file-box has-padding-medium">
        <figure class="image is-32x32 avatar">
            <img class="is-rounded"
                :src="avatarLink(file.owner.avatarId)">
        </figure>
        <p class="has-text-centered has-margin-bottom-medium">
            <fa :icon="icon"
                size="3x"/>
        </p>
        <h5 class="title is-5 has-text-centered">
            {{ file.name }}
        </h5>
        <p class="has-text-centered">
            <span class="icon is-small">
                <fa icon="calendar-alt"/>
            </span>
            {{ timeFromNow(file.createdAt) }}
        </p>
        <p class="has-margin-top-small has-text-centered">
            <span class="icon is-small">
                <fa icon="database"/>
            </span>
            {{ file.size / 1000 | numberFormat }} KB
        </p>
        <div class="has-text-centered has-margin-top-medium">
            <div class="details">
                <button class="button is-naked"
                    @click.stop="link">
                    <span class="icon">
                        <fa icon="link"/>
                    </span>
                </button>
                <button class="button is-naked"
                    @click.stop="show"
                    v-if="isViewable">
                    <span class="icon">
                        <fa icon="eye"/>
                    </span>
                </button>
                <a class="button is-naked"
                    :href="downloadLink">
                    <span class="icon">
                        <fa icon="cloud-download-alt"/>
                    </span>
                </a>
                <popover placement="top"
                    @confirm="$emit('delete')"
                    v-if="file.isDeletable">
                    <button class="button is-naked">
                        <span class="icon">
                            <fa icon="trash-alt"/>
                        </span>
                    </button>
                </popover>
            </div>
        </div>

        <modal :show="temporaryLink !== ''"
            :link="temporaryLink"
            @close="temporaryLink = ''"/>
    </div>

</template>

<script>

import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faFile, faEye, faCloudDownloadAlt, faTrashAlt, faLink, faCalendarAlt,
    faDatabase, faImage, faFileExcel, faFilePdf, faFileWord, faFilePowerpoint,
} from '@fortawesome/free-solid-svg-icons';
import Popover from '../bulma/Popover.vue';
import formatDistance from '../../../modules/enso/plugins/date-fns/formatDistance';
import Modal from './Modal.vue';


import Tabs from '../bulma/Tabs.vue';
import Tab from '../bulma/Tab.vue';

library.add([
    faFile, faEye, faCloudDownloadAlt, faTrashAlt, faLink, faCalendarAlt,
    faDatabase, faImage, faFileExcel, faFilePdf, faFileWord, faFilePowerpoint,
]);

library.add(faFile);

const Images = ['jpg', 'png', 'jpeg', 'gif'];
const SpreadSheets = ['xls', 'xlsx', 'csv', 'numbers'];
const Documents = ['doc', 'docx', 'pages'];
const PPTs = ['ppt', 'pptx', 'key'];
const Pdfs = ['pdf'];

export default {
    name: 'File',

    components: {
        Tabs, Tab, Popover, Modal,
    },

    props: {
        file: {
            type: Object,
            required: true,
        },
    },

    data() {
        return {
            temporaryLink: '',
        };
    },

    computed: {
        downloadLink() {
            return route('core.files.download', this.file.id);
        },
        openLink() {
            return route('core.files.show', this.file.id);
        },
        isImage() {
            return Images.includes(this.file.name.split('.').pop());
        },
        isPdf() {
            return Pdfs.includes(this.file.name.split('.').pop());
        },
        isViewable() {
            return this.isImage || this.isPdf;
        },
        icon() {
            if (this.isImage) {
                return 'image';
            }

            if (SpreadSheets.includes(this.file.name.split('.').pop())) {
                return 'file-excel';
            }

            if (Documents.includes(this.file.name.split('.').pop())) {
                return 'file-word';
            }

            if (PPTs.includes(this.file.name.split('.').pop())) {
                return 'file-powerpoint';
            }

            if (this.isPdf) {
                return 'file-pdf';
            }

            return 'file';
        },
    },

    methods: {
        link() {
            axios.get(route('core.files.link', this.file.id))
                .then(({ data }) => (this.temporaryLink = data.link))
                .catch(error => this.handleError(error));
        },
        show() {
            window.open(this.openLink, '_blank').focus();
        },
        timeFromNow(date) {
            return formatDistance(date);
        },
        avatarLink(id) {
            return route('core.avatars.show', id);
        },
    },
};
</script>

<style lang="scss" scoped>

    .file-box {
        position: relative;
        cursor: pointer;

        .avatar {
            position: absolute;
            top: .5em;
            left: .5em;
        }

        .details {
            display: flex;
            justify-content: center;
        }
    }

</style>
