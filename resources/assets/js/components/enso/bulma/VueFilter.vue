<template>

    <div class="box vue-filter">
        <div class="has-text-centered">
            <b>{{ title }}</b>
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
                            <fa :icon="option.label"></fa>
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
                            <fa icon="power-off"></fa>
                        </span>
                        <span class="filter-label">{{ offLabel }}</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>

</template>

<script>

import { mapGetters } from 'vuex';
import fontawesome from '@fortawesome/fontawesome';
import { faPowerOff } from '@fortawesome/fontawesome-free-solid/shakable.es';

fontawesome.library.add(faPowerOff);

export default {
    name: 'VueFilter',

    props: {
        title: {
            type: String,
            default: null,
        },
        offLabel: {
            type: String,
            default: 'Off',
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
            required: true,
        },
        hideOff: {
            type: Boolean,
            default: false,
        },
    },

    computed: {
        ...mapGetters('locale', ['__']),
    },

    data() {
        return {
            internalValue: this.value,
        };
    },

    methods: {
        update(value) {
            this.$emit('input', value);
        },
    },
};

</script>

<style lang="scss" scoped>

    .vue-filter {
        padding: 0.5em;

        .filter-tabs {
            padding-top: 0.5em;

            .filter-label {
                font-size: 0.9em;
            }
        }
    }

</style>
