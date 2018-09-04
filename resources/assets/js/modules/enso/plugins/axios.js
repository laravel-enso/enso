import axios from 'axios';
import store from '../../../store';

const requestIndex = config => store.state.requests
    .findIndex(({ method, url }) =>
        method === config.method && url === config.url);

window.axios = axios;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

axios.interceptors.request.use((config) => {
    if (requestIndex(config) >= 0) {
        return false;
    }

    store.commit('addRequest', config);
    return config;
});

axios.interceptors.response.use((response) => {
    store.commit('removeRequest', requestIndex(response.config));
    return response;
}, (error) => {
    const { method, url } = error.config;
    store.commit('removeRequest', { method, url });

    return Promise.reject(error);
});
