<template>
    <div id="doctor">
        <el-menu
                :default-active="$route.path"
                class="el-menu-demo"
                mode="horizontal"
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
        <router-view v-if="isRouterAlive"></router-view>
    </div>
</template>

<script>
    import patientList from "@/components/doctor/patientList";
    import prePatient from "@/components/doctor/prePatient";
    export default {
        name: "Doctor",
        provide (){
            return {
                reload:this.reload
            }
        },
        component:{
            patientList,
            prePatient
        },
        data(){
            return{
                isRouterAlive:true,
                //用来存储点击菜单后页面转向何种界面
                menutitles:[
                    {name:'查看患者',id:1,url:'/patientList'},
                    {name:'查看个人信息',id:2,url:'/PersonalInformation'},
                    {name:'线下答疑',id:3,url:'/askpatients'},
                    {name:'患者视频',id:4,url:'/patientVideo'},
                    {name:'生理数据',id:5,url:'/photo'}
                ]
            }
        },
        methods:{
            reload (){
                this.isRouterAlive = false
                this.$nextTick(function(){
                    this.isRouterAlive = true
                })
            }
        }
    }
</script>

<style scoped>

</style>
