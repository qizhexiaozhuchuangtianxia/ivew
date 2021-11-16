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
export default {
  components: {},
  data() {
    return {
      ruleForm: {
        username: null,
        password: null,
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
          this.loading = true;
          this.ruleForm.password = md5(this.ruleForm.password);
          // 以下正式操作
          this.$store.dispatch('Login', this.ruleForm).then(res=>{
              console.log(res,'resssss');
              if(res.code == 200){
                
              }else{
                this.loading = false;
              }
          }).catch(error => {
                 this.loading = false;
              console.log(error,'error-----login');
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
