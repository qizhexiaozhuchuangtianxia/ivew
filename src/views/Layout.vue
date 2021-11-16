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
          default-active="1"
          text-color="#5e6d82"
           active-text-color="#32AF93"
           active-background-color	="#ededed"
          @open="handleOpen"
          @close="handleClose"
        >
        <template v-for="item in menuList" :key="item.index" >
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
          <el-menu-item  v-if="!item.children" :index="item.index">
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
        <router-view></router-view>
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
import * as menuCompoent from "../utils/menu.js"
import Home from '../views/Home.vue'
import Task from '../components/task/task.vue'
import User from '../components/user/user.vue'
const compoentMap = {
   home: Home,
    task: Task,
    user: User
}
export default defineComponent({
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
    const menuList = computed(() => {
        const list = store.state.menuList 
        if(list){
          list.forEach(item => {
              router.addRoute('layout', { path: item.path, component: compoentMap[item.component] })
          })
        }
        return list;
    })

   

    const onClickMenu = (item) => {
        router.push(item.path);
    }
    // if(!localStorage.getItem('tabList')){
    //     this.tabList = [{
    //     title: this.$route.name,
    //     name: this.$route.path.substring(1,this.$route.path.length)
    // }]
    // this.$setItem('tabList',this.tabList);
    // }
    return {
      isCollapse,
      handleOpen,
      handleClose,
      //   tabList: this.$getItem("tabList") ? this.$getItem("tabList") : [],
      //   tabList: [],
      menuLists: [
        {
          index: "home",
          title: "首页",
          path: "home",
        },
        {
          index: "table",
          title: "表格",
          child: [
            {
              index: "table/table1",
              title: "表格1",
              path: "table/table1",
            },
            {
              index: "table/table2",
              title: "表格2",
              path: "table/table2",
            },
          ],
        },
        {
          index: "form",
          title: "表单",
          child: [
            {
              index: "form/form1",
              title: "表单1",
              path: "form/form1",
            },
            {
              index: "form/form2",
              title: "表单2",
              path: "form/form2",
            },
          ],
        },
        {
          index: "grop",
          title: "表组",
          child: [
            {
              index: "grop/grop1",
              title: "表组1",
              path: "grop/grop1",
            },
            {
              index: "grop/grop2",
              title: "表组2",
              path: "grop/grop2",
            },
          ],
        }
      ],
      menuList,
      onClickMenu
    };
  },
});
</script>

<style lang="stylus">
</style>
