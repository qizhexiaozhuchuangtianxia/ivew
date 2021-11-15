<template>
  <el-form
  :model="ruleForm"
  status-icon
  :rules="rules"
  ref="ruleForm"
  label-width="100px"
  class="demo-ruleForm"
>
  <el-form-item label="账号" prop="userName">
    <el-input
      v-model="ruleForm.userName"
      autocomplete="off"
    ></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="password">
    <el-input
      type="password"
      v-model="ruleForm.password"
      autocomplete="off"

    ></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
</template>

<script>
    import md5 from 'js-md5'
    import {filterAsyncRouter} from '../utils/router.js'
    import { mapGetters } from 'vuex'
    export default {
        components: {

        },
        data () {
            return {
                ruleForm: {
                    userName: null,
                    password: null
                },
                rules: {
                    userName: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
                    password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
                },
                // loading: false,
                getInfoes: {
                    userName: '333',
                    loginIp: '',
                    loginTime: Date.now(),
                    ipAddr: ''
                }
            }
        },
        mounted(){
         this.filterAsyncRouter()
            // if(this.getInfo&&(/^\/login$/).test(this.$route.path)){
            //     this.$link('/home')
            // }
        },
        computed: {
            ...mapGetters(['getInfo'])
        },
        methods:{
            submitForm(formName){
               
               
                this.$refs[formName].validate((valid) => {
                    if(valid){
                        console.log(11111, this.rules.password[0].message);
                        this.$nextTick(() => { this.rules.password[0].message= '222'})
                       
                        // this.$store.dispatch('Login', this.ruleForm).then(res =>{
                        //     console.log(res,'resssss');
                        //     if(res.code == 200){

                        //     }else{

                        //     }
                        // }).catch(error => {
                        //     console.log(error,'error-----login');
                        //     reject(error)
                        // })
                    }else{
                        this.loading = false;
                        return false;
                    }
                });
            }
        }
    }
</script>

<style lang="stylus"></style>
