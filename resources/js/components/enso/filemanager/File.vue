<template>

    <div class="box file-box has-padding-medium">
        <p class="has-text-centered">
            <fa icon="file"
                size="3x"/>
        </p>
        <h5 class="title is-5 has-margin-top-medium has-text-centered">
            {{ file.name }}
        </h5>
        <p class="has-margin-top-medium has-text-centered">
            <span class="icon is-small">
                <fa icon="calendar-alt"/>
            </span>
            {{ timeFromNow(file.createdAt) }}
        </p>
        <p class="has-margin-top-small has-text-centered">
            <span class="icon is-small">
                <fa icon="database"/>
            </span>
            {{ file.size | numberFormat }} Kb
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
                    @click.stop="show">
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
    faFile, faEye, faCloudDownloadAlt, faTrashAlt, faLink,
    faCalendarAlt, faDatabase,
} from '@fortawesome/free-solid-svg-icons';
import Popover from '../bulma/Popover.vue';
import formatDistance from '../../../modules/enso/plugins/date-fns/formatDistance';
import Modal from './Modal.vue';


import Tabs from '../bulma/Tabs.vue';
import Tab from '../bulma/Tab.vue';

library.add([
    faFile, faEye, faCloudDownloadAlt, faTrashAlt, faLink,
    faCalendarAlt, faDatabase,
]);

library.add(faFile);

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
    },
};
</script>

<style lang="scss" scoped>

    .file-box {
        cursor: pointer;

        .details {
            display: flex;
            justify-content: center;
        }

        &:hover {
            -webkit-box-shadow: 0 2px 18px 0 rgba(42,51,83,.12), 0 5px 8px rgba(0,0,0,.06);
            box-shadow: 0 2px 18px 0 rgba(42,51,83,.12), 0 5px 8px rgba(0,0,0,.06);
        }
    }

</style>
