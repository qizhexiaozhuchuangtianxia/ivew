<template>
  <div class="login">
    <div class="model">
      <div class="box">
        <h3>欢迎登录</h3>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
          <el-form-item prop="username">
            <el-input
              v-model="ruleForm.username"
              placeholder="请输入用户名"
              clearable
              prefix-icon="User"
            ></el-input>
          </el-form-item>

              <el-form-item prop="password" >
            <el-input
              v-model="ruleForm.password"
              placeholder="请输入密码"
              prefix-icon="Unlock"
              clearable
              show-password
            ></el-input>
          </el-form-item>
        </el-form>
       <el-button type="primary" @click="asubmitForm('ruleForm')" :loading="loading">登陆</el-button>
       <el-button type="primary" @click="a('ruleForm')" :loading="loading">登aaas陆</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import md5 from "js-md5";
import { mapGetters } from "vuex";
import { ElMessage } from 'element-plus';
// import { defineComponent, onMounted } from "vue";
// export default defineComponent({
//   name:'login',
//   setup(props, root) {
//    onMounted(()=>{
//      // 如果已经登陆,再次输入login页面无效
//     // if(root.getInfo&&(/^\/login$/).test(root.$route.path)){
//     //     root.$link('/home')
//     // }
//    })
//    return{
//        ruleForm: {
//         username: 1,
//         password: 2,
//       },
//       rules: {
//         username: [
//           { required: true, message: "请输入用户名", trigger: "blur" },
//         ],
//         password: [{ required: true, message: "请输入密码", trigger: "blur" }],
//       },
//       loading: false,
//       getInfoes: {
//           username: null,
//           loginIp: '',
//           loginTime: Date.now(),
//           ipAddr: ''
//       }
//    }
//    computed(()=>{
//       // ...mapGetters(['getInfo','userToken'])
//    })
//      asubmitForm(formName) {
//       root.$refs[formName].validate((valid) => {
//         if (valid) {
//           root.loading = true;
//           root.ruleForm.password = md5(root.ruleForm.password);
//           // 以下正式操作
//           root.$store.dispatch('Login', root.ruleForm).then(res=>{
//               console.log(res,'resssss');
//               if(res.code == 200){
                
//               }else{
//                 root.loading = false;
//               }
//           }).catch(error => {
//                  root.loading = false;
//               console.log(error,'error-----login');
//               reject(error)
//           })
//         } else {
//           root.loading = false;
//           return false;
//         }
//       });
//     }
//   },
// });
export default {
  components: {},
  data() {
    return {
      ruleForm: {
        username: 'admin',
        password: 2,
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
      loading: false,
      getInfoes: {
          username: null,
          loginIp: '',
          loginTime: Date.now(),
          ipAddr: ''
      }
    };
  },
  mounted() {
    // 如果已经登陆,再次输入login页面无效
    // if(this.getInfo&&(/^\/login$/).test(this.$route.path)){
    //     this.$link('/home')
    // }
  },
  computed: {
      ...mapGetters(['getInfo','userToken'])
  },
  methods: {
    a(){
      this.$router.push({path:"/Layout"});

    },
    asubmitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.ruleForm);
          this.loading = true;
          // TODO
          // this.ruleForm.password = md5(12);
          // this.ruleForm.password = md5(this.ruleForm.password);
          // 以下正式操作
          this.$store.dispatch('Login', this.ruleForm).then(res=>{
              console.log(res,'resssss');
              if(res.code == 200){
                 this.$router.push({path:"/Layout"});
              }else{
                  ElMessage.error(res.message)
              }

                this.loading = false;
          }).catch(error => {
                 this.loading = false;
              reject(error)
          })
        } else {
          this.loading = false;
          return false;
        }
      });
    },
  },
};
</script>

<style lang="stylus"></style>
