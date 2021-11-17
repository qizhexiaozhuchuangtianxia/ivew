import axios from 'axios'
// 请求进度条
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { ElMessage } from 'element-plus';
import qs from 'qs'
axios.interceptors.request.use(
  config => {
    // config.headers = {
    //   "Content-Type": "application/x-www-form-urlencoded"
    // };
    // config.data = config.data ? qs.stringify(config.data) : '';
    NProgress.start();
    return config;
  },
  err => {
    ElMessage.error(err)
    return Promise.reject(err);
  }
);

axios.interceptors.response.use(
  response => {
    const res = response;
    // token失效处理及用户登录未授权处理 服务器
    if (/^(401|-1003|-1009)$/.test(res.data.code)) {
      store.dispatch('clearAll');
    }
    NProgress.done()
    if (res.status == 200) {
      return res;
    }
  },
  error => {
    ElMessage.error('服务器通讯故障')
    NProgress.done()
    if (error && error.response) {
      // 处理token失效
      if (error.response.status == 401) {
        store.dispatch('clearAll');
      }
      // cath捕获
      if (error.response.data) {
        let res = error.response.data;
        res.msg = res.msg ? res.msg : '服务器通讯故障';
        return Promise.reject(res)
      }
    } else {
      ElMessage.error('服务器通讯故障')
    }
  }
);



export const postRequest = (url, baseURL, params) => {
  return axios({
    method: 'post',
    baseURL: `${baseURL}`,
    url: `${url}`,
    data: params,
    timeout: 30000,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": '*',
      "Access-Control-Allow-Methods": "POST,GET",
    }
  });
}

export const postJsonRequest = (url, baseURL, params) => {
  return axios({
    method: 'post',
    baseURL: `${baseURL}`,
    url: `${url}`,
    data: params,
    timeout: 30000,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    }
  });
}

export const putRequest = (url, baseURL, params) => {
  return axios({
    method: 'put',
    baseURL: `${baseURL}`,
    url: `${url}`,
    data: params,
    timeout: 30000,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
    }
  });
}

export const deleteRequest = (url, baseURL, params) => {
  return axios({
    method: 'delete',
    baseURL: `${baseURL}`,
    url: `${url}`,
    data: params,
    timeout: 30000,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    }
  });
}

export const getRequest = (url, baseURL, params, isToken) => {
  if (isToken) {
    params.token = token
  }
  return axios({
    method: 'get',
    baseURL: `${baseURL}`,
    url: `${url}`,
    params,
    timeout: 30000,
    headers: {}
  });
}

