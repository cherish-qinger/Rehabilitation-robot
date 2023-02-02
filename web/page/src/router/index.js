import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Doctor from "@/views/Doctor";
import Patient from "@/views/Patient";
import FaceLogin from "@/components/login/FaceLogin";
import patientList from "@/components/doctor/patientList";
import prePatient from "@/components/doctor/prePatient";
import Register from "@/views/Register";
import RegisterFaceData from "@/components/register/RegisterFaceData";
import RegisterPatient from "@/components/register/RegisterPatient";
import SeeGuidance from "@/components/patient/SeeGuidance";
import writeGuidance from "@/components/doctor/writeGuidance";
import train from "@/components/doctor/train";
import PatientTrain from "@/components/patient/PatientTrain";
import ask from "@/components/patient/ask";
import askPList from "@/components/patient/askPList";
import writeAsk from "@/components/patient/writeAsk";
import medical_record from "@/components/patient/medical_record";
import writeMedical_Record from "@/components/doctor/writeMedical_Record";
import thePatient from "@/components/doctor/thePatient";
import askList from "@/components/doctor/askList";
import mrList from "@/components/doctor/mrList";
import askpatients from "@/components/doctor/askpatients";
import patientVideo from "@/components/doctor/patientVideo";
import videoRecord from "@/components/patient/videoRecord";
import onLineTrain from "@/components/Agora_Web_SDK_FULL/onLineTrain";
import PersonalInformation from "@/components/doctor/PersonalInformation";
import doctor_onlineTrain from "@/components/Agora_Web_SDK_FULL/doctor_onlineTrain";
import photo from "@/components/doctor/photo";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },{
    path: '/doctor',
    name: 'Doctor',
    component: Doctor,
    children:[
        {
          path: '/askpatients',
          component: askpatients,
            children: [{
                path: '/askList',
                name:'askList',
                component: askList
            }]
        },
        {
        path:'/patientList',
        component:patientList
        },
        {
            path: '/prepatient',
            name:prePatient,
            component: prePatient,
            children:[{
                path:'/writeGuidance',
                component:writeGuidance
            },{
                path:'/train',
                component: train
            },{
                path: '/writeMedical_Record',
                component: writeMedical_Record
            },{
                path: '/thePatient',
                component: thePatient,
            },{
                path:'/mrList',
                component: mrList
            }],
            redirect:'/thePatient'
        },{
            path: '/patientVideo',
            component: patientVideo
        },{
            path: '/PersonalInformation',
            component: PersonalInformation
        },{
            path:'/doctor_onlineTrain',
            component: doctor_onlineTrain
        },{
            path: '/photo',
            component: photo
        }]
  },{
        path: '/patient',
        name: 'Patient',
        component: Patient,
        children:[
            {
                path: '/seeGuidance',
                component: SeeGuidance
            },{
                path: '/patientTrain',
            component: PatientTrain
            },{
                path:'/medical_record',
                component:medical_record
            },{
                path:'/askPList',
                name:'askPList',
                component:askPList
            },{
                path:'/ask',
                name:'ask',
                component:ask
            },{
                path:'/writeAsk',
                name:'writeAsk',
                component:writeAsk
            },
            {
                path: '/videoRecord',
                name:'videoRecord',
                component: videoRecord
            },{
                path:'/onLineTrain',
                name:'onLineTrain',
                component:onLineTrain
            },]
  },{
    path: '/faceLogin',
    name:'faceLogin',
    component: FaceLogin
  },{
    path: '/Register',
    name:'Register',
    component: Register
  },{
    path: '/RegisterFaceData',
    name:'RegisterFaceData',
    component: RegisterFaceData
  },{
    path: '/RegisterPatient',
    name: 'RegisterPatient',
    component: RegisterPatient
  }
]

const router = new VueRouter({
  routes
})

export default router
