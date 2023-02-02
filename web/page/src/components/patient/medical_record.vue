<template>
    <el-main id="medical_record">
        <el-table
                :data="records"
                border
                :default-sort="{props:'writetime',order:'descending'}"
                style="width: 100%">
            <el-table-column
                    prop="men"
                    label="病例编号"
                    width="50">
            </el-table-column>
            <el-table-column
                    prop="mrcontent"
                    label="内容">
            </el-table-column>
            <el-table-column
                    prop="writed"
                    label="填写人"
                    width="80">
            </el-table-column>
            <el-table-column
                    prop="writetime"
                    label="填写时间"
                    sortable
                    width="180">
            </el-table-column>
        </el-table>
    </el-main>
</template>

<script>
    import request from "@/network/request";

    export default {
        name: "medical_record",
        data(){
            return{
                records:[],
                pid:this.$store.state.user.uid
            }
        },
        mounted(){
            request({
                url:'/patient/getMedical_Record',
                method:'get',
                params:{pid:this.pid}
            }).then(res=>{
                if(res.data.code===200){
                    this.records=res.data.data;
                    console.log(this.records)
                }else {
                    this.$message({
                        type:'error',
                        message:'查询失败'
                    })
                }
            })
        }
    }
</script>

<style scoped>

</style>