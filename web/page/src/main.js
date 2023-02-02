import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//上传视频与播放视频所用
import VueVideoPlayer from 'vue-video-player';
import 'video.js/dist/video-js.css';
//音视频通话
import './components/Agora_Web_SDK_FULL/index.css';
import './components/Agora_Web_SDK_FULL/vendor/bootstrap.min.css';
import './components/Agora_Web_SDK_FULL/vendor/jquery-3.4.1.min.js';
import './components/Agora_Web_SDK_FULL/vendor/bootstrap.bundle.min.js';
import './components/Agora_Web_SDK_FULL/AgoraRTC_N-4.6.3.js';
// import './components/Agora_Web_SDK_FULL/AgoraRTC_N-4.6.3'
import $ from 'jquery';

//音视频通话所用
window.jQuery = $;
window.$ = $;

Vue.config.productionTip = false
//全局引入Element-ui组件
Vue.use(ElementUI);
Vue.config.productionTip = false
//上传视频所用
Vue.use(VueVideoPlayer);
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
