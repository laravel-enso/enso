import axios from 'axios';
import { addRequest, removeRequest } from './requestManager';

window.axios = axios;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

axios.interceptors.request.use((config) => {
    addRequest(config);
    return config;
});

axios.interceptors.response.use((response) => {
    removeRequest(response.config);
    return response;
}, (error) => {
    removeRequest(error.config);
    return Promise.reject(error);
});
