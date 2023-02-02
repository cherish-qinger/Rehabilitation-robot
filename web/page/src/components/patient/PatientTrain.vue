<template>
    <div id="PatientTrain">
        <div id="trainTask">
            训练任务<br>
            {{WritedTask.traincontent}}
        </div>
        <div id="newTrainTask">
            新的训练任务为<br>
            {{NewtrainContent}}
            <el-button @click="getYuyinTask">查询语音任务</el-button>
        </div>
        <el-button @click="onLine()">线上音视频交互</el-button>
    </div>

</template>

<script>
    import request from "@/network/request";
    export default {
        name: "PatientTrain",
        data(){
            return{
                lastid:0,
                NewtrainContent:'',
                Content:[],
                newid:0,
                medid:0,
                WritedTask:''
            }
        },methods:{
            onLine(){
                this.$router.push({name:'onLineTrain'})
            },
            getYuyinTask(){
                request({
                    url:'/train/getLastTask'
                }).then(res=>{
                    this.lastid=res.data.data.id
                })
                setInterval(()=>{
                    setTimeout(()=>{
                        request({
                            url:'/train/getLastTask'
                        }).then(res=>{
                            this.newid=res.data.data.id
                            if(this.newid>this.medid){
                                request({
                                    url:'/train/getTask',
                                    params:{
                                        oriId:this.lastid+1,
                                        LastId:this.newid
                                    }
                                }).then(res=>{
                                    this.Content=res.data.data;
                                    this.NewtrainContent=''
                                    for(let i=0;i<this.Content.length;i++){
                                        this.NewtrainContent=res.data.data[i]+'\n'
                                    }
                                    this.medid=this.newid
                                })
                            }
                        })
                    },0)
                },10000)
            }
        },created(){
            request({
                url:'/guidance/getWritedTask',
                params: {pid:this.$store.state.user.uid}
            }).then(res=>{
                this.WritedTask=res.data.data
            })
        }

    }
</script>

<style scoped>
    newTrainTask{
        white-space: pre-wrap;
    }
</style>