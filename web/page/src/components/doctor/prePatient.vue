<template>
    <div id="prepatient">
        <el-container>
            <el-aside width="151px">
                <el-menu
                        :default-active="$route.path"
                        class="el-menu-demo"
                        background-color="#545c64"
                        text-color="#fff"
                        active-text-color="#ffd04b"
                        router>
                    <el-menu-item
                            v-for="item in menutitles"
                            :key="item.id"
                            :index="item.url"
                    >
                        <span slot="title" >{{ item.name }}</span>
                    </el-menu-item>

                </el-menu>
            </el-aside>
            <el-main>
                <router-view :pid="pid"></router-view>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "prePatient",
        data(){
            return{
                pid:'',
                menutitles:[
                    {name:'查看生理数据',id:1,url:''},
                    {name:'音视频交互',id:2,url:'/train'},
                    {name:'查看患者个人信息',id:3,url:'/thePatient'},
                    {name:'查看患者病历',id:4,url:'/mrList'},
                    {name:'写病历',id:5,url:'/writeMedical_Record'},
                    {name:'写医嘱',id:6,url:'/writeGuidance'}
                ]
            }
        },mounted(){
            this.pid=this.$route.query.pid
            console.log(this.pid)
        }
    }
</script>

<style scoped>
 .el-menu-demo{
     width: 150px;
 }
    .prepatient{
        display: flex;
    }
</style>