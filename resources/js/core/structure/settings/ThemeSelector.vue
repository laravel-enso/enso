<template>

    <div class="level is-mobile settings">
        <div class="level-left">
            <div class="level-item">
                {{ __('Theme') }}
            </div>
        </div>
        <div class="level-right">
            <div class="level-item">
                <dropdown class="is-right"
                    :height="220">
                    <span slot="label">
                        {{ theme }}
                    </span>
                    <a v-for="(href, key) in themes"
                        :key="key"
                        class="dropdown-item"
                        :class="{ 'is-active': key === theme }"
                        @click="setTheme(key)">
                        {{ key }}
                    </a>
                </dropdown>
            </div>
        </div>
    </div>

</template>

<script>

import { mapState, mapGetters, mapActions } from 'vuex';
import Dropdown from '../../../components/enso/bulma/Dropdown.vue';

export default {
    name: 'ThemeSelector',

    components: { Dropdown },

    computed: {
        ...mapState('layout', ['themes']),
        ...mapGetters('preferences', ['theme']),
    },

    methods: {
        ...mapActions('preferences', ['setTheme']),
    },
};

</script>
