<template>
    <div id="register">
            <el-form :model="personInfo" class="personInfo" ref="personInfo" >
                <div id="personInfo" v-if="pagenum===1">
                    <el-form-item label="请上传个人照片" prop="dphoto">
                        <el-upload
                                ref="upload"
                                class="avatar-uploader"
                                action="#"
                                :show-file-list="false"
                                :on-change="handleAvatarChange"
                                :before-upload="beforeAvatarUpload"
                                :auto-upload="false">
                            <img v-if="imageUrl" :src="imageUrl" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="请输入你的真实姓名" prop="dname">
                        <el-input type="text" v-model="personInfo.dname"></el-input>
                    </el-form-item>
                    <el-form-item label="请输入密码" prop="pass">
                        <el-input type="password" v-model="personInfo.dpassword" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="性别">
                        <el-radio v-model="personInfo.dsex" label="男"></el-radio>
                        <el-radio v-model="personInfo.dsex" label="女"></el-radio>
                    </el-form-item>
                    <el-form-item label="出生日期">
                        <el-date-picker v-model="personInfo.dbirth" type="date"
                                        format="yyyy 年 MM 月 dd 日"
                                        value-format="yyyy-MM-dd"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="政治面貌">
                        <el-input type="text" v-model="personInfo.dpolitics"></el-input>
                    </el-form-item>
                    <el-form-item label="电话号码">
                        <el-input type="text" v-model="personInfo.dtel"> </el-input>
                    </el-form-item>
                    <el-form-item label="邮箱">
                        <el-input type="text" v-model="personInfo.demail"></el-input>
                    </el-form-item>
                    <el-button @click="showpage2">下一页</el-button>
                </div>
                <div id="workInfo" v-else>
                    <el-form-item label="医生工号">
                        <el-input  v-model="personInfo.did"></el-input>
                    </el-form-item>
                    <el-form-item label="工作单位">
                        <el-input type="text" v-model="personInfo.dhospital"></el-input>
                    </el-form-item>
                    <el-form-item label="工作科室">
                        <el-input type="text" v-model="personInfo.ddepartment"></el-input>
                    </el-form-item>
                    <el-form-item label="工作年龄">
                        <el-input v-model="personInfo.dwag"></el-input>
                    </el-form-item>
                    <el-form-item label="职称">
                        <el-input type="text" v-model="personInfo.dtitle"></el-input>
                    </el-form-item>
                    <el-form-item label="现住址">
                        <el-input type="text" v-model="personInfo.daddress"></el-input>
                    </el-form-item>
                    <el-button @click="pagenum=1">上一页</el-button>
                    <el-button @click="addfacedata">注册</el-button>
                </div>
            </el-form>
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        name: "Register",
        components:{

        },
        data(){
            return{
                personInfo:{
                    dname:'',
                    dbirth:'',
                    dsex:'',
                    dpolitics:'',
                    dpassword:'',
                    demail:'',
                    dtel:'',
                    did:'',
                    dwag:'',
                    dhospital:'',
                    ddepartment:'',
                    daddress:'',
                    dtitle:''
                },
                pagenum:1,
                imageUrl:'',
                dphoto:''
            }
        },
        methods:{
            showpage2(){
                this.pagenum=2
            },handleAvatarChange(file) {
                this.imageUrl=URL.createObjectURL(file.raw)
                this.dphoto=file.raw;
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            },
            async addfacedata(){
                let fd = new FormData();
                fd.append('dname',this.personInfo.dname);
                fd.append('dbirth',this.personInfo.dbirth);
                fd.append('dsex',this.personInfo.dsex);
                fd.append('dpolitics',this.personInfo.dpolitics);
                fd.append('dpassword',this.personInfo.dpassword);
                fd.append('demail',this.personInfo.demail);
                fd.append('dtel',this.personInfo.dtel);
                fd.append('did',this.personInfo.did);
                fd.append('dwag',this.personInfo.dwag);
                fd.append('dhospital',this.personInfo.dhospital);
                fd.append('ddepartment',this.personInfo.ddepartment);
                fd.append('daddress',this.personInfo.daddress);
                fd.append('dtitle',this.personInfo.dtitle);
                fd.append('file',this.dphoto);
                let config = {
                    headers:{'Content-Type': 'application/x-www-form-urlencoded'}};
                // await axios.post("https://localhost:8087/doctor/adddoctor",fd,config).then(res=>{
                await axios.post("https://8.141.165.101:8087/doctor/adddoctor",fd,config).then(res=>{
                    if(res.data.code===200){
                        // this.$router.push({path:'x/RegisterFaceData',query:{dsis:res.data.data}})
                        this.$router.push({path:"/"})
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>
