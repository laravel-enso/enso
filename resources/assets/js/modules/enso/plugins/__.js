import Vue from 'vue';
import store from '../../../store';

const __ = store.getters['locale/__'];

const missingKey = (key) => {
    if (store.state.meta.env === 'local') {
        // axios.patch('/api/system/localisation/addLangKey', { langKey: key });
        store.commit('locale/addKey', key);
    }

    return key;
};

Vue.prototype.__ = (key) => {
    if (!store.state.user.preferences) {
        return key;
    }

    const translation = __(key);

    return typeof translation === 'undefined'
        ? missingKey(key)
        : translation;
};
