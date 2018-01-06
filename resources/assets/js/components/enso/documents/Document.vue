<template>

    <div class="level vue-document has-colored-background is-white"
        @mouseenter="controls = true"
        @mouseleave="controls = false">
        <div class="level-left">
            <div class="level-item">
                <span class="icon is-small has-margin-right-small">
                    <i class="fa fa-file-o"></i>
                </span>
                <span>
                    {{ doc.original_name }}
                </span>
            </div>
        </div>
        <div class="level-right">
            <transition enter-active-class="animated fadeIn"
                leave-active-class="animated fadeOut">
                <div class="level-item"
                    v-if="controls">
                    <a class="button is-white has-margin-right-small"
                        v-if="doc.isDownloadable"
                        @click="show">
                        <span class="icon">
                            <i class="fa fa-eye"></i>
                        </span>
                    </a>
                    <a class="button is-white has-margin-right-small"
                        v-if="doc.isDownloadable"
                        :href="downloadLink">
                        <span class="icon">
                            <i class="fa fa-cloud-download"></i>
                        </span>
                    </a>
                    <a class="button is-white has-margin-right-medium"
                        v-if="doc.isDeletable"
                        @click="$emit('delete')">
                        <span class="icon">
                            <i class="fa fa-trash-o"></i>
                        </span>
                    </a>
                    <v-popover
                        trigger="hover"
                        placement="top">
                        <span class="icon is-small has-margin-right-small">
                            <i class="fa fa-info-circle">
                            </i>
                        </span>
                        <template slot="popover">
                            <div class="info">
                                <p>
                                    <span class="icon is-small">
                                        <i class="fa fa-user"></i>
                                    </span>
                                    {{ doc.owner.fullName }}
                                </p>
                                <p>
                                    <span class="icon is-small">
                                        <i class="fa fa-calendar"></i>
                                    </span>
                                    {{ this.$options.filters.timeFromNow(this.doc.created_at) }}
                                </p>
                                <p>
                                    <span class="icon is-small">
                                        <i class="fa fa-database"></i>
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
import Modal from '../bulma/Modal.vue';

export default {
    name: 'Document',

    components: { Modal, VPopover },

    props: {
        doc: {
            type: Object,
            required: true,
        },
    },

    data() {
        return {
            controls: false,
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
        -webkit-box-shadow: 0px 2px 3px -1px rgba(179,179,179,1);
        -moz-box-shadow: 0px 2px 3px -1px rgba(179,179,179,1);
        box-shadow: 0px 2px 3px -1px rgba(179,179,179,1);

        &:hover {
            border-left: 3px solid rgb(0, 220, 0);
        }

        &.level:not(:last-child) {
            margin-bottom: 0.75rem;
        }
    }

</style>
