import * as api  from "../utils/request.js"
import {baseUrl}  from "../utils/apis.js"

export const userInfoRequest = {
    // login(data) {
    //     return http.postRequestCms('/user/login',baseUrl , data).then((response) => {
    //         return response.data
    //     })
    // },
    login(data) {
        return api.getRequest('/xmtzx/v1.0/app/anchor/get','http://tjksh.weoathome.com' , data).then((response) => {
            return response.data
        })
    },

    signOut(data) {
        return api.getRequest('/xmtzx/v1.0/app/anchor/get','http://tjksh.weoathome.com' , data).then((response) => {
            return response.data
        })
    },
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