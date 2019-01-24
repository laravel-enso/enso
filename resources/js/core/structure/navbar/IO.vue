<template>
    <div :class="[
            'navbar-item io',
            { 'has-dropdown': !isTouch },
            { 'is-active': visible }
        ]"
        v-click-outside="() => visible = false"
        v-if="count">
        <span v-if="isTouch" class="is-clickable">
            <span class="icon">
                <fa icon="sync-alt"
                    spin/>
            </span>
            <sup class="has-text-danger operation-count">
                {{ count || null }}
            </sup>
        </span>
        <a :class="['navbar-link', { 'rotate': visible }]"
            @click="visible = !visible"
            v-else>
            <span class="icon">
                <fa icon="sync-alt"
                    spin/>
            </span>
            <sup class="has-text-danger operation-count">
                {{ count || null }}
            </sup>
        </a>
        <div class="navbar-dropdown is-right"
            v-if="visible">
            <div class="operation-list">
                <a class="navbar-item"
                    v-for="operation in imports"
                    :key="operation.id">
                    <div class="navbar-content">
                        <div class="is-operation">
                            <div class="level is-marginless">
                                <div class="level-left">
                                    <div class="level-item">
                                        <figure class="media"
                                            v-tooltip.left-start="operation.owner.name">
                                            <p class="image is-16x16">
                                                <img class="is-rounded"
                                                    :src="avatar(operation.owner)">
                                            </p>
                                        </figure>
                                        <span class="icon is-small has-text-info has-margin-left-small"
                                            v-tooltip.left-start="
                                                `${__('elapsed time')}: ${since(operation.since.date)}`
                                            ">
                                            <fa icon="database"/>
                                        </span>
                                        <span class="icon is-small has-text-danger animated flash infinite slower">
                                            <fa icon="caret-left"
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
                </a>
                <a class="navbar-item"
                    v-for="operation in exports"
                    :key="operation.id">
                    <div class="navbar-content">
                        <div class="is-operation">
                            <div class="level is-marginless">
                                <div class="level-left">
                                    <div class="level-item">
                                        <figure class="media"
                                            v-tooltip.left-start="operation.owner.name">
                                            <p class="image is-16x16">
                                                <img class="is-rounded"
                                                    :src="avatar(operation.owner)">
                                            </p>
                                        </figure>
                                        <span class="icon is-small has-text-info has-margin-left-small"
                                            v-tooltip.left-start="
                                                `${__('elapsed time')}: ${since(operation.since.date)}`
                                            ">
                                            <fa icon="database"/>
                                        </span>
                                        <span class="icon is-small has-text-success animated flash infinite slower">
                                            <fa icon="caret-right"
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
                </a>
            </div>
        </div>
    </div>
</template>

<script>

import { mapState } from 'vuex';
import vClickOutside from 'v-click-outside';
import { VTooltip } from 'v-tooltip';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faSyncAlt, faDatabase, faCaretLeft, faCaretRight,
} from '@fortawesome/free-solid-svg-icons';
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';
import formatDistance from '../../../modules/enso/plugins/date-fns/formatDistance';

import './icons';

library.add(faSyncAlt, faDatabase, faCaretLeft, faCaretRight);

export default {
    name: 'IO',

    directives: {
        clickOutside: vClickOutside.directive,
        tooltip: VTooltip,
    },

    data: () => ({
        echo: null,
        visible: false,
        imports: [],
        exports: [],
    }),

    computed: {
        ...mapState(['user', 'meta']),
        ...mapState('layout', ['isTouch']),
        count() {
            return this.imports.length + this.exports.length;
        },
    },

    created() {
        this.initEcho();
        this.listen();
    },

    methods: {
        since(since) {
            return formatDistance(since);
        },
        avatar({ avatarId }) {
            return route('core.avatars.show', avatarId);
        },
        initEcho() {
            this.echo = new Echo({
                broadcaster: 'pusher',
                key: this.meta.pusher,
                cluster: this.meta.pusherCluster,
                namespace: 'App.Events',
            });
        },
        listen() {
            this.echo.private(`operations.${this.user.id}`)
                .listen('.io-started', ({ operation }) => {
                    this.push(operation);
                }).listen('.io-updated', ({ operation }) => {
                    this.update(operation);
                }).listen('.io-stopped', ({ operation }) => {
                    this.remove(operation);
                });
        },
        push(operation) {
            this[this.type(operation.type)].push(operation);
        },
        update(operation) {
            const existing = this[this.type(operation.type)]
                .find(({ id }) => id === operation.id);
            if (existing) {
                existing.entries = operation.entries;
                existing.status = operation.status;
                return;
            }

            this.push(operation);
        },
        remove(operation) {
            const index = this[this.type(operation.type)]
                .findIndex(({ id }) => id === operation.id);

            if (index >= 0) {
                this[this.type(operation.type)].splice(index, 1);
            }
        },
        type(type) {
            return type === 1
                ? 'imports'
                : 'exports';
        },
    },
};

</script>

<style lang="scss" scoped>

    sup.operation-count {
        font-size: 0.75em;
        margin-top: -10px;
    }

    div.operation-list {
        width: 300px;
        overflow-x: hidden;
        max-height: 400px;
        overflow-y: auto;
    }

    div.is-operation {
        white-space: normal;
        width: 268px;
        overflow-x: hidden;
    }

    .navbar-link {
        &:after {
            transform: rotate(135deg);
            transition: transform .300s ease;
        }

        &.rotate:after {
            transform: rotate(-45deg);
        }
    }

</style>
