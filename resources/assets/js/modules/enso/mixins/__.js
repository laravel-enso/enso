import Vue from 'vue';
import store from '../../../store';

const __ = store.getters['localisation/__'];

const addMissingKey = (key) => {
    if (store.state.localisation.keyCollector) {
        axios.patch('/api/system/localisation/addKey', { langKey: key });
        store.commit('localisation/addKey', key);
    }
};

Vue.mixin({
    methods: {
        __(key) {
            if (!Object.keys(store.state.localisation.i18n).length) {
                return key;
            }

            const translation = __(key);

            if (typeof translation === 'undefined') {
                addMissingKey(key);
            }

            return translation || key;
        },
    },
});
