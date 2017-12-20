<template>

    <div class="box vue-filter">
        <div class="has-text-centered">
            <b>{{ title }}</b>
        </div>
        <div class="tabs is-toggle is-fullwidth is-small vue-filter">
            <ul>
                <li :class="{ 'is-active': option.value === value }"
                    v-for="option in options">
                    <a v-html="option.label"
                        @click="update(option.value)">
                    </a>
                </li>
                <li :class="{ 'is-active': value === null }"
                    v-if="offSwitch">
                    <a @click="update(null)">
                        <span class="icon is-small"
                            :class="{ 'has-text-danger': value === null, 'has-text-success': value !== null }">
                            <i class="fa fa-power-off"></i>
                        </span>
                        <span>{{ __('Off') }}</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>

</template>

<script>

import { mapGetters } from 'vuex';

export default {
    props: {
        title: {
            type: String,
            default: null,
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
        offSwitch: {
            type: Boolean,
            default: true,
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

<style>

    .box.vue-filter {
        padding: 0.5rem;
    }

    .tabs.vue-filter {
        padding-top: 4px;
    }

</style>
