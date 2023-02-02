<template>
    <div id="writeGuidance">
        <div id="writetraintask">
            训练任务：
            <el-input
                    type="textarea" v-model="traintask">
            </el-input>
        </div>
        <div id="writedrugguidance">
            药物指导：
            <el-input
            type="textarea" v-model="drugguidance"></el-input>
        </div>
        <div id="writedietguidance">
            饮食指导：
            <el-input
            type="textarea" v-model="dietguidance">
            </el-input>
        </div>
        <div id="writeother">
            其他：
            <el-input
                    type="textarea" v-model="other">
            </el-input>
        </div>
        <el-button @click="uploadData">提交</el-button>
    </div>
</template>

<script>
    import request from "@/network/request";

    export default {
        name: "writeGuidance",
        data(){
            return{
                traintask:'',
                drugguidance:'',
                dietguidance:'',
                other:'',
                flag:true
            }
        },props:{
            pid: {type:String}
        },methods:{
            uploadData(){
                //四个条件判断，当内容不为空时进行添加
                console.log(this.pid)
                if(this.traintask!==''){
                    request({
                        url:'/guidance/updateTrainTask',
                        method:'post',
                        params:{
                            pid:this.pid,
                            traincontent:this.traintask,
                            dsid:this.$store.state.user.uid
                        }
                    }).then(res=>{
                        if(res.data.code===500){
                            this.$message({
                                type:'error',
                                message:'添加失败'
                            })
                        }
                    })
                }
                if(this.drugguidance!==''){
                    request({
                        url:'/guidance/addGuidance',
                        method:'post',
                        params:{
                            pid:this.pid,
                            guidance:this.drugguidance,
                            type:1,
                            dsid:this.$store.state.user.uid
                        }
                    }).then(res=>{
                        if(res.data.code===500){
                            this.$message({
                                type:'error',
                                message:'添加失败'
                            })
                        }
                    })
                }
                if(this.dietguidance!==''){
                    request({
                        url:'/guidance/addGuidance',
                        method:'post',
                        params:{
                            pid:this.pid,
                            guidance:this.dietguidance,
                            type:2,
                            dsid:this.$store.state.user.uid
                        }
                    }).then(res=>{
                        if(res.data.code===500){
                            this.$message({
                                type:'error',
                                message:'添加失败'
                            })
                        }
                    })
                }
                if(this.other!==''){
                    request({
                        url:'/guidance/addGuidance',
                        method:'post',
                        params:{
                            pid:this.pid,
                            guidance:this.other,
                            type:3,
                            dsid:this.$store.state.user.uid
                        }
                    }).then(res=>{
                        if(res.data.code===500){
                            this.$message({
                                type:'error',
                                message:'添加失败'
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