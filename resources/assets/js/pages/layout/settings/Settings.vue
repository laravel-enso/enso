<template>

    <vue-aside class="settings">
        <p class="menu-label has-text-centered">
            {{ __("Settings") }}
        </p>
        <ul class="menu-list">
            <li class="settings-item">
                <language-selector @update="setPreferences"
                    :title="__('Language')">
                </language-selector>
            </li>
            <li class="settings-item">
                <theme-selector @update="setPreferences"
                    :title="__('Theme')">
                </theme-selector>
            </li>
            <li class="settings-item">
                <tutorial
                    :title="__('Tutorial')">
                </tutorial>
            </li>
        </ul>
    </vue-aside>

</template>

<script>

import { mapState } from 'vuex';
import VueAside from '../VueAside.vue';
import LanguageSelector from './LanguageSelector.vue';
import ThemeSelector from './ThemeSelector.vue';
import Tutorial from './Tutorial.vue';

export default {
    name: 'Settings',

    components: {
        VueAside, LanguageSelector, ThemeSelector, Tutorial,
    },

    computed: {
        ...mapState(['user']),
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
