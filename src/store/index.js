// import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'
import {  setItem, getItem, remItem } from '../utils/com'
import * as api from "../api/index.js";

const store = new Vuex.Store({
	state: {
        getInfo: getItem('getInfo')?getItem('getInfo'):null,
        menuList: getItem('menuList')?getItem('menuList'):null,
        bgColor: getItem('bgColor')?getItem('bgColor'):'#515a6e',
        userToken:getItem('user_token')?getItem('user_token'):null,
	},
	mutations: {
        SET_GETINFO: (state, getInfo) => {
            state.getInfo = getInfo;
        },
        SET_BGCOLOR: (state, bgColor) => {
            state.bgColor = bgColor;
        },
        SET_MENULIST: (state, menuList) => {
            state.menuList = menuList;
        },
        SET_USER_TOKEN: (state, userToken) => {
            state.userToken = userToken;
            setItem('userToken',userToken || 'token-local');
        }
	},
    getters:{
        getInfo: state => state.getInfo,
        menuList: state => state.menuList,
        bgColor: state => state.bgColor,
        isLoggedIn: state => !!state.userToken, // TODO 路由判断页面是否登录
    },
    actions: {
        // 账户登录
        Login({ commit }, userInfo) {
            return new Promise((resolve,reject) => {
                return api.userInfoRequest.login().then((res)=>{
                    commit("SET_USER_TOKEN", 'token-vuex')
                    resolve(res)
                 }) 
            }).catch(error => {
                reject(error)
            })
        },
        // 拉取菜单列表
        MenuList({ commit }, id) {
               
        },
        // 退出
        LogOut({ commit, state }) {

        },
        // 清除所有的本地缓存
        clearAll({ commit }) {
            return new Promise((resolve) => {
                remItem();
                //清除储存在state中的值
                commit('SET_GETINFO', null)
                commit("SET_MENULIST", null)
                router.push('/login')
                resolve()
            })
        }
    }
})

export default store
