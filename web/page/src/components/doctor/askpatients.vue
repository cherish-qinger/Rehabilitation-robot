<template>
    <div id="askpatients" style="margin-left: 10%;width: 80%">
        <el-container>
            <el-aside width="80px">
                <div class="colorclass" v-for="item in patients" v-bind:key="item.pid" @click="toPatientask(item.pid)">
                        <el-avatar :size="80"> {{item.pname}} </el-avatar>
                </div>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    import request from "@/network/request";

    export default {
        name: "askpatients",
        inject:['reload'],
        data(){
            return{
                patients:[]
            }
        },
        methods: {
            toPatientask(id) {
                this.reload()
                this.$router.push({path:'/askList',query:{pid:id}})
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
    .colorclass{
        color: #218838;
    }
    .el-aside {
        color: #c82333;
    }
</style>
