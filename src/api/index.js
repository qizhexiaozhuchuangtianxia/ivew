/*
 * @Author: 刘俊卿
 * @Description: 用户信息
 */
import * as api  from "../utils/request.js"
import url  from "../utils/apis.js"
console.log(url.baseUrl,'baseUrl');
export const userInfoRequest = {
    // login(data) {
    //     return http.postRequestCms('/user/login',baseUrl , data).then((response) => {
    //         return response.data
    //     })
    // },
    login(data) {
        return api.postRequest('/admin/login',url.baseUrl, data).then((response) => {
            return response.data
        })
    },

    // login(data) {
    //     return api.getRequest('/xmtzx/v1.0/app/ancho1r/get','http://tjksh.weoathome.com' , data).then((response) => {
    //         return response.data
    //     })
    // },
    userInfo(data) {
        return api.getRequest('/xmtzx/v1.0/app/anchor/get','http://tjksh.weoathome.com' , data).then((response) => {
            return response.data
        })
    },
    menuLists(data) {
        return api.getRequest('/xmtzx/v1.0/app/anchor/get','http://tjksh.weoathome.com' , data).then((response) => {
            return response.data
        })
    },
    // http://tjksh.weoathome.com/xmtzx/v1.0/app/anchor/get
    
}