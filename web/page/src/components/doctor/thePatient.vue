<template>
    <div id="thePatient">
        <el-form v-model="patient">
            <el-form-item label="患者照片">
                <el-image :src="patient.pphoto"></el-image>
            </el-form-item>
            <el-form-item label="患者姓名">{{patient.pname}}</el-form-item>
            <el-form-item label="患者出生日期">{{patient.pbirth}}</el-form-item>
            <el-form-item label="患者年龄">{{patient.page}}</el-form-item>
            <el-form-item label="患者性别">{{patient.psex}}</el-form-item>
            <el-form-item label="患者电话">{{patient.ptel}}</el-form-item>
            <el-form-item label="家庭地址">{{patient.paddress}}</el-form-item>
        </el-form>

<!--        <el-descriptions title="用户信息" direction="vertical" border>-->
<!--            <el-descriptions-item>-->
<!--                <template slot="label">-->
<!--                    <i class="el-icon-picture-outline"></i>-->
<!--                    照片-->
<!--                </template>-->
<!--            </el-descriptions-item>-->
<!--            <el-descriptions-item>-->
<!--                <template slot="label">-->
<!--                    <i class="el-icon-user"></i>-->
<!--                    用户名-->
<!--                </template>-->
<!--                {{patient.pname}}-->
<!--            </el-descriptions-item>-->
<!--            <el-descriptions-item>-->
<!--                <template slot="label">-->
<!--                    <i class="el-icon-edit"></i>-->
<!--                    性别-->
<!--                </template>-->
<!--                {{patient.psex}}-->
<!--            </el-descriptions-item>-->
<!--            <el-descriptions-item>-->
<!--                <template slot="label">-->
<!--                    <i class="el-icon-edit"></i>-->
<!--                    年龄-->
<!--                </template>-->
<!--                {{patient.page}}-->
<!--            </el-descriptions-item>-->
<!--            <el-descriptions-item>-->
<!--                <template slot="label">-->
<!--                    <i class="el-icon-edit"></i>-->
<!--                    出生日期-->
<!--                </template>-->
<!--                {{patient.pbirth}}-->
<!--            </el-descriptions-item>-->
<!--            <el-descriptions-item>-->
<!--                <template slot="label">-->
<!--                    <i class="el-icon-mobile-phone"></i>-->
<!--                    手机号-->
<!--                </template>-->
<!--                {{patient.ptel}}-->
<!--            </el-descriptions-item>-->
<!--            <el-descriptions-item>-->
<!--                <template slot="label">-->
<!--                    <i class="el-icon-office-building"></i>-->
<!--                    联系地址-->
<!--                </template>-->
<!--                {{patient.paddress}}-->
<!--            </el-descriptions-item>-->
<!--        </el-descriptions>-->
    </div>
</template>

<script>
    import request from "@/network/request";

    export default {
        name: "thePatient",
        data(){
            return{
                file:'',
                patient:{},
            }
        },
        props: {
            pid: {type: String}
        },
        methods:{
            base64ImgtoFile(dataurl, filename = 'file') {
                if(dataurl!=null) {
                    let arr = dataurl.split(',')
                    let mime = arr[0].match(/:(.*?);/)[1]
                    let suffix = mime.split('/')[1]
                    let bstr = atob(arr[1])
                    let n = bstr.length
                    let u8arr = new Uint8Array(n)
                    while (n--) {
                        u8arr[n] = bstr.charCodeAt(n)
                    }
                    return new File([u8arr], `${filename}.${suffix}`, {
                        type: mime
                    })
                }
            }
        },
        mounted(){
            if(this.$route.query.pid!=null){
                this.pid=this.$route.query.pid
            }
            request({
                url:'/doctor/findpatient',
                method:'get',
                params:{pid:this.pid}
            }).then(res=>{
                if(res.data.code===200){
                    this.patient=res.data.data;
                    this.patient.imgfile = this.base64ImgtoFile(this.patient.pphoto);
                }
            })
        }
    }
</script>

<style scoped>

</style>