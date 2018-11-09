<template>

    <div class="level is-mobile settings">
        <div class="level-left">
            <div class="level-item">
                {{ __('Theme') }}
            </div>
        </div>
        <div class="level-right">
            <div class="level-item">
                <a class="button is-naked"
                    @click="setTheme(alternate)">
                    <span class="icon is-small">
                        <fa icon="lightbulb"/>
                    </span>
                </a>
            </div>
        </div>
    </div>

</template>

<script>

import { mapState, mapGetters, mapActions } from 'vuex';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';

library.add(faLightbulb);

export default {
    name: 'ThemeSelector',

    computed: {
        ...mapState('layout', ['themes']),
        ...mapGetters('preferences', ['theme']),
        alternate() {
            return Object.keys(this.themes)
                .find(theme => theme !== this.theme);
        },
    },

    methods: {
        ...mapActions('preferences', ['setTheme']),
    },
};

</script>
