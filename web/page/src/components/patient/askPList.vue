<template>
    <div id="askPList" style="width: 80%;margin-left: 10%">
        <div v-for="item in asks" v-bind:key="item.aid" @click="toAsk(item) ">
            <el-card :class="{'green':item.replycontent!==null,'red':item.replycontent==null}">{{item.askcontent}}</el-card>
        </div>
        <button @click="toask()">提出问题</button>

        <el-dialog title="问题详情"
                   :visible="dialogTableVisible"
                   show-close="false"
                    center>
            <el-table
                    :data="askinformation"
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
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogTableVisible=false">确定</el-button>
            </span>
        </el-dialog>

        <el-dialog title="提出问题" :visible.sync="dialogFormVisible">
            <el-form ref="ask" :model="ask" >
                <el-form-item label="问题内容" prop="askcontent" >
                    <el-input v-model="ask.askcontent" ></el-input>
                </el-form-item>
                <el-form-item >
                    <el-button type="primary" @click="onSubmit()">提交</el-button>
                    <el-button @click="dialogFormVisible=false">取消</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
    import request from "@/network/request";

    export default {
        name: "askPList",
        inject:['reload'],
        data(){
            return {
                dialogFormVisible:false,
                dialogTableVisible:false,
                ask:{
                    askcontent:'',
                },
                askinformation:[],
                asks:[]
            }
        },
        computed:{
          color(item){
              if(item.replycontent==null)
                  return 'red'
              else
                  return 'green'
          }
        },
        methods:{
            onSubmit(){
                request({
                    url:'/patient/writePask',
                    params:{
                        askcontent:this.ask.askcontent,
                        pid:this.$store.state.user.uid-0,
                    }
                }).then(res=>{
                    if(res.data.code===200){
                        this.$message({
                            type:"success",
                            message:'提问成功'
                        })
                        this.dialogFormVisible=false
                        this.reload()
                    }else{
                        this.$message({
                            type:"warning",
                            message:'信息错误，请重新输入'
                        })
                    }
                })
            },
           toAsk(item){
                this.askinformation[0]=item;
                this.dialogTableVisible=true;
               // this.$router.push({path:'/ask',query:{aid:aid}})
           },
            toask(){
                this.dialogFormVisible=true
               // this.$router.push({path:'/writeAsk',query:{pid:this.$store.state.user.uid}})
            }
        },
        mounted(){
            request({
                url:'/patient/getPaskList',
                method:'get',
                params:{pid:this.$store.state.user.uid}
            }).then(res=>{
                if(res.data.code===200){
                    this.asks=res.data.data;
                }
            })
        }

    }
</script>

<style scoped>
    .el-card__header{
        background-color: chartreuse;
    }
    .red{
        background-color: #F56C6C;
    }
    .green{
        background-color: #67C23A;
    }
</style>
