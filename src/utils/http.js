import axios from 'axios'
import store from '../store/index'
import router from '@/router'
import { setItem, getItem, remItem } from './com'
import qs from 'qs'
// 请求进度条
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { ElMessage } from 'element-plus';

const service = axios.create({
    baseURL: 'https://baidu.com',
    timeout: 50000
});

service.interceptors.request.use(
    config => {
        config.headers = {
            "Content-Type": "application/x-www-form-urlencoded"
        };
        config.data = config.data?qs.stringify(config.data):'';
        NProgress.start();
        return config;
    },
    err => {
        ElMessage.error(err)
        return Promise.reject(err);
    }
);

service.interceptors.response.use(
    response => {
        const res = response;
        // token失效处理及用户登录未授权处理（状态码需与后台人员保持一致）
        if(/^(401|-1003|-1009)$/.test(res.data.resCode)){
            store.dispatch('clearAll');
        }
        if(res.status == 200 ) {
            if(
                res.data.resCode != 1 &&
                res.data.resCode != 10008 &&
                res.data.msg &&
                res.data.msg != ""
            ){
                // 错误统一提示语
                ElMessage.error(err)
            }
            NProgress.done()
            return res.data;
        }
    },
    error => {
        if (error && error.response) {
            // 处理token失效
            if(error.response.status == 401 ) {
                store.dispatch('clearAll');
            }
            if(error.response.data) {
                let res = error.response.data;
                res.msg = res.msg?res.msg:'服务器通讯故障';
                return Promise.reject(res)
            }
        }else {
            return {msg:'服务器通讯故障'}
        }
	}
);


export default service;
