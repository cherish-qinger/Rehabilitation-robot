<template>
    <div id="patient">
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
        <router-view/>
    </div>
</template>

<script>
    import SeeGuidance from "@/components/patient/SeeGuidance";
    import PatientTrain from "@/components/patient/PatientTrain";
    export default {
        name: "Patient",
        provide (){
            return {
                reload:this.reload
            }
        },
        component:{
            SeeGuidance,
            PatientTrain
        },
        data(){
            return{
                //用来存储点击菜单后页面转向何种界面
                menutitles:[
                    {name:'康复训练',id:1,url:'/patientTrain'},
                    {name:'查看病历',id:2,url:'/medical_record'},
                    {name:'查看医嘱',id:3,url:'/seeGuidance'},
                    {name:'线下留言',id:4,url:'/askPList'},
                    {name:'屏幕录制',id:5,url:'/videoRecord'}
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
