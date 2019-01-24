<template>
    <nav class="navbar app-navbar has-background-light is-fixed-top">
        <div class="navbar-brand">
            <a class="navbar-item logo" href="#">
                <figure class="image is-24x24">
                    <img src="/images/logo.svg">
                </figure>
                <h4 class="title is-4 animated has-margin-left-small"
                    v-if="menu.isExpanded && !isMobile">
                    {{ meta.appName }}
                </h4>
            </a>
            <a class="navbar-item"
                @click="toggleMenu(isTouch)">
                <span class="icon is-small">
                    <fa icon="bars"
                        :class="{ 'rotate': !menu.isExpanded || !menu.isVisible }"/>
                </span>
            </a>
            <div class="navbar-item"
                v-if="meta.env === 'local'">
                <span class="tag is-warning">
                    <span class="icon is-small">
                        <fa icon="code"/>
                    </span>
                </span>
            </div>
            <div class="navbar-item"
                v-if="impersonating">
                <button class="button is-small is-warning"
                    @click="$root.$emit('stop-impersonating')"
                    v-tooltip="__('Impersonating')">
                    <span class="icon is-small">
                        <fa icon="user"/>
                    </span>
                    <span class="icon is-small">
                        <fa icon="times"/>
                    </span>
                </button>
            </div>
            <div class="is-pulled-right is-flex"
                v-if="isTouch">
                <search v-if="!isMobile"/>
                <i-o/>
                <notifications/>
                <profile-control/>
                <settings-control/>
            </div>
        </div>
        <div class="navbar-menu">
            <div class="navbar-end"
                v-if="!isTouch">
                <search/>
                <i-o/>
                <notifications/>
                <profile-control/>
                <settings-control/>
            </div>
        </div>
    </nav>
</template>

<script>

import { mapState, mapMutations } from 'vuex';
import { VTooltip } from 'v-tooltip';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faBars, faCode, faUser, faTimes,
} from '@fortawesome/free-solid-svg-icons';
import IO from './IO.vue';
import Notifications from './Notifications.vue';
import SettingsControl from './SettingsControl.vue';
import ProfileControl from './ProfileControl.vue';
import Search from './Search.vue';

library.add(faBars, faCode, faUser, faTimes);

export default {
    name: 'Navbar',

    directives: { tooltip: VTooltip },

    components: {
        IO, Notifications, SettingsControl, ProfileControl, Search,
    },

    computed: {
        ...mapState(['meta', 'impersonating']),
        ...mapState('layout', ['isMobile', 'isTouch', 'menu']),
    },

    methods: {
        ...mapMutations('layout/menu', { toggleMenu: 'toggle' }),
    },
};

</script>

<style lang="scss" scoped>

    .navbar {
        z-index: 3;

        -webkit-box-shadow: 0 1px 1px hsla(0,0%,4%,.35);
        box-shadow: 0 1px 1px hsla(0,0%,4%,.35);

        .fa-bars {
            transition: transform .300s;

            &.rotate {
                transform: rotate(90deg);
            }
        }

        .is-pulled-right {
            margin-left: auto;
        }
    }

</style>
