<template>

    <div class="vue-filter">
        <div class="has-text-centered">
            <strong>{{ title }}</strong>
            <span class="icon lock has-text-muted"
                v-if="readonly">
                <fa icon="lock"
                    size="xs"/>
            </span>
        </div>
        <div class="tabs is-toggle is-fullwidth is-small filter-tabs">
            <ul>
                <li :class="{ 'is-active': option.value === value }"
                    v-for="(option, index) in options"
                    :key="index">
                    <a @click="update(option.value)">
                        <span class="icon is-small"
                            :class="option.class"
                            v-if="icons">
                            <fa :icon="option.label"/>
                        </span>
                        <span class="filter-label" v-else
                            :class="option.class">
                            {{ option.label }}
                        </span>
                    </a>
                </li>
                <li :class="{ 'is-active': value === null }"
                    v-if="!hideOff">
                    <a @click="update(null)">
                        <span class="icon is-small"
                            :class="value === null ? 'has-text-danger' : 'has-text-success'">
                            <fa icon="power-off"/>
                        </span>
                        <span class="filter-label" v-if="!icons && offLabel">{{ offLabel }}</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>

</template>

<script>

import { library } from '@fortawesome/fontawesome-svg-core';
import { faPowerOff, faLock } from '@fortawesome/free-solid-svg-icons';

library.add(faPowerOff, faLock);

export default {
    name: 'VueFilter',

    props: {
        title: {
            type: String,
            default: null,
        },
        offLabel: {
            type: String,
            default: '',
        },
        icons: {
            type: Boolean,
            default: false,
        },
        options: {
            type: Array,
            default() {
                return [];
            },
        },
        value: {
            type: null,
            default: null,
        },
        hideOff: {
            type: Boolean,
            default: false,
        },
        readonly: {
            type: Boolean,
            default: false,
        },
    },

    data() {
        return {
            internalValue: this.value,
        };
    },

    methods: {
        update(value) {
            if (!this.readonly) {
                this.$emit('input', value);
            }
        },
    },
};

</script>

<style lang="scss" scoped>

    .vue-filter {
        padding: 0.5em;
        position: relative;

        .has-text-centered {

            .lock {
                position: absolute;
                right: 0;
            }
        }

        .filter-tabs {
            padding-top: 0.5em;

            .filter-label {
                font-size: 0.9em;
            }
        }
    }

</style>
