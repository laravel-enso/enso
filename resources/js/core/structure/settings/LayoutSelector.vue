<template>

    <div class="level is-mobile settings">
        <div class="level-left">
            <div class="level-item is-marginless">
                {{ __('Layout') }}
            </div>
        </div>
        <div class="level-right">
            <div class="level-item">
                <dropdown class="is-right"
                    :height="120">
                    <span slot="label">
                        <figure class="image is-16x16">
                            <img :src="`/images/layout/${layout}.svg`">
                        </figure>
                    </span>
                    <a v-for="(mode, key) in modes"
                        :key="key"
                        class="dropdown-item "
                        :class="{ 'is-active': mode === layout }"
                        @click="setLayout(mode)">
                        <figure class="image is-16x16 toastr-corner">
                            <img :src="`/images/layout/${mode}.svg`">
                        </figure>
                    </a>
                </dropdown>
            </div>
        </div>
    </div>

</template>

<script>

import { mapGetters, mapActions } from 'vuex';
import Dropdown from '../../../components/enso/bulma/Dropdown.vue';

export default {
    name: 'LayoutSelector',

    components: { Dropdown },

    data() {
        return {
            modes: ['default', 'touch'],
        };
    },

    computed: {
        ...mapGetters('preferences', ['layout']),
    },

    methods: {
        ...mapActions('preferences', ['setLayout']),
    },
};

</script>

<style lang="scss" scoped>

    .toastr-corner {
        margin: auto;
    }

</style>
