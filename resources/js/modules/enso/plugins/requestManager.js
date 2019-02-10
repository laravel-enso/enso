import store from '../../../store';

const addRequest = (config) => {
    store.commit('addRequest', config);
};

const removeRequest = (config) => {
    store.commit('removeRequest', store.getters.requestIndex(config));
};

export { addRequest, removeRequest };
