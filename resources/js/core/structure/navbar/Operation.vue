<template>
    <div class="navbar-content">
        <div class="is-operation">
            <div class="level is-marginless">
                <div class="level-left">
                    <div class="level-item">
                        <figure v-tooltip.left-start="operation.owner.name"
                            class="media">
                            <p class="image is-16x16">
                                <img class="is-rounded"
                                    :src="avatar(operation.owner)">
                            </p>
                        </figure>
                        <span v-tooltip.left-start="
                                `${__('elapsed time')}: ${since(operation.since.date)}`
                            "
                            class="icon is-small has-text-info has-margin-left-small">
                            <fa icon="database"/>
                        </span>
                        <span :class="[
                                'icon is-small has-text-danger',
                                {'animated flash infinite slower': operation.entries > 0}
                            ]">
                            <fa :icon="['fas', isIn ? 'caret-left' : 'caret-right']"
                                transform="shrink-1"/>
                        </span>
                        <span class="has-margin-left-small">
                            {{ operation.name }}
                        </span>
                    </div>
                </div>
                <div class="level-right">
                    <div class="level-item">
                        <span class="is-bold has-text-success">
                            {{ operation.entries | shortNumber }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { library } from '@fortawesome/fontawesome-svg-core';
import { faDatabase, faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { VTooltip } from 'v-tooltip';

import formatDistance from '../../../modules/enso/plugins/date-fns/formatDistance';

library.add(faDatabase, faCaretLeft, faCaretRight);

export default {
    name: 'Operation',

    directives: {
        tooltip: VTooltip,
    },

    props: {
        operation: {
            type: Object,
            required: true,
        },
        type: {
            type: String,
            required: true,
            validator: val => ['in', 'out'].includes(val),
        },
    },

    computed: {
        isIn() {
            return this.type === 'in';
        },
        isOut() {
            return this.type === 'out';
        },
    },

    methods: {
        avatar({ avatarId }) {
            return route('core.avatars.show', avatarId);
        },
        since(since) {
            return formatDistance(since);
        },
    },
};
</script>

<style lang="scss" scoped>
    div.is-operation {
        white-space: normal;
        width: 268px;
        overflow-x: hidden;
    }
</style>
