<template>
    <div id="RegisterPatient">
        <el-form :model="patientInfo" class="patientInfo" ref="patientInfo">
            <el-form-item label="患者图片" prop="pphoto">
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
            <el-form-item label="患者姓名" prop="pname">
                <el-input v-model="patientInfo.pname"></el-input>
            </el-form-item>
            <el-form-item label="患者性别" prop="psex">
                <el-radio v-model="patientInfo.psex" label="男"></el-radio>
                <el-radio v-model="patientInfo.psex" label="女"></el-radio>
            </el-form-item>
            <el-form-item label="患者出生时间" prop="pvirth">
                <el-date-picker v-model="patientInfo.pbirth" type="date"
                                format="yyyy 年 MM 月 dd 日"
                                value-format="yyyy-MM-dd"></el-date-picker>
            </el-form-item>
            <el-form-item label="患者地址" prop="paddress">
                <el-input v-model="patientInfo.paddress"></el-input>
            </el-form-item>
            <el-form-item label="患者电话" prop="ptel">
                <el-input v-model="patientInfo.ptel"></el-input>
            </el-form-item>
        </el-form>
        <el-button @click="register">添加</el-button>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "RegisterPatient",
        data(){
            return{
                patientInfo:{
                    pname:'',
                    psex:'',
                    pphoto:'',
                    pbirth:'',
                    paddress:'',
                    ptel:'',
                },
                imageUrl:''
            }
        },
        methods:{
            handleAvatarChange(file) {
                this.imageUrl=URL.createObjectURL(file.raw)
                this.patientInfo.pphoto=file.raw;
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

            async register(){
                let fd=new FormData();
                fd.append('pname',this.patientInfo.pname);
                fd.append('psex',this.patientInfo.psex);
                fd.append('pbirth',this.patientInfo.pbirth);
                fd.append('paddress',this.patientInfo.paddress);
                fd.append('ptel',this.patientInfo.ptel);
                fd.append('pphoto',this.patientInfo.pphoto);
                fd.append('dsid',this.$store.state.user.uid);
                let config = {
                    headers:{'Content-Type': 'application/x-www-form-urlencoded'}};
                // await axios.post("https://localhost:8087/patient/addpatient",fd,config).then(res=>{
                await axios.post("https://8.141.165.101:8087/patient/addpatient",fd,config).then(res=>{
                    if(res.data.code===200){
                        this.$confirm('患者添加成功，编号为'+res.data.data+'，密码为123456', '添加结果', {
                            confirmButtonText: '确定',
                            type: 'success'
                        }).then(() => {
                            this.$router.push('/doctor')
                        })
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>
