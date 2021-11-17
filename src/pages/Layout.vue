<template>
  <div class="layout">
    <div class="view-head">
        <div class="view-head-left">
          <el-icon  color="#fff" :size="30"> <user /></el-icon>

        </div>
        <div class="view-head-right">
          <el-icon color="#fff" :size="30"> <user /></el-icon>
          <span>张三</span>
        </div>
    </div>
    <div class="layout-cont">
    <div class="left">
      <!-- <div :class="{ logo_s: coll }"></div> -->
      <div class="menu">
        <el-menu
          class="el-menu-vertical-demo"
          default-active="3"
          text-color="#5e6d82"
           active-text-color="#32AF93"
           active-background-color	="#ededed"
          @open="handleOpen"
          @close="handleClose"
        >
        <template v-for="(item,index) in menuList" :key="index" >
          <!-- el-sub-menu 有children -->
          <el-sub-menu v-if="item.children" >
              <template #title :index="item.index">
                <el-icon><component :is="item.meta.icon" /> </el-icon>
              <span>{{ item.meta.title }}</span>
              </template>
              <el-menu-item-group>
                  <el-menu-item v-for="i in item.children" :key="i"  :index="i.index">{{i.meta.title}}</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
            <!-- el-menu-item 有children -->
          <el-menu-item  v-if="!item.children" :index="item.index" @click="onClickMenu(item)">
             <template #title :index="item.index">
            <el-icon><component :is="item.meta.icon" /> </el-icon>
              <span>{{ item.meta.title }}</span>
             </template>
          </el-menu-item>
        </template>
        </el-menu>
      </div>
    </div>
    <div class="right">
      <div style="display:none" class="view-nav">
        <el-tabs
          v-model="act"
          type="card"
          closable
          @tab-click="clickTab"
          @tab-remove="clickRemove"
        >
          <el-tab-pane
            v-for="(item, inx) in tabList"
            :key="item.name"
            :label="item.title"
            :name="item.name"
          >
          </el-tab-pane>
        </el-tabs>
      </div>
      <div class="view-con">
        <router-view/>
        <transition name="display"></transition>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref, onMounted, computed } from "vue";
import {useStore} from 'vuex'
import { useRouter } from 'vue-router';
// import * as compoentMap from "../utils/menu.js"
import ShopManage from '../views/shopManage'
import UserManage from '../views/userManage'
import BrandManage from '../views/brandManage'
const compoentMap = {
    userManage: UserManage ,
    shopManage: ShopManage,
    brandManage: BrandManage
}

export default defineComponent({
  name:'layout',
  setup(props, root) {
    const isCollapse = ref(false);
    const handleOpen = (key, keyPath) => {
      console.log(key, keyPath);
    }; 
    const handleClose = (key, keyPath) => {
      console.log(key, keyPath);
    };
    const store = useStore();
    console.log(store,'sss');
    const router = useRouter();
     onMounted(() => {
      console.log(11);
        store.dispatch('getRouter');
    })
    // if(list){
      //   console.log( store.state.menuList ,' store.state.menuList ');
    //   router.push(store.state.menuList[0].path);
    // }
    // TODO 默认第一次进入
    // TODO 刷新路由空白页面
    const menuList = computed(() => {
      const list = store.state.menuList 
        if(list){
          
          list.forEach((item,index) => {
            router.addRoute('layout', { path: item.path, component: compoentMap[item.component] })
             
          })
        }
        return list;
    })

   

    const onClickMenu = (item) => {
      console.log(item,'items');
        router.push(item.path);
    }

    return {
      isCollapse,
      handleOpen,
      handleClose,
      menuList,
      onClickMenu
    };
  },
});
</script>

<style lang="stylus">
</style>
