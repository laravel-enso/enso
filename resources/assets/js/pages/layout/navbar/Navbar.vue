<template>

    <nav class="navbar app-navbar has-shadow">
        <div class="navbar-brand">
            <a class="navbar-item" href="#">
                <figure class="image is-24x24">
                    <img src="/images/logo.svg">
                </figure>
                <h4 class="title is-4 has-margin-left-small">
                    {{ meta.appName }}
                </h4>
            </a>
            <a class="navbar-item is-hidden-desktop"
                @click="$store.commit('layout/navbar/toggle')">
                <span class="icon is-small">
                    <fa icon="bars"></fa>
                </span>
            </a>
            <div class="navbar-item"
                v-if="envIsLocal">
                <span class="tag is-warning">
                    <span class="icon is-small">
                        <fa icon="code"></fa>
                    </span>
                </span>
            </div>
            <div class="navbar-item"
                v-if="$store.state.impersonating">
                <button class="button is-small is-warning"
                    @click="$bus.$emit('stop-impersonating')"
                    v-tooltip="__('Impersonating')">
                    <span class="icon is-small">
                        <fa icon="user"></fa>
                    </span>
                    <span class="icon is-small">
                        <fa icon="times"></fa>
                    </span>
                </button>
            </div>
            <profile-control class="is-aligned-right"
                v-if="isTouch">
            </profile-control>
            <settings-control v-if="isTouch"></settings-control>
        </div>
        <div class="navbar-menu">
            <div class="navbar-end"
                v-if="!isTouch">
                <notifications></notifications>
                <profile-control></profile-control>
                <settings-control></settings-control>
            </div>
        </div>
    </nav>

</template>

<script>

import { mapState } from 'vuex';
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

    props: {
        envIsLocal: {
            type: Boolean,
            default: false,
        },
    },

    computed: {
        ...mapState(['meta']),
        ...mapState('layout', ['isTouch']),
    },
};

</script>

<style>

    .navbar {
        position: fixed;
        min-width: 100%;
        top: 0px;
        z-index: 3;
    }

    .navbar-item.is-aligned-right {
        margin-left: auto;
    }

</style>
