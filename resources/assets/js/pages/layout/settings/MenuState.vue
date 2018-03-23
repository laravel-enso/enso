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
                    v-model="isExpanded"
                    @input="update">
                </vue-switch>
            </div>
        </div>
    </div>

</template>

<script>

import { mapState, mapGetters, mapActions } from 'vuex';
import VueSwitch from '../../../components/enso/vueforms/VueSwitch.vue';

export default {
    name: 'MenuState',

    components: { VueSwitch },

    data() {
        return {
            isExpanded: true,
        };
    },

    computed: {
        ...mapState('layout', ['navbar']),
        ...mapGetters('layout', ['theme']),
    },

    mounted() {
        this.isExpanded = this.navbar.isExpanded;
    },

    methods: {
        ...mapActions('layout', ['setMenuState']),
        update() {
            this.setMenuState(this.isExpanded);
            this.$emit('update');
        },
    },
};

</script>

