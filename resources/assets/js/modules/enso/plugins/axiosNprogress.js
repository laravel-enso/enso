import axios from 'axios';

export default (nprogress) => {
    axios.interceptors.request.use((config) => {
        nprogress.incRequests();
        return config;
    });

    axios.interceptors.response.use((response) => {
        nprogress.incResponses();
        return response;
    }, (error) => {
        nprogress.incResponses();
        return Promise.reject(error);
    });
};
