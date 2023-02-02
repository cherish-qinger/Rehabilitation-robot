<template>
    <div id="writeAsk">
        <el-form ref="ask" :model="ask" >
            <el-form-item label="问题内容" prop="askcontent" >
                <el-input v-model="ask.askcontent" ></el-input>
            </el-form-item>
            <el-form-item >
                <el-button type="primary" @click="onSubmit()">提交</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import request from "@/network/request";

    export default {
        name: "writeAsk",
        data(){
          return{
              ask:{
                  askcontent:'',
              },
              pid:this.$store.state.user.uid

          }
        },
        methods:{
            onSubmit(){
                console.log(this.pid);
                console.log(this.ask.askcontent);
                request({
                    url:'/patient/writePask',
                    params:{
                        askcontent:this.ask.askcontent,
                        pid:this.pid-0,
                    }
                }).then(res=>{
                    if(res.data.code===200){
                        this.$router.push('/askList')
                    }else{
                        this.$message({
                            type:"warning",
                            message:'信息错误，请重新输入'
                        })
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>