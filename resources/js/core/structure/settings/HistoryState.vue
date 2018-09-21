<template>
    <div class="level is-mobile settings">
        <div class="level-left">
            <div class="level-item">
                {{ __('History Mode') }}
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
    name: 'HistoryState',

    components: { VueSwitch },

    computed: {
        ...mapGetters('preferences', ['history']),
        state: {
            get() {
                return this.history;
            },
            set(value) {
                this.setHistoryState(value);
            },
        },
    },

    methods: {
        ...mapActions('preferences', ['setHistoryState']),
    },
};

</script>

