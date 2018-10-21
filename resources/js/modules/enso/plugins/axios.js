import axios from 'axios';
import store from '../../../store';

window.axios = axios;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

axios.interceptors.request.use((config) => {
    store.commit('addRequest', config);
    return config;
});

axios.interceptors.response.use((response) => {
    store.commit('removeRequest', store.getters.requestIndex(response.config));
    return response;
}, (error) => {
    const { method, url } = error.config;
    store.commit('removeRequest', { method, url });
    return Promise.reject(error);
});
