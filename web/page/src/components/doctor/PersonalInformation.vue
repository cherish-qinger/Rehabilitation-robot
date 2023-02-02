<template>
    <div id="PersonalInformation">
        <el-descriptions title="用户信息" direction="vertical" border>
            <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-picture-outline"></i>
                    照片
                </template>
            </el-descriptions-item>
            <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-user"></i>
                    用户名
                </template>
                {{theDoctor.dname}}
            </el-descriptions-item>
            <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-edit"></i>
                    性别
                </template>
                {{theDoctor.dsex}}
            </el-descriptions-item>
            <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-edit"></i>
                    年龄
                </template>
                {{theDoctor.dage}}
            </el-descriptions-item>
            <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-edit"></i>
                    工作年龄
                </template>
                {{theDoctor.wage}}
            </el-descriptions-item>
            <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-edit"></i>
                    出生日期
                </template>
                {{theDoctor.dbirth}}
            </el-descriptions-item>
            <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-mobile-phone"></i>
                    手机号
                </template>
                {{theDoctor.dtel}}
            </el-descriptions-item>
            <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-office-building"></i>
                    联系地址
                </template>
                {{theDoctor.daddress}}
            </el-descriptions-item>
        </el-descriptions>
    </div>
</template>

<script>
    import request from "@/network/request";

    export default {
        name: "PersonalInformation",
        data(){
            return{
                theDoctor:{}
            }
        },
        mounted(){
            request({
                url:'/doctor/getdoctor',
                method:'get',
                params:{dsid:this.$store.state.user.uid}
            }).then(res=>{
                if(res.data.code===200){
                    this.theDoctor=res.data.data;
                }
            })
        }
    }
</script>

<style scoped>

</style>