<template>
  <div class="center">
  <div class="container">
    <h2>视频录制</h2>
    <section class="item">
      <span class="type-name">文件名称:</span>
      <input type="text" v-model.trim="fileName"/>
      <span>.mp4</span>
    </section>
    <section class="item">
      <span class="type-name">录制时长</span>
      <span>{{timeLong}}s</span>
    </section>
    <section>
      <button class="media-btn" @click="clicks()" title="点击开始录制">{{txt}}</button>
    </section>
  </div>
  </div>
</template>


<script>
export default {
  Name:'record',
  data() {
    return {
      timeout: 0,
      recordedBlobs: [],
      fileName: "",
      txt: "开始录制",
      status: false,
      stream: null,
      options: {
        audioBitsPerSecond: 128000,
        videoBitsPerSecond: 4500000,
        mimeType: "video/webm",
      },
      startTime: 0,
      timeLong: 0,
      timeLongs: null,
      endTime: 0,
    };
  },
  watch: {
    status(a) {
      if (a) {
        this.txt = "停止录制";
      } else {
        this.txt = "开始录制";
      }
    },
  },
  methods: {
    clicks() {
      if (this.status) {
        this.stopReset();
        this.status = false;
        clearInterval(this.timesLongs);
      } else {
        this.startScreen();
      }
    },
    cauTime() {
      this.timeLongs = setInterval(() => {
        this.timeLong = (new Date().getTime() - this.startTime) / 1000;
      }, 200);
    },
    stopReset() {
      this.stream.getTracks().forEach((track) => track.stop());
      this.recordedBlobs = [];
    },
    startScreen() {
      //注意,加上 audio: true 之后底部可以拖动的停止就失效了,正在fixing
      navigator.mediaDevices.getDisplayMedia({ video: true, audio: true }).then(
          (stream) => {
            this.status = !this.status;
            console.log("开始录制");
            this.startTime = new Date().getTime();
            this.cauTime();

            this.stream = stream;
            const mediaRecorder = new MediaRecorder(stream, this.options);
            mediaRecorder.ondataavailable = (event) => {
              if (event.data.size > 0) {
                this.status = false;
                clearInterval(this.timeLongs);
                console.log(
                    "结束录制,录制时长:" +
                    this.timeLong+
                    "s"
                );
                this.recordedBlobs.push(event.data);

                this.download();
                this.stopReset();
              }
            };
            mediaRecorder.start();
          },
          (error) => console.log(error)
      );
    },
    download() {
      const blob = new Blob(this.recordedBlobs, { type: "video/mp4" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.style.display = "none";
      a.href = url;
      if (this.fileName) {
        a.download = this.fileName + ".mp4";
      } else {
        a.download = new Date() + ".mp4";
      }
      a.click();
      window.URL.revokeObjectURL(url);
    },
  },
};
</script>

<style scoped>
.center{
  position:relative;
  margin-top: 200px;
  text-align: center;
}
.container {
  position:absolute;
  width: 450px;
  height: 250px;
  border: 5px solid;
  border-radius: 20px;
  text-align: center;
  left:50%;
  top:50%;
  margin-left:-225px;
  margin-top:-99px;
}
.item {
  display: flex;
  align-items: center;
  margin: 25px 0;
  font-size: 20px;
}
.item .unit {
  margin-left: 10px;
}
.item input {
  height: 30px;
  padding: 1px;
  padding-left: 5px;
}
.item input[type="text"] {
  width: 180px;
}
.item input[type="number"] {
  width: 80px;
}
.type-name {
  width: 30%;
}
.media-btn {
  background: rgb(146, 224, 214);
  border: none;
  padding: 8px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 800;
  outline: none;
}
.media-btn:hover {
  background: rgb(155, 235, 224);
}

.tip {
  background-color: rgb(248, 243, 172);
  display: inline-block;
  padding: 19px;
  font-size: 25px;
  font-weight: 900;
  border-radius: 3px;
  margin-top: 19px;
}
</style>
