<template>
  <div class="pagination">
    <el-config-provider :locale="locale">
      <el-pagination
        v-model:currentPage="currentPage"
        :page-sizes="[20, 40]"
        :page-size="20"
        layout="total, sizes, prev, pager,next"
        :total="33"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      >
      </el-pagination>
    </el-config-provider>
  </div>
</template>

<script>
import { ElConfigProvider, ElPagination } from "element-plus";
import { ref } from "vue";

import zhCn from "element-plus/lib/locale/lang/zh-cn";
export default {
  name: "user",
  components: {
    [ElConfigProvider.name]: ElConfigProvider, //添加组件
    [ElPagination.name]: ElPagination, //添加组件
  },
  setup(props, root) {
    //   const { total } = ref(props)
    //   console.log(total,'total');
    const handleSizeChange = (val) => {
        root.emit('sizePage',`${val} items per sizePage`)
      console.log('page',`${val} items per page`);
    };
    const handleCurrentChange = (val) => {
        root.emit('currentPage',`${val} items per current`)
      console.log(`current page: ${val}`);
    };
    return {
      handleSizeChange,
      handleCurrentChange,
      locale: zhCn, //给locale赋值
      currentPage: ref(""),
    };
  },
};
</script>

<style lang="stylus">
    .pagination
        text-align: right 
</style>
