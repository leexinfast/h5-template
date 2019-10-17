import axios from 'axios';
import QS from 'qs';
import Core from "../core";
import { Toast } from 'vant';


//获取环境域名
axios.defaults.baseURL = process.env.VUE_APP_BASE_API;

// 请求超时时间
axios.defaults.timeout = 100000;

// 请求拦截器
axios.interceptors.request.use(
    config => {
        // console.log(config)
        //headers请求头添加token
        // const token = localStorage.getItem('token');
        // token && (config.headers.token = token);
        const toast = Toast.loading({ duration: 0, forbidClick: true, });
        return config;
    },
    error => {
        Toast.clear();
        return Promise.error(error);
    })

// 响应拦截器
axios.interceptors.response.use(
    response => {
        Toast.clear();
        if (response.status == 200) {
            if (response.data.code == 1) {
                return Promise.resolve(response.data);
                toast.clear();
            } else {
                Toast(response.data.msg);
                return Promise.reject(response.data);
            }
        } else {
            // Toast(1);
            return Promise.reject(response);
        }

    },
    // 服务器状态码不是200的情况
    error => {
        Toast.clear();
        if (error.response.status) {
            switch (error.response.status) {
                // 401
                case 401:
                    Toast({mes: 401});
                    break;
                // 403
                case 403:
                    Toast({mes: 403});
                    break;
                // 404请求不存在
                case 404:
                    Toast(error.response.statusText);
                    break;
                // 其他错误，直接抛出错误提示
                default:
                    Toast(error.response.data);
                    break;
            }
            return Promise.reject(error.response);
        }
    }
);

//get
export function get(url, params) {
    if (!params) {
        params = {}
    }
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: Core.Util.signParams(params)
        }).then(res => {
            if (res) {
                resolve(res.data);
            } else {
                reject()
            }
        }).catch(err => {
            reject(err)
        })
    });
}

//post
export function post(url, params) {
    if (!params) {
        params = {}
    }
    return new Promise((resolve, reject) => {
        axios({
            url: url,
            method: 'post',
            data: QS.stringify(Core.Util.signParams(params)),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            }
        }).then(res => {
            if (res.code == 0) {
                resolve(res.data);
            } else {
                resolve(res);
            }
        }).catch(err => {
            reject(err)
        })
    });
}

// postJson
export function postJson(url, params) {
    if (!params) {
        params = {}
    }
    return new Promise((resolve, reject) => {
        axios({
            url: url,
            method: 'post',
            data: Core.Util.signParams(params),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            if (res.code == 0) {
                resolve(res.data);
            } else {
                resolve(res);
            }
        }).catch(err => {
            reject(err)
        })
    });
}

const Api = {
    post: post,
    get: get,
    postJson: postJson
};

export default Api

