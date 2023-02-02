<template>
  <div>
    <div class="building">
        <div class="right-form">
          <label style="margin-top: 10%">下肢康复机器人智能化监测系统</label>
        </div>
        <div class="left-form">
          <div class="school">
            <div class="school-badge"></div>
            <div class="school-name"></div>
            <div class="school-en"></div>
          </div>
          <div class="login-form">
            <el-form ref="user" label-position="right" label-width="80px" :model="user" :rules="rules" class="form" style="margin: auto" size="small">
              <el-form-item label="账号:" prop="uid" style="width: auto;margin-right: auto">
                <el-input v-model="user.uid" style="width: 70%"></el-input>
              </el-form-item>
              <el-form-item label="密码:" prop="password" style="width: auto">
                <el-input v-model="user.password" type="password" style="width: 70%"></el-input>
              </el-form-item>
              <el-form-item label="身份类型:" prop="infotype">
                <el-radio-group v-model="user.infotype" >
                  <el-radio label="患者"></el-radio>
                  <el-radio label="医生"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label-width="0">
                <el-button type="primary" @click="onSubmit('user')" style="background-color: #4A85BF;width: 80px;">登录</el-button>
                <el-button type="primary" @click="$router.push('/faceLogin')" style="background-color: #4A85BF;margin-left: 30px;width: 80px">人脸登录</el-button>
                <el-button type="primary" @click="$router.push('/Register')" style="background-color: #4A85BF;margin-left: 30px;width: 80px">注册</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
  import request from "@/network/request";
export default {
  name: 'Home',
  data(){
  var validateUsername=(rule,value,callback)=>{
    if(value===''){
      callback(new Error('请输入用户号'))
    }else{
      callback()
    }
  };
  var validateUserpass=(rule,value,callback)=>{
    if(value===''){
      callback(new Error('请输入密码'))
    }else{
      callback()
    }
  };
  var validateInfotype=(rule,value,callback)=>{
    if(value===''){
      callback(new Error('请选择类型'))
    }else{
      callback()
    }
  };
  return {
    user:{
      uid:'',
      password:'',
      infotype:''
    },
    rules:{
      uid: [
        { validator: validateUsername, trigger: 'blur' }
      ],
      password: [
        { validator: validateUserpass, trigger: 'blur' }
      ],
      infotype:[
        {validator:validateInfotype,trigger:'blur'}
      ]
    }
  }
},
  methods:{
    //用户登录
    onSubmit(formName){
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if(this.user.infotype==="患者"){
            request({
              url:'/login/pass_patient',
              params:{
                id:this.user.uid,
                password:this.user.password
              }
            }).then(res=>{
              if(res.data.code===200){
                this.$store.commit('patientLogin',res.data.data);
                this.$router.push('/patient')
              }else{
                this.$message({
                  type:"warning",
                  message:'信息错误，请重新输入'
                })
              }
            })
          }else{
            request({
              url:'/login/pass_doctor',
              params:{
                id:this.user.uid,
                password:this.user.password
              }
            }).then(res=>{
              console.log(res);
              if(res.data.code===200){
                this.$store.commit('doctorLogin',res.data.data);
                this.$router.push('/doctor')
              }else{
                this.$message({
                  type:"warning",
                  message:'信息错误，请重新输入'
                })
              }
            })
          }
        }
      })
    }
  }

}
</script>

<style>
  .left-form{
    width: 33%;
    height:  100%;
    margin: 0 0 auto;
    /*background-color: rgba(255,255,255,0.0);*/
    float: left;
    text-align: center;
    /*background-color: #abdde5;*/
  }
  .school{

    width: 80%;
    height: 20%;
    margin: 15% 10%;
  }
  .school-badge{
    background: url("../assets/image/school.png");
    margin: 1%;
    width: 7%;
    height: 13%;
    position: fixed;
    background-size: 100% 100%;
  }
  .school-name{
    background: url("../assets/image/school-name.png");
    margin: 1% 9%;
    width: 16%;
    height: 9%;
    position: fixed;
    background-size: 100% 100%;
  }
  .school-en{
    background: url("../assets/image/school-en.png");
    margin: 6% 9%;
    width: 16%;
    height: 2%;
    position: fixed;
    background-size: 100% 100%;
  }
  .login-form{

    width: 80%;
    height:  35%;
    /*border: 1px solid #dccfcf;*/
    /*border-radius: 25px;*/
    margin: 0 10% auto;
    background-color: rgba(255,255,255,0.0);
    float: left;
  }
  .form{
    /*width: 300px;*/
    /*height: 220px;*/
    width: 100%;
    height: 100%;
    /*text-align: center;*/
    margin: 23px auto;
    transform:translateY(7%);
  }
  .right-form{
    font-family: "华文楷体",Georgia,Serif;
    font-weight: bolder;
    color: white;
    font-size: 60px;
    width: 67%;
    height:  100%;
    margin: 0 0 auto;
    /*background-color: rgba(255,255,255,0.0);*/
    float: right;
    text-align: center;
    /*background-color: #92e0d6;*/
  }
  .building{
    background: url("../assets/image/back.png");
    /*background-color: #92e0d6;*/
    width: 100%;
    height: 100%;
    position: fixed;
    background-size: 100% 100%;
    /*float: right;*/
  }
</style>
