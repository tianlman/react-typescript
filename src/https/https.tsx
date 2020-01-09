import axios from 'axios' // axios引用
import Qs from 'qs'
import {baseUrlBusiness} from "../config/ipConfig";

export const baseUrl = process.env.API_URL || baseUrlBusiness;//区分 开发 测试 发布 地址
const http = axios.create({
    baseURL: baseUrl,
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    timeout: 10000,
});

export interface IParam {
    url: string
    param: any
    method: 'GET' | 'POST' | 'PUE' | 'DELETE'
}

http.interceptors.request.use(
    (config) => {

        return config

    },
    (error) => {
        return Promise.reject(error)
    }
);

http.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        return Promise.reject(error)
    }
);

export default function $http(param: IParam) {
    const httpParam: any = {
        url: param.url,
        method: param.method,
        param: param.param,
        // cancelToken: cancelToken,
        headers: {
            // ...getUserAuthority()
        }
    };
    if (param.method === 'GET') {
        httpParam.params = param.param;
    } else {
        httpParam.data = Qs.stringify(param.param, {allowDots: true});
    }
    return http(httpParam)
}
// export default http
