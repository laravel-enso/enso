<template>

    <div class="document-wrapper">
        <div class="level">
            <div class="level-left">
                <div class="level-item">
                    <span class="icon is-small has-margin-right-small">
                        <fa icon="file"></fa>
                    </span>
                    <span>
                        {{ doc.original_name }}
                    </span>
                </div>
            </div>
            <div class="level-right">
                <transition enter-active-class="animated fadeIn"
                    leave-active-class="animated fadeOut">
                    <div class="level-item has-text-grey">
                        <button class="button is-naked has-margin-right-small"
                            v-if="doc.isDownloadable"
                            @click="show">
                            <span class="icon">
                                <fa icon="eye"></fa>
                            </span>
                        </button>
                        <a class="button is-naked has-margin-right-small"
                            v-if="doc.isDownloadable"
                            :href="downloadLink">
                            <span class="icon">
                                <fa icon="cloud-download-alt"></fa>
                            </span>
                        </a>
                        <popover placement="bottom"
                            v-if="doc.isDeletable"
                            @confirm="$emit('delete')">
                            <button class="button is-naked has-margin-right-medium">
                                <span class="icon">
                                    <fa icon="trash-alt"></fa>
                                </span>
                            </button>
                        </popover>
                        <v-popover
                            trigger="hover"
                            placement="top">
                            <span class="icon has-margin-right-small">
                                <fa icon="info-circle"></fa>
                            </span>
                            <template slot="popover">
                                <div class="info">
                                    <p>
                                        <span class="icon is-small">
                                            <fa icon="user"></fa>
                                        </span>
                                        {{ doc.owner.fullName }}
                                    </p>
                                    <p>
                                        <span class="icon is-small">
                                            <fa icon="calendar-alt"></fa>
                                        </span>
                                        {{ timeFromNow(doc.created_at) }}
                                    </p>
                                    <p>
                                        <span class="icon is-small">
                                            <fa icon="database"></fa>
                                        </span>
                                        {{ $options.filters.numberFormat(doc.size) }} Kb
                                    </p>
                                </div>
                            </template>
                        </v-popover>
                    </div>
                </transition>
            </div>
        </div>
    </div>

</template>

<script>

import { VPopover } from 'v-tooltip';
import fontawesome from '@fortawesome/fontawesome';
import {
    faFile, faEye, faCloudDownloadAlt, faTrashAlt,
    faInfoCircle, faUser, faCalendarAlt, faDatabase,
} from '@fortawesome/fontawesome-free-solid/shakable.es';
import Popover from '../bulma/Popover.vue';
import formatDistance from '../../../modules/enso/plugins/date-fns/formatDistance';

fontawesome.library.add([
    faFile, faEye, faCloudDownloadAlt, faTrashAlt,
    faInfoCircle, faUser, faCalendarAlt, faDatabase,
]);

export default {
    name: 'Document',

    components: { VPopover, Popover },

    props: {
        doc: {
            type: Object,
            required: true,
        },
    },

    computed: {
        downloadLink() {
            return route('core.documents.download', this.doc.id);
        },
        openLink() {
            return route('core.documents.show', this.doc.id);
        },
    },

    methods: {
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

    @import '~bulma/sass/utilities/initial-variables';
    @import '~bulma/sass/utilities/derived-variables.sass';

    .document-wrapper {
        height: 2.8rem;
        padding: .3rem;
        -webkit-box-shadow: 0px 0px 3px 1px rgba(133,133,133,1);
        box-shadow: 0px 0px 3px 1px rgba(133,133,133,1);
        border-radius: 5px;

        &:hover {
            border-left: 4px solid $link;
        }

        &:not(:last-child) {
            margin-bottom: 0.75rem;
        }
    }

</style>
