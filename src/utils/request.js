import axios from 'axios';
import {IsLogin, GetToken} from '../components/UserService';

const service = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 5000
});

service.interceptors.request.use(
    config => {
        if(IsLogin()) {
            config.headers['X-Token'] = GetToken();
        }
        return config;
    },

    error => {
        // do something with request error
        console.log(error) // for debug
        return Promise.reject(error)
    }
)


service.interceptors.response.use(
    response => {
        if(response.status !== 200) {
            return Promise.reject(new Error(response.statusText || 'Error'));
        } else {
            return response.data;
        }
    },
    error => {
          // do something with request error
          console.log(error) // for debug
          return false;
    }
);

export default service;