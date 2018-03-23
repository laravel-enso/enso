import Vue from 'vue';
import store from '../../../store';

const __ = store.getters['locale/__'];

const addMissingKey = (key) => {
    if (store.state.locale.keyCollector) {
        axios.patch('/api/system/localisation/addKey', { langKey: key });
        store.commit('locale/addKey', key);
    }
};

Vue.prototype.__ = (key) => {
    if (!store.state.isInitialised) {
        return key;
    }

    const translation = __(key);

    if (typeof translation === 'undefined') {
        addMissingKey(key);
    }

    return translation || key;
};
