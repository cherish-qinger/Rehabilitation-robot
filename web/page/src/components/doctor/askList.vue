<template>
    <div id="askList">
        <div v-for="item in list" v-bind:key="item.aid" @click="toreply(item)">
            <el-card>
                {{item.askcontent}}
            </el-card>
        </div>

        <el-dialog title="回答问题" :visible.sync="dialogFormVisible">
            <el-form :model="item">
                <el-form-item label="回答">
                    <el-input v-model="item.replycontent" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="cancle">取 消</el-button>
                <el-button type="primary" @click="reply">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import request from "@/network/request";

    export default {
        name: "askList",
        inject:['reload'],
        data(){
            return{
                item:{},
                dialogFormVisible: false,
                asks:[]
            }
        },
        methods:{
            cancle(){
                this.dialogFormVisible = false
                this.reload()
            },
            reply(){
                request({
                    url:'/doctor/reply',
                    method: 'post',
                    params:{
                        aid:this.item.aid,
                        replycontent:this.item.replycontent,
                        dsid:this.$store.state.user.uid
                    }
                }).then(res=>{
                    if(res.data.code===500){
                        this.$message({
                            type:'error',
                            message:'添加失败'
                        })
                    }
                    else if(res.data.code===200){
                        this.$message({
                            type:'success',
                            message:'添加成功'
                        })
                        this.dialogFormVisible=false
                    }
                })
            },
          toreply(item){
            this.dialogFormVisible=true;
            this.item=item;
          }
        },

        computed:{
            list:function(){
                var result =[];
                for(var i=0;i<this.asks.length;i++){
                    if(this.asks[i].replycontent==null){
                        result.push(this.asks[i])
                    }
                }
                return result;
            }
        },
        mounted(){
            request({
                url:'/doctor/findasklist',
                method:'get',
                params:{pid:this.$route.query.pid}
            }).then(res=>{
                if(res.data.code===200){
                    this.asks=res.data.data;
                }
            })
        }
    }
</script>

<style scoped>

</style>