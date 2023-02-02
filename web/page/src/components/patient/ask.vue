<template>
    <div id="ask">
<!--        <div>{{ask.asktime}}</div>-->
<!--        <div>{{ask.askcontent}}</div>-->
<!--        <div>{{ask.replytime}}</div>-->
<!--        <div>{{ask.replycontent}}</div>-->
<!--        <div>{{ask.replyd}}</div>-->
        <el-table
                :data="ask"
                border>
            <el-table-column
                    prop="asktime"
                    label="提问时间">
            </el-table-column>
            <el-table-column
                    prop="askcontent"
                    label="问题内容">
            </el-table-column>
            <el-table-column
                    prop="replytime"
                    label="回答时间">
            </el-table-column>
            <el-table-column
                    prop="replycontent"
                    label="回答内容">
            </el-table-column>
            <el-table-column
                    prop="replyd"
                    label="回答人">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import request from "@/network/request";

    export default {
        name: "ask",
        data(){
            return {
                ask:[]
            }
        },
        mounted(){
            request({
                url:'/patient/getAskbyAid',
                method:'get',
                params:{aid:this.$route.query.aid}
            }).then(res=>{
                if(res.data.code===200){
                    this.ask[0]=res.data.data;
                }
            })
        }
    }
</script>

<style scoped>

</style>