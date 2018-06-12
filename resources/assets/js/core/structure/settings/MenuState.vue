<template>
    <div class="level is-mobile settings">
        <div class="level-left">
            <div class="level-item">
                {{ __('Expanded Menu') }}
            </div>
        </div>
        <div class="level-right">
            <div class="level-item">
                <vue-switch size="is-medium"
                    v-model="state"/>
            </div>
        </div>
    </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';
import VueSwitch from '../../../components/enso/vueforms/VueSwitch.vue';

export default {
    name: 'MenuState',

    components: { VueSwitch },

    computed: {
        ...mapGetters('preferences', ['expandedMenu']),
        state: {
            get() {
                return this.expandedMenu;
            },
            set(value) {
                this.setMenuState(value);
            },
        },
    },

    methods: {
        ...mapActions('preferences', ['setMenuState']),
    },
};

</script>

