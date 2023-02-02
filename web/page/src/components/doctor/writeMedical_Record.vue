<template>
    <div id="writeMedical_Record">
        <div id="writemrcontent">
            病例内容：
            <el-input
                    type="textarea" v-model="mrcontent">
            </el-input>
            填写人
            <el-input
                    type="textarea" v-model="writed">
            </el-input>
        </div>
        <el-button @click="uploadData">提交</el-button>
    </div>
</template>

<script>
    import request from "@/network/request";

    export default {
        name: "writeMedical_Record",
        inject:['reload'],
        data(){
            return{
                writed:'',
                mrcontent:'',
                flag:true
            }
        },props:{
            pid: {type:String}
        },methods:{
            uploadData(){
                console.log(this.pid)
                if(this.traintask!==''){
                    request({
                        url:'/doctor/addmrcontent',
                        method:'post',
                        params:{
                            pid:this.pid,
                            mrcontent:this.mrcontent,
                            writed:this.writed
                        }
                    }).then(res=>{
                        if(res.data.code===500){
                            this.$message({
                                type:'error',
                                message:'添加失败'
                            })
                        }
                        else if(res.data.code===200){
                            this.$message({
                                type:'success',
                                message:'添加成功',

                            })

                        }
                    })
                }
            }
        }
    }
</script>

<style scoped>

</style>