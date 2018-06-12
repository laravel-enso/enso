import Vue from 'vue';
import store from '../../../store';

const __ = store.getters['localisation/__'];

Vue.mixin({
    methods: {
        __(key) {
            if (!store.getters['localisation/isInitialised']) {
                return key;
            }

            const translation = __(key);

            if (typeof translation === 'undefined'
                && store.state.localisation.keyCollector) {
                store.dispatch('localisation/addMissingKey', key);
            }

            return translation || key;
        },
    },
});
