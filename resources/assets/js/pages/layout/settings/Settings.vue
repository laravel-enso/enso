<template>

    <vue-aside class="settings">
        <p class="menu-label has-text-centered">
            {{ __("Settings") }}
        </p>
        <ul class="menu-list">
            <li class="settings-item">
                <language-selector @update="setPreferences">
                </language-selector>
            </li>
            <li class="settings-item">
                <theme-selector @update="setPreferences">
                </theme-selector>
            </li>
            <li class="settings-item has-margin-bottom-small">
                <menu-state @update="setPreferences">
                </menu-state>
            </li>
            <li class="settings-item">
                <tutorial></tutorial>
            </li>
            <hr v-if="meta.env === 'local'">
            <li class="settings-item">
                <key-collector v-if="meta.env === 'local'"></key-collector>
            </li>
        </ul>
    </vue-aside>

</template>

<script>

import { mapState } from 'vuex';
import VueAside from '../VueAside.vue';
import LanguageSelector from './LanguageSelector.vue';
import ThemeSelector from './ThemeSelector.vue';
import MenuState from './MenuState.vue';
import Tutorial from './Tutorial.vue';
import KeyCollector from './KeyCollector.vue';

export default {
    name: 'Settings',

    components: {
        VueAside, LanguageSelector, ThemeSelector, MenuState, Tutorial, KeyCollector,
    },

    computed: {
        ...mapState(['user']),
        ...mapState(['meta']),
    },

    methods: {
        setPreferences() {
            axios.patch(route('core.preferences.setPreferences', [], false), {
                global: this.user.preferences.global,
            }).catch(error => this.handleError(error));
        },
    },
};

</script>

<style>

    div.aside.settings {
        right: 0;
    }

    li.settings-item .level-item {
        padding: 6px;
    }

    li.settings-item .level-right .level-item {
        margin-right: unset;
    }

</style>
