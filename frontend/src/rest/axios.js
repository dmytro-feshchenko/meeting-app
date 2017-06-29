import axios from 'axios';

/**
 * Setups axios interceptors
 * Sets request interceptor: onRequestSuccess
 * Sets response interceptors: onResponseSuccess, onResponseError
 *
 * @param onUnauthenticated function which will be called if 403 status received
 */
const setupAxiosInterceptors = onUnauthenticated => {
    const onRequestSuccess = config => {
        let token = localStorage.getItem('auth-token');
        if (token) {
            config.headers['x-auth-token'] = token;
        }
        config.timeout = 1000;
        return config;
    };

    const onResponseSuccess = (response) => response;

    const onResponseError = error => {
        if (error.status === 403) {
            localStorage.removeItem("auth-token");
            onUnauthenticated();
        }
        return Promise.reject(error);
    };

    axios.interceptors.request.use(onRequestSuccess);
    axios.interceptors.response.use(onResponseSuccess, onResponseError);
};

export {
    setupAxiosInterceptors
}