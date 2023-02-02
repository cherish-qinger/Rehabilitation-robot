<template>
    <div id="SeeGuidance" style="margin-left: 10%;width: 80%;height: auto">
        <div id="drugGuidance"  >
            药物指导
            <el-table
            :data="drugGuidance">
                <el-table-column
                prop="guidance"
                label="指导内容">
                </el-table-column>
                <el-table-column
                prop="writed"
                label="指导医师">
                </el-table-column>
                <el-table-column
                prop="writetime"
                label="发布时间">
                </el-table-column>
            </el-table>
        </div>
        <div id="dietGuidance">
            饮食指导
            <el-table
                    :data="dietGuidance">
                <el-table-column
                        prop="guidance"
                        label="指导内容">
                </el-table-column>
                <el-table-column
                        prop="writed"
                        label="指导医师">
                </el-table-column>
                <el-table-column
                        prop="writetime"
                        label="发布时间">
                </el-table-column>
            </el-table>
        </div>
        <div id="other" >
           其他
            <el-table
                    :data="other">
                <el-table-column
                        prop="guidance"
                        label="指导内容">
                </el-table-column>
                <el-table-column
                        prop="writed"
                        label="指导医师">
                </el-table-column>
                <el-table-column
                        prop="writetime"
                        label="发布时间">
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
    import request from "@/network/request";

    export default {
        name: "SeeGuidance",
        data(){
            return{
                drugGuidance:[{guidance:'',writed:'',writetime:'',isread:''}],
                dietGuidance:[{guidance:'',writed:'',writetime:'',isread:''}],
                other:[{guidance:'',writed:'',writetime:'',isread:''}]
            }
        },mounted(){
            console.log("guidance已调用")
            request({
                url:'/guidance/getMyGuidance',
                method:'get',
                params:{pid:this.$store.state.user.uid}
            }).then(res=>{
                if(res.data.code===200){
                    this.drugGuidance=(res.data.data.filter(function (item) {
                        return item.type===1
                    }));
                    this.dietGuidance=(res.data.data.filter(function (item) {
                        return item.type===2
                    }));
                    this.other=(res.data.data.filter(function (item) {
                        return item.type===3
                    }));
                }
            })
        }
    }
</script>

<style scoped>

</style>
