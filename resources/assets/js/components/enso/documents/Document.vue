<template>

    <div class="level vue-document has-shadow hover"
        @mouseover="controls = true"
        @mouseleave="!dialog ? controls = false : null">
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
                <div class="level-item has-text-grey"
                    v-if="controls">
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
                        @confirm="$emit('delete')"
                        @show="dialog = true"
                        @hide="dialog = controls = false">
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
                                    {{ $options.filters.timeFromNow(doc.created_at) }}
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

</template>

<script>

import { VPopover } from 'v-tooltip';
import { mapGetters } from 'vuex';
import fontawesome from '@fortawesome/fontawesome';
import {
    faFile, faEye, faCloudDownloadAlt, faTrashAlt,
    faInfoCircle, faUser, faCalendarAlt, faDatabase,
} from '@fortawesome/fontawesome-free-solid/shakable.es';
import Popover from '../bulma/Popover.vue';

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

    data() {
        return {
            controls: false,
            dialog: false,
        };
    },

    computed: {
        ...mapGetters('locale', ['__']),
        downloadLink() {
            return route('core.documents.download', this.doc.id, false);
        },
        openLink() {
            return route('core.documents.show', this.doc.id, false);
        },
    },

    methods: {
        show() {
            window.open(this.openLink, '_blank').focus();
        },
    },
};

</script>

<style lang="scss">

    div.vue-document {
        height: 44px;
        padding: 10px;
        box-shadow: 0ch;
        border-radius: 3px;
        border-left: 3px solid rgb(133, 152, 133);

        &:hover {
            border-left: 3px solid rgb(0, 220, 0);
        }

        &.level:not(:last-child) {
            margin-bottom: 0.75rem;
        }
    }

</style>
