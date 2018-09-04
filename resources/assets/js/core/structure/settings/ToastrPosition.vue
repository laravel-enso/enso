<template>

    <div class="level is-mobile settings">
        <div class="level-left">
            <div class="level-item is-marginless">
                {{ __('Toastr position') }}
            </div>
        </div>
        <div class="level-right">
            <div class="level-item">
                <dropdown class="is-right"
                    :height="220">
                    <span slot="label">
                        <figure class="image is-16x16">
                            <img :src="`/images/corners/${toastrPosition}.svg`">
                        </figure>
                    </span>
                    <a v-for="(position, key) in positions"
                        :key="key"
                        class="dropdown-item "
                        :class="{ 'is-active': position === toastrPosition }"
                        @click="setToastrPosition(position)">
                        <figure class="image is-16x16 toastr-corner">
                            <img :src="`/images/corners/${position}.svg`">
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
import Positions from './../../../components/enso/bulma/toastr/config/positions';

export default {
    name: 'ToastrPosition',

    components: { Dropdown },

    data() {
        return {
            positions: Positions,
        };
    },

    computed: {
        ...mapGetters('preferences', ['toastrPosition']),
    },

    methods: {
        ...mapActions('preferences', ['setToastrPosition']),
    },
};

</script>

<style lang="scss" scoped>

    .toastr-corner {
        margin: auto;
    }

</style>
