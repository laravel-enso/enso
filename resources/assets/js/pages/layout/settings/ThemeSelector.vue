<template>

    <div class="level is-mobile settings">
        <div class="level-left">
            <div class="level-item">
                {{ title }}
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
                        @click="update(key)">
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

    props: {
        title: {
            type: String,
            required: true,
        },
    },

    computed: {
        ...mapState('layout', ['themes']),
        ...mapGetters('layout', ['theme']),
    },

    methods: {
        ...mapActions('layout', ['switchTheme']),
        update(theme) {
            if (theme === this.theme) {
                return;
            }

            this.switchTheme(theme);
            this.$emit('update');
        },
    },
};

</script>
