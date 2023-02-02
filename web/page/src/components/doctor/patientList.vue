<template>
    <div id="patientList" style="width: 80%;margin-left: 10%">
        <el-input
                type="text"
                placeholder="请输入用户名进行查询"
                v-model="input"
                clearable>
        </el-input>
        <div v-for="item in list" v-bind:key="item.pid" @click="toPatient(item.pid)">
            <el-card>
                {{item.pname}}
                <el-button style="float: right; padding: 8px 0"
                           @click.stop="deletepdrelation(item.pid)"
                           type="danger"
                           round>
                    <span>删除</span>
                </el-button>
            </el-card>
        </div>
        <i class="el-icon-plus" @click="addpatient"></i>
    </div>
</template>

<script>
    import request from "@/network/request";

    export default {
        name: "patientList",
        inject:['reload'],
        data(){
            return{
                input:'',
                patients:[],
            }
        },methods:{
            toPatient(id){
                this.$router.push({path:'/prepatient',query:{pid:id}})
            },
            deletepdrelation(id){
                request({
                    url:'/patient/deletepdrelation',
                    method: 'post',
                    params: {
                        pid:id,
                        dsid:this.$store.state.user.uid
                    }
                }).then(res=>{
                    if(res.data.code===500){
                        this.$message({
                            type:'error',
                            message:'删除失败'
                        })
                    }
                    else {
                        this.reload()
                    }
                })
            },
            addpatient(){
                this.$router.push('/RegisterPatient')
            }
        },
        computed:{
            list:function(){
                var result =[];
                for(var i=0;i<this.patients.length;i++){
                    if(this.patients[i].pname.indexOf(this.input)!=-1){
                        result.push(this.patients[i])
                    }
                }
                return result;
            }
        },

        mounted(){
            //挂载时，向后端请求数据，数据保存在patients数组中
            request({
                url:'/doctor/getMyPatients',
                method:'get',
                params:{dsid:this.$store.state.user.uid}
            }).then(res=>{
                if(res.data.code===200){
                    this.patients=res.data.data;
                }
            })
        }
    }
</script>

<style scoped>

</style>
