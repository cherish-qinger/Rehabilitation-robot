<template>
    <div>
        <div class="text-wrapper">
            {{content}}
        </div>
        <el-button @click="test">打开语音识别</el-button>
        <el-button @click="onLineTrain">线上音视频训练</el-button>
    </div>
</template>

<script>
    import request from "@/network/request";

    export default {
        name: "train",
        data(){
            return{
                content:'',
                yOriNum:0,
                dOriNum:0,
                dMedNum:0,
                yMedNum:0,
                yLastNum:0,
                dLastNum:0,
                flag:true,
                yujv:[],
                dafu:[]
            }
        },
        props: {
            pid: {type: String}
        },
        methods:{
            onLineTrain() {
                this.$router.push({path:"/doctor_onLineTrain", query:{pid: this.pid}})
            },
            test(){
                request({
                    url:'/train/getTrainTask'
                })
                this.getDuiHua()
            },
            getDuiHua(){
                //通过setInterval和setTimeout实现轮询查询
                //当挂载时，先查询yujv表和dafu表中最大的编号
                //每当查询新的编号比上次查询的编号大时，查询数据，刷新数据
                setInterval(()=>{
                    setTimeout(()=>{
                        Promise.all([request({
                            url:'/train/getLastYujv'
                        }).then(res=>{
                            this.yLastNum=res.data.data.id
                            console.log(this.yLastNum)
                        }),request({
                            url:'/train/getLastDafu'
                        }).then(res=>{
                            this.dLastNum=res.data.data.id
                            console.log(this.dLastNum)
                        })]).then(()=>{
                            if(this.yLastNum>this.yMedNum){
                                Promise.all([request({
                                    url:'/train/getYujv',
                                    params:{
                                        oriId:this.yOriNum+1,
                                        LastId:this.yLastNum
                                    }
                                }).then(res=>{
                                    this.yujv=res.data.data
                                    console.log(res.data.data)
                                }),request({
                                    url:'/train/getDafu',
                                    params:{
                                        oriId:this.dOriNum,
                                        LastId:this.dLastNum
                                    }
                                }).then(res=>{
                                    this.dafu=res.data.data
                                    console.log(res.data.data)
                                })]).then(()=>{
                                    this.yMedNum=this.yLastNum
                                    this.dMedNum=this.dLastNum
                                    this.content=''
                                    if(this.yujv.length===this.dafu.length){
                                        for(let i=0;i<this.yujv.length-1;i++){
                                            this.content=this.content+this.yujv[i]+'\n'+this.dafu[i]+'\n'
                                        }
                                        this.content=this.content+this.yujv[this.yujv.length-1]
                                    }
                                    else {
                                        for(let i=0;i<this.yujv.length;i++){
                                            this.content=this.content+this.yujv[i]+'\n'+this.dafu[i]+'\n'
                                        }
                                    }
                                })
                            }
                        })
                    },0)
                },10000)
            }
        },mounted(){
            if(this.$route.query.pid!=null){
                this.pid=this.$route.query.pid
            }
            request({
                url: '/train/getLastYujv'
            }).then(res => {
                this.yOriNum = res.data.data.id + 1
                console.log(this.yOriNum)
            })
            request({
                url:'/train/getLastYujv'
            }).then(res=>{
                this.yOriNum=res.data.data.id+1
                console.log(this.yOriNum)
            })
            request({
                url:'/train/getLastDafu'
            }).then(res=>{
                this.dOriNum=res.data.data.id+1
                console.log(this.dOriNum)
            })
            this.flag=true

        }
    }
</script>

<style scoped>
    .text-wrapper {
        white-space: pre-wrap;
    }
</style>