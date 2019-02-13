<template>
    <vue-aside class="wrapper settings" :class="rtlClass">
        <p class="menu-label has-text-centered">
            {{ __("Settings") }}
        </p>
        <ul class="menu-list">
            <li v-if="multipleLanguages"
                class="settings-item">
                <language-selector/>
            </li>
            <li v-if="multipleThemes"
                class="settings-item">
                <theme-selector/>
            </li>
            <li class="settings-item">
                <toastr-position/>
            </li>
            <li class="settings-item has-margin-bottom-small">
                <menu-state/>
            </li>
            <li class="settings-item has-margin-bottom-small">
                <bookmarks-state/>
            </li>
            <li v-if="canAccess('system.tutorials.show')"
                class="settings-item">
                <tutorial/>
            </li>
            <li class="settings-item">
                <key-collector v-if="meta.env === 'local'"/>
            </li>
        </ul>
    </vue-aside>
</template>

<script>

import { mapState, mapGetters } from 'vuex';
import VueAside from '../VueAside.vue';
import LanguageSelector from './LanguageSelector.vue';
import ThemeSelector from './ThemeSelector.vue';
import ToastrPosition from './ToastrPosition.vue';
import MenuState from './MenuState.vue';
import BookmarksState from './BookmarksState.vue';
import Tutorial from './Tutorial.vue';
import KeyCollector from './KeyCollector.vue';

export default {
    name: 'Settings',

    components: {
        VueAside,
        LanguageSelector,
        ThemeSelector,
        ToastrPosition,
        MenuState,
        BookmarksState,
        Tutorial,
        KeyCollector,
    },

    computed: {
        ...mapState(['user']),
        ...mapState(['meta']),
        ...mapState('layout', ['themes']),
        ...mapGetters('preferences', ['rtlClass']),
        ...mapState('localisation', ['languages']),
        multipleThemes() {
            return Object.keys(this.themes).length > 1;
        },
        multipleLanguages() {
            return Object.keys(this.languages).length > 1;
        },
    },
};

</script>

<style lang="scss" >

    .wrapper.settings {

        overflow-y: auto;

        &.left {
            right: 0;
        }
        &.right {
            left: 0;
        }
    }

    .settings-item .level-item {
        padding: 6px;
    }

    .settings-item .level-right .level-item {
        margin-right: unset;
    }

    .settings-item .level-left .level-item {
        margin-left: unset;
    }
</style>
