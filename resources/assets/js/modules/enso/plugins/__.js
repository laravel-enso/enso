import Vue from 'vue';
import store from '../../../store';

const __ = store.getters['locale/__'];

const addMissingKey = (key) => {
    if (store.state.meta.env === 'local') {
        // axios.patch('/api/system/localisation/addLangKey', { langKey: key });
        store.commit('locale/addKey', key);
    }

    return key;
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
