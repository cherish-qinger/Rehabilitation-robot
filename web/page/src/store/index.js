import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:{
      uid:'',
      usertype:'',
      uname:''
    }
  },
  mutations: {
    patientLogin(state,p){
      state.user.uid=p.pid;
      state.user.usertype=2;
      state.user.uname=p.pname;
    },
    doctorLogin(state,p){
      state.user.uid=p.dsid;
      state.user.usertype=1;
      state.user.uname=p.dname;
    }
  },
  actions: {
  },
  modules: {
  }
})
