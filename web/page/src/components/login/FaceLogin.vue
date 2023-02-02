<template>
    <div class="facelogin">
        <div class="photo" style="padding-left: 200px">
            <video id="videoCamera" :width="videoWidth" :height="videoHeight" autoplay style="box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15)"></video>
            <canvas style="display: none"  id="canvasCamera" :width="videoWidth" :height="videoHeight"></canvas>
        <div style="box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);margin-left:50px;width: 400px;height: 400px" >
            <div v-if="facefile" class="img_bg_camera">
                <img :src="facefile" alt="" class="tx_img">
            </div>
        </div>
        </div>
        <div class="tool-button">
            <el-button @click="getCompetence">打开摄像头</el-button>
            <el-button @click="takephoto">拍照</el-button>
            <el-button @click="recognize">识别登录</el-button>
        </div>
    </div>
</template>

<script>
    import request from "@/network/request";
    export default {
        name: "FaceLogin",
        data(){
            return {
                videoWidth: 400,
                videoHeight: 400,
                thisCancas: null,
                thisContext: null,
                thisVideo: null,
                facefile:null
            }

        },methods:{
            getCompetence(){
                this.thisCancas=document.getElementById('canvasCamera');
                this.thisContext=this.thisCancas.getContext('2d');
                this.thisVideo=document.getElementById('videoCamera');
                let constraints = { audio: false, video: { width: this.videoWidth, height: this.videoHeight, transform: 'scaleX(-1)' } };
                navigator.mediaDevices.getUserMedia(constraints).then((mediaStream)=> {
                    this.thisVideo.srcObject=mediaStream;
                    this.thisVideo.play();
                })
            },
            takephoto(){
                this.thisContext.drawImage(this.thisVideo,0,0,400,400);
                this.facefile=this.thisCancas.toDataURL();
            },
            recognize(){
                request({
                    url:'/login/facelogin',
                    method:'get',
                    params:{facedata:this.facefile}
                }).then(response=>{
                    if(response.data.code===200){
                    }else{
                        this.$message({
                            type:'error',
                            message:response.data.msg
                        })
                    }
                })
            }
        }
    }
</script>

<style scoped>
   .photo{
       display: flex;
   }
    .img_bg_camera{

    }
    .tool-button{
        margin-left: 35%;
        margin-top: 15px;
    }
</style>