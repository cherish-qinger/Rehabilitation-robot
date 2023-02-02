<template>
    <div class="getfacedata">
        <div class="photo" style="padding-left: 50px">
            <video id="videoCamera" :width="videoWidth" :height="videoHeight" autoplay></video>
            <canvas  style="display:none;" id="canvasCamera" :width="videoWidth" :height="videoHeight"></canvas>
            <div v-if="facefile" class="img_bg_camera">
                <img :src="facefile" alt="" class="tx_img">
            </div>
        </div>
        <div style="padding-left: 200px">
            <el-button @click="getCompetence">打开摄像头</el-button>
            <el-button @click="takephoto">拍照</el-button>
            <el-button @click="photoupload">上传人脸</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "RegisterFaceData",
        data(){
            return{
                dsid:'',
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
        photoupload(){
            request({
                url:'/doctor/addFaceData',
                method:'post',
                params:{
                    dsid:this.dsid,
                    facedata:this.facefile
                }
            }).then(response=>{
                if(response.data.code===200){
                    this.$message({type:'success',message:'人脸数据插入成功'});
                    this.thisVideo.srcObject.getTracks()[0].stop();
                }else{
                    this.$message({type:'error',message:'人脸数据插入失败'})
                }
            });

        }

    },
        mounted(){
            this.dsid=this.$route.query.dsid;
        }
    }
</script>

<style scoped>

</style>