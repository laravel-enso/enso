<template>
    <div v-if="count"
        v-click-outside="() => visible = false"
        :class="[
            'navbar-item io',
            { 'has-dropdown': !isTouch },
            { 'is-active': visible }
        ]">
        <span v-if="isTouch" class="is-clickable">
            <span class="icon">
                <fa icon="sync-alt"
                    spin/>
            </span>
            <sup class="has-text-danger operation-count">
                {{ count || null }}
            </sup>
        </span>
        <a v-else
            :class="['navbar-link', { 'rotate': visible }]"
            @click="visible = !visible">
            <span class="icon">
                <fa icon="sync-alt"
                    spin/>
            </span>
            <sup class="has-text-danger operation-count">
                {{ count || null }}
            </sup>
        </a>
        <div v-if="visible"
            class="navbar-dropdown is-right">
            <div class="operation-list">
                <a v-for="operation in imports"
                    :key="operation.id"
                    class="navbar-item">
                    <operation :operation="operation"
                        type="in"/>
                </a>
                <a v-for="operation in exports"
                    :key="operation.id"
                    class="navbar-item">
                    <operation :operation="operation"
                        type="out"/>
                </a>
            </div>
        </div>
    </div>
</template>

<script>

import { mapState } from 'vuex';
import vClickOutside from 'v-click-outside';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faSyncAlt, faDatabase, faCaretLeft, faCaretRight,
} from '@fortawesome/free-solid-svg-icons';
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';
import Operation from './Operation.vue';

library.add(faSyncAlt, faDatabase, faCaretLeft, faCaretRight);

export default {
    name: 'IO',

    directives: {
        clickOutside: vClickOutside.directive,
    },

    components: { Operation },

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
