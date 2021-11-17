<template>
  <div class="shopManage-wrap">
    <div class="shop-head">
      <div>
        <h3>门店店铺列表</h3>
        <span>共{{ totalshops }}家店铺</span>
      </div>
      <div>
        <el-button type="primary">新增门店</el-button>
        <el-dropdown @command="handleCommand">
          <el-button type="primary">
            批量操作<el-icon class="el-icon--right"><arrow-down /></el-icon>
          </el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="更换负责人"
                >更换负责人</el-dropdown-item
              >
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <el-button type="primary" @click="exports()">导出Excel</el-button>
      </div>
    </div>
    <el-divider></el-divider>
    <div class="shop-search">
      <div class="shop-input-search">
        <el-input
          v-model="input3"
          placeholder="请输入关键字"
          class="input-with-select"
        >
          <template #prepend>
            <el-select
              v-model="select"
              placeholder="门店名称"
              style="width: 110px"
            >
              <el-option label="Restaurant" value="1"></el-option>
              <el-option label="Order No." value="2"></el-option>
              <el-option label="Tel" value="3"></el-option>
            </el-select>
          </template>
          <template #append>
            <el-icon :size="20">
              <search />
            </el-icon>
          </template>
        </el-input>
      </div>
      <div class="time-input-search">
        <div class="search-left-tip">
            创建时间
        </div>
        <div class="picker-cont">
          <el-date-picker
            v-model="picker"
            type="daterange"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
            :default-value="[new Date(2010, 9, 1), new Date(2010, 10, 1)]"
            range-separator="-"
          >
          </el-date-picker>
        </div>

        <!-- <div class="default-picker">
          <el-input
            v-model="picker"
            placeholder="开始时间-结束时间"
            class="input-with-select"
          >
            <template #prepend>
              <div class="">创建时间</div>
            </template>
          </el-input>
        </div> -->
        <!-- <div class="picker-cont">
          <el-date-picker
            v-model="picker"
            type="daterange"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
            :default-value="[new Date(2010, 9, 1), new Date(2010, 10, 1)]"
            range-separator="-"
          >
          </el-date-picker>
        </div> -->
      </div>
      <div class="city-input-search">
      </div>
    </div>
    <div class="shop-tables">
      <div class="tables">
        <el-table :data="lists">
          <el-table-column label="门店名称" prop="shopName" />
          <el-table-column label="城市" prop="city" />
          <el-table-column label="品牌" prop="brandName" />
          <el-table-column label="联系人" prop="linkman" />
          <el-table-column label="联系方式" prop="telephone" />
          <el-table-column label="负责人" prop="leaderName"/> 
          <el-table-column label="创建时间" prop="dbCreateTime"/>
        </el-table>
      </div>
      <pagination @sizePage="sizePageChange" @currentPage="currentPageChange"></pagination>
    </div>
    <!-- 更换联系人 -->
    <el-dialog
      v-model="ChangePeoleDialog.stat"
      title="更换联系人"
      width="20%"
      :before-close="handleClose"
    >
      <el-autocomplete
        class="inline-input"
        v-model="pepName"
        :fetch-suggestions="querySearch"
        placeholder="请选择负责人"
        @select="handleSelect"
      ></el-autocomplete>
      <template #footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="dialogVisible = false"
            >确定</el-button
          >
          <el-button @click="dialogVisible = false">取消</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { defineComponent, ref, reactive, onMounted, h } from "vue";
import pagination from "../../components/pagination.vue"
import { ElMessageBox } from "element-plus";
export default defineComponent({
  name: "shopManage",
   components: {
     pagination
  },
  setup(props, root) {
    const loadAll = () => {
      return [
        { value: "董事长" },
        {
          value: "总经理",
        },
      ];
    };
    const ChangePeoleDialog = reactive({ stat: false });
    const { total } = reactive(50)
    console.log(ChangePeoleDialog, "ChangePeoleDialog");
    const restaurants = ref([]);
    onMounted(() => {
      restaurants.value = loadAll();
    });
    const handleCommand = () => {
      ChangePeoleDialog.stat = true;
    };
    const handleClose = () => {
      ChangePeoleDialog.stat = false;
    };
    const exports = () => {};
    const querySearch = (queryString, cb) => {
      var results = queryString;
      cb(results);
    };
    const sizePageChange =  ((page)=>{
      console.log(page,'page---');
    })

    const currentPageChange = ((curPage)=>{
      console.log(curPage,'curPage---');
    })
   
    return {
      handleCommand,
      handleClose,
      querySearch,
      loadAll,
      exports,
      currentPageChange,
      sizePageChange,
      total,
      picker: ref(""),
      ChangePeoleDialog,
      totalshops: 22,
      pepName: ref(""),
      currentPage:ref(""),
      lists:[
        {
          shopName : '1234',
          city : '门店名称',
          brandName : '1234',
          linkman : '1234',
          telephone : '1234',
          leaderName : '的风格',
          dbCreateTime : '1234',
      },
       {
          shopName : '1234',
          city : '门店名称',
          brandName : '1234',
          linkman : '1234',
          telephone : '1234',
          leaderName : '的风格',
          dbCreateTime : '1234',
      },
      ]
    };
  },
});
</script>
<style lang="stylus">
@import './css.styl'
</style>
  
