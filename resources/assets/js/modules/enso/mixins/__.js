import Vue from 'vue';
import store from '../../../store';

const __ = store.getters['locale/__'];

const addMissingKey = (key) => {
    if (store.state.locale.keyCollector) {
        axios.patch('/api/system/localisation/addKey', { langKey: key });
        store.commit('locale/addKey', key);
    }
};

Vue.mixin({
    methods: {
        __(key) {
            if (!Object.keys(store.state.locale.i18n).length) {
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
