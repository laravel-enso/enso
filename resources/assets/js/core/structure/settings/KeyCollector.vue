<template>

    <div class="level is-mobile settings">
        <div class="level-left">
            <div class="level-item">
                {{ __('Key Collector') }}
            </div>
        </div>
        <div class="level-right">
            <div class="level-item">
                <vue-switch size="is-medium"
                    v-model="collect"
                    @input="setKeyCollector(collect);"/>
            </div>
        </div>
    </div>

</template>

<script>

import { mapState, mapMutations } from 'vuex';
import VueSwitch from '../../../components/enso/vueforms/VueSwitch.vue';

export default {
    name: 'KeyCollector',

    components: { VueSwitch },

    data() {
        return {
            collect: false,
        };
    },

    computed: {
        ...mapState('localisation', ['keyCollector']),
    },

    methods: {
        ...mapMutations('localisation', ['setKeyCollector']),
    },
};

</script>

