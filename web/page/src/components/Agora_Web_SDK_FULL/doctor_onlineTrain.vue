<template>
  <div id="doctor_onlineTrain">
<!--    <div class="container-fluid banner">-->
<!--      <p class="banner-text">线上音视频交互{{this.options}}</p>-->
<!--      <p>{{this.$store.state.user}}</p>-->

<!--      <a style="color: rgb(255, 255, 255);fill: rgb(255, 255, 255);fill-rule: evenodd; position: absolute; right: 10px; top: 4px;"-->
<!--         class="Header-link " href="https://github.com/AgoraIO/API-Examples-Web/tree/main/Demo">-->
<!--        <svg class="octicon octicon-mark-github v-align-middle" height="32" viewBox="0 0 16 16" version="1.1" width="32"-->
<!--             aria-hidden="true">-->
<!--          <path fill-rule="evenodd"-->
<!--                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>-->
<!--        </svg>-->
<!--      </a>-->
<!--    </div>-->

    <div id="success-alert" class="alert alert-success alert-dismissible fade show" role="alert">
      <strong>Congratulations!</strong><span> You can invite others join this channel by click </span><a href=""
                                                                                                         target="_blank">here</a>
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>

    <div id="success-alert-with-token" class="alert alert-success alert-dismissible fade show" role="alert">
      <strong>Congratulations!</strong><span> Joined room successfully. </span>
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>

    <button id="join" type="submit" class="btn btn-primary btn-sm" @click="join()">Join</button>
    <button id="leave" type="button" class="btn btn-primary btn-sm" @click="leave()" disabled>Leave</button>


<!--    <div id="device-wrapper">-->
<!--      <div class="input-group">-->
<!--        <div class="input-group-prepend">-->
<!--          <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown"-->
<!--                  aria-haspopup="true" aria-expanded="false">Mics-->
<!--          </button>-->
<!--          <div class="mic-list dropdown-menu"></div>-->
<!--        </div>-->
<!--        <input type="text" class="mic-input form-control" aria-label="Text input with dropdown button" readonly>-->
<!--      </div>-->

<!--      <div class="input-group">-->
<!--        <div class="input-group-prepend">-->
<!--          <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown"-->
<!--                  aria-haspopup="true" aria-expanded="false">Cams-->
<!--          </button>-->
<!--          <div class="cam-list dropdown-menu"></div>-->
<!--        </div>-->
<!--        <input type="text" class="cam-input form-control" aria-label="Text input with dropdown button" readonly>-->
<!--      </div>-->
<!--    </div>-->


    <div class="row video-group" style="width: 100%">
      <div class="col" style="float: left ;width: 48%">
        <p id="local-player-name" class="player-name" style="width: 100%"></p>
        <div id="local-player" class="player" ref="videoplay" style="width: 80%;margin-left: 10%"></div>
      </div>
      <div id="remote-playerlist" style="width: 48%"></div>
<!--      <div class="w-100"></div>-->
<!--      <div class="col">-->
<!--        <div id="remote-playerlist"></div>-->
<!--      </div>-->
    </div>

    <div id="device-wrapper" style="margin-top: 50px;margin-left: 10%;margin-right:10%">
      <div class="input-group" style="width: 350px;float: left">
        <div class="input-group-prepend">
          <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">音频设备
          </button>
          <div class="mic-list dropdown-menu"></div>
        </div>
        <input type="text" class="mic-input form-control" aria-label="Text input with dropdown button" readonly>
      </div>

      <div class="input-group" style="width: 350px;float: right">
        <div class="input-group-prepend">
          <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">视频设备
          </button>
          <div class="cam-list dropdown-menu"></div>
        </div>
        <input type="text" class="cam-input form-control" aria-label="Text input with dropdown button" readonly>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="media-device-test" data-backdrop="static" tabindex="-1" role="dialog"
         aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modal-label">Media Device Test</h5>
          </div>
          <div class="modal-body">
            <div class="container">
              <h5 class="device-name">Microphone</h5>
              <p id="device-intro">Produce sounds to check if the mic works.</p>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown"
                          aria-haspopup="true" aria-expanded="false">Mics
                  </button>
                  <div class="mic-list dropdown-menu"></div>
                </div>
                <input type="text" class="mic-input form-control" aria-label="Text input with dropdown button" readonly>
              </div>
              <div class="progress">
                <div class="progress-bar bg-success" role="progressbar" aria-valuenow="0" aria-valuemin="0"
                     aria-valuemax="100"></div>
              </div>
              <h5 class="device-name">Camera</h5>
              <p id="device-intro">Move in front of the camera to check if it works.</p>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown"
                          aria-haspopup="true" aria-expanded="false">Cams
                  </button>
                  <div class="cam-list dropdown-menu"></div>
                </div>
                <input type="text" class="cam-input form-control" aria-label="Text input with dropdown button" readonly>
              </div>
              <div id="pre-local-player" class="player"></div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal">Finish</button>
          </div>
        </div>
      </div>
      </div>
      </div>
</template>


<script>
    import AgoraRTC from "agora-rtc-sdk-ng"
    import request from "../../network/request";
    // import

    export default {
        name: "doctor_onlineTrain",
        data() {
            return {
                client: undefined,
                rtc: undefined,
                localTracks: {
                    videoTrack: null,
                    audioTrack: null
                },
                remoteUsers: {},

                mics: [], // all microphones devices you can use
                cams: [], // all cameras devices you can use
                currentMic:null, // the microphone you are using
                currentCam:null, // the camera you are using
                volumeAnimation:null,
                options: {
                    // 替换成你自己项目的 App ID。
                  // appId: "771a6d8472a04b008774ee40003d7d7c",
                  appId: "5d6e4102b4f5475384f38d7f560c6c13",  //我的
                    // 传入目标频道名。
                    channel: null,
                    // 如果你的项目开启了 App 证书进行 Token 鉴权，这里填写生成的 Token 值。
                    token: null,
                    uid: null
                },
              localname:this.$store.state.user.uname
            }
        },
        mounted() {
            this.initAgora()
            this.showlist(this.options)
        },
        methods: {

            initAgora() {

                this.client = AgoraRTC.createClient({mode: "rtc", codec: "vp8"})
                this.rtc = {
                    // 用来放置本地客户端。
                    client: null,
                    // 用来放置本地音视频频轨道对象。
                    localAudioTrack: null,
                    localVideoTrack: null,
                    localStream: null,
                    remoteStreams: [],
                    mics: [], // all microphones devices you can use
                    cams: [], // all cameras devices you can use
                    currentMic:null, // the microphone you are using
                    currentCam:null, // the camera you are using
                    volumeAnimation:null,
                }
                let channelName = "";
                console.log(this.$store.state.user.usertype)
                console.log(this.$route.query.pid)
                if (this.$store.state.user.usertype == 1) { //doctor
                    channelName = this.$route.query.pid
                } else if (this.$store.state.user.usertype == 2) {  //patient
                    channelName = this.$store.state.user.uid
                } else {
                    this.$router.push("/")
                }
                console.log("channelname", channelName)
                request({
                    url: 'token/getToken',
                    params: {
                        channelName: channelName,  //channel暂定为患者id
                        uid: this.$store.state.user.uid
                    }
                }).then(res => {
                    if (res.data.code == 200) {
                      console.log("获取token成功", res.data.data)
                      this.options.token = res.data.data.token
                      this.options.uid = res.data.data.uid
                      this.options.channel = res.data.data.channel
                      console.log("options", this.options)
                    }
                    })


            },

            async showlist(options) {
                $("#media-device-test").modal("show");
                var that=this;
                $(".cam-list").delegate("a", "click", function (e) {
                    that.switchCamera(this.innerText);
                });
                $(".mic-list").delegate("a", "click", function (e) {
                    that.switchMicrophone(this.innerText);
                });
                await this.mediaDeviceTest();
                this.volumeAnimation = requestAnimationFrame(this.setVolumeWave);
                $("#media-device-test").on("hidden.bs.modal", function (e) {
                    cancelAnimationFrame(this.volumeAnimation);
                    if (options.appid && options.channel) {
                        $("#appid").val(options.appid);
                        $("#token").val(options.token);
                        $("#channel").val(options.channel);
                        $("#join-form").submit();
                    }
                })
            },

            async switchCamera(label) {
                this.currentCam = this.cams.find(cam => cam.label === label);
                $(".cam-input").val(this.currentCam.label);
                // switch device of local video track.
                await this.localTracks.videoTrack.setDevice(this.currentCam.deviceId);
            },

            async switchMicrophone(label) {
                this.currentMic = this.mics.find(mic => mic.label === label);
                $(".mic-input").val(this.currentMic.label);
                // switch device of local audio track.
                await this.localTracks.audioTrack.setDevice(this.currentMic.deviceId);
            },

            // show real-time volume while adjusting device.
            setVolumeWave() {
                this.volumeAnimation = requestAnimationFrame(this.setVolumeWave);
                $(".progress-bar").css("width", this.localTracks.audioTrack.getVolumeLevel() * 100 + "%")
                $(".progress-bar").attr("aria-valuenow", this.localTracks.audioTrack.getVolumeLevel() * 100)
            },

            async join() {
                console.log("join")
                // add event listener to play remote tracks when remote user publishs.
                this.client.on("user-published", this.handleUserPublished);
                this.client.on("user-unpublished", this.handleUserUnpublished);

                // join a channel and create local tracks, we can use Promise.all to run them concurrently
                [this.options.uid, this.localTracks.audioTrack, this.localTracks.videoTrack] = await Promise.all([
                    // join the channel
                    this.client.join(this.options.appId, this.options.channel, this.options.token || null, this.options.uid || null),
                    // create local tracks, using microphone and camera
                    AgoraRTC.createMicrophoneAudioTrack(),
                    AgoraRTC.createCameraVideoTrack()
                ]);

                // play local video track
                this.localTracks.videoTrack.play("local-player");
                $("#local-player-name").text(`医生(${this.localname})`);
                $("#leave").attr("disabled", false);

                // publish local tracks to channel
                await this.client.publish(Object.values(this.localTracks));
                console.log("publish success");},


            async mediaDeviceTest() {
                // create local tracks
                [this.localTracks.audioTrack, this.localTracks.videoTrack] = await Promise.all([
                    // create local tracks, using microphone and camera
                    AgoraRTC.createMicrophoneAudioTrack(),
                    AgoraRTC.createCameraVideoTrack()
                ]);

                // play local track on device detect dialog
                this.localTracks.videoTrack.play("pre-local-player");
                // localTracks.audioTrack.play();

                // get mics
                this.mics = await AgoraRTC.getMicrophones();
                this.currentMic = this.mics[0];
                $(".mic-input").val(this.currentMic.label);
                this.mics.forEach(mic => {
                    $(".mic-list").append(`<a class="dropdown-item" href="#">${mic.label}</a>`);
                });

                // get cameras
                this.cams = await AgoraRTC.getCameras();
                this.currentCam = this.cams[0];
                $(".cam-input").val(this.currentCam.label);
                this.cams.forEach(cam => {
                    $(".cam-list").append(`<a class="dropdown-item" href="#">${cam.label}</a>`);
                });
            },


            async leave() {
                console.log("leave")
                console.log(this.localTracks)
                for (let trackName in this.localTracks) {
                    let track = this.localTracks[trackName];
                    if (track) {
                        track.stop();
                        track.close();
                        this.localTracks[trackName] = undefined;
                    }
                }

                // remove remote users and player views
                this.remoteUsers = {};
                $("#remote-playerlist").html("");

                // leave the channel
                await this.client.leave();
                $("#local-player-name").text("");
                $("#join").attr("disabled", false);
                $("#leave").attr("disabled", true);
                console.log("client leaves channel success");
            },

            async subscribe(user, mediaType) {
                const uid = user.uid;
                console.log("user subscribe", user)
                // subscribe to a remote user
                await this.client.subscribe(user, mediaType);
                console.log("subscribe success");
                if (mediaType === 'video') {
                    const player = $(`
      <div id="player-wrapper-${uid}">
<!--         <p class="player-name">remoteUser(${uid})</p>-->
        <p class="player-name">患者(${this.remoteUsers[uid].name})</p>
        <div id="player-${uid}" class="player" style="width: 80%;margin-left: 10%"></div>
      </div>
    `);
                    $("#remote-playerlist").append(player);
                    user.videoTrack.play(`player-${uid}`);
                }
                if (mediaType === 'audio') {
                    user.audioTrack.play();
                }
            },

            handleUserPublished(user, mediaType) {
                console.log("handleUserPublished")
                const id = user.uid;
                this.remoteUsers[id] = user;
              //获取远程用户信息
              request({
                url:'/doctor/findpatient',
                method: 'get',
                params:{
                  pid: user.uid,
                }
              }).then(res=>{
                if(res.data.code===500){
                  this.$message({
                    type:'error',
                    message:'查找远程用户失败'
                  })
                }
                else if(res.data.code===200){
                  console.log(res.data.data);
                  this.remoteUsers[id]['name']=res.data.data.pname;
                  console.log(this.remoteUsers);
                }
              });
                this.subscribe(user, mediaType);
            },

            handleUserUnpublished(user) {
                console.log("handleUserUnpublished")
                const id = user.uid;
                delete this.remoteUsers[id];
                $(`#player-wrapper-${id}`).remove();
            }
        }
    }
</script>

<style scoped>
</style>
