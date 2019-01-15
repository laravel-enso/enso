import store from '../../../store';

const addRequest = (config) => {
    if (config.params && config.params._ignoreRequest) {
        return;
    }

    store.commit('addRequest', config);
};

const removeRequest = (config) => {
    if (config.params && config.params._ignoreRequest) {
        return;
    }

    store.commit('removeRequest', store.getters.requestIndex(config));
};

export { addRequest, removeRequest };
