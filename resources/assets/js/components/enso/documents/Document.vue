<template>

    <div class="level vue-document"
        @mouseover="controls = true"
        @mouseleave="!dialog ? controls = false : null">
        <div class="level-left">
            <div class="level-item">
                <span class="icon is-small has-margin-right-small">
                    <i class="fas fa-file"></i>
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
                            <i class="fas fa-eye"></i>
                        </span>
                    </button>
                    <a class="button is-naked has-margin-right-small"
                        v-if="doc.isDownloadable"
                        :href="downloadLink">
                        <span class="icon">
                            <i class="fas fa-cloud-download-alt"></i>
                        </span>
                    </a>
                    <popover placement="bottom"
                        v-if="doc.isDeletable"
                        @confirm="$emit('delete')"
                        @show="dialog = true"
                        @hide="dialog = controls = false">
                        <button class="button is-naked has-margin-right-medium">
                            <span class="icon">
                                <i class="fas fa-trash-alt"></i>
                            </span>
                        </button>
                    </popover>
                    <v-popover
                        trigger="hover"
                        placement="top">
                        <span class="icon has-margin-right-small">
                            <i class="fas fa-info-circle">
                            </i>
                        </span>
                        <template slot="popover">
                            <div class="info">
                                <p>
                                    <span class="icon is-small">
                                        <i class="fas fa-user"></i>
                                    </span>
                                    {{ doc.owner.fullName }}
                                </p>
                                <p>
                                    <span class="icon is-small">
                                        <i class="fas fa-calendar-alt"></i>
                                    </span>
                                    {{ this.$options.filters.timeFromNow(this.doc.created_at) }}
                                </p>
                                <p>
                                    <span class="icon is-small">
                                        <i class="fas fa-database"></i>
                                    </span>
                                    {{ this.$options.filters.numberFormat(this.doc.size) }} Kb
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
import Popover from '../bulma/Popover.vue';

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
        -webkit-box-shadow: 0px 0px 4px 0px rgba(179,179,179,1);
        -moz-box-shadow: 0px 0px 4px 0px rgba(179,179,179,1);
        box-shadow: 0px 0px 4px 0px rgba(179,179,179,1);

        &:hover {
            border-left: 3px solid rgb(0, 220, 0);
        }

        &.level:not(:last-child) {
            margin-bottom: 0.75rem;
        }
    }

</style>
