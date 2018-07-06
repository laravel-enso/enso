<template>

    <nav class="navbar app-navbar has-shadow">
        <div class="navbar-brand">
            <a class="navbar-item" href="#">
                <figure class="image is-24x24">
                    <img src="/images/logo.svg">
                </figure>
                <h4 class="title is-4 has-margin-left-small"
                    v-if="menu.isExpanded">
                    {{ meta.appName }}
                </h4>
            </a>
            <a class="navbar-item"
                @click="toggleMenu(isTouch)">
                <span class="icon is-small">
                    <fa icon="bars"/>
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
                    @click="$bus.$emit('stop-impersonating')"
                    v-tooltip="__('Impersonating')">
                    <span class="icon is-small">
                        <fa icon="user"/>
                    </span>
                    <span class="icon is-small">
                        <fa icon="times"/>
                    </span>
                </button>
            </div>
            <profile-control class="is-aligned-right"
                v-if="isTouch"/>
            <settings-control v-if="isTouch"/>
        </div>
        <div class="navbar-menu">
            <div class="navbar-end"
                v-if="!isTouch">
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
import fontawesome from '@fortawesome/fontawesome';
import { faBars, faCode, faUser, faTimes } from '@fortawesome/fontawesome-free-solid/shakable.es';

import Notifications from './Notifications.vue';
import SettingsControl from './SettingsControl.vue';
import ProfileControl from './ProfileControl.vue';

fontawesome.library.add(faBars, faCode, faUser, faTimes);

export default {
    name: 'Navbar',

    directives: { tooltip: VTooltip },

    components: { Notifications, SettingsControl, ProfileControl },

    computed: {
        ...mapState(['meta', 'impersonating']),
        ...mapState('layout', ['isTouch', 'menu']),
    },

    methods: {
        ...mapMutations('layout/menu', { toggleMenu: 'toggle' }),
    },
};

</script>

<style lang="scss">

    .navbar {
        position: fixed;
        min-width: 100%;
        top: 0px;
        z-index: 3;

        &.has-shadow {
            -webkit-box-shadow: 0 1px 1px hsla(0,0%,4%,.1);
            box-shadow: 0 1px 1px hsla(0,0%,4%,.1);
        }
    }

    .navbar-item.is-aligned-right {
        margin-left: auto;
    }

</style>
