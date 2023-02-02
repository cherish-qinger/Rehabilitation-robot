package com.example.demo.Service;

import com.arcsoft.face.FaceEngine;
import com.arcsoft.face.FaceFeature;
import com.arcsoft.face.FaceSimilar;
import com.example.demo.Dao.doctorDao;
import com.example.demo.Dao.patientDao;
import com.example.demo.Entity.doctor;
import com.example.demo.Entity.patient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class loginService {
    @Autowired
    private patientDao patientDao;
    @Autowired
    private doctorDao doctorDao;

    public patient patientlogin(String id,String password){
        patient pa=new patient();
        pa=patientDao.findPatientById(id);
        return pa;
    }

    public doctor doctorlogin(String id,String password){
        doctor doctor=new doctor();
        doctor=doctorDao.findDoctorById(id);
        return doctor;
    }

    //进行人脸信息的比对
    public patient pcompareFace(FaceEngine faceEngine, FaceFeature targetFaceFeature){
        try{
            List<patient> patientList=patientDao.getAllPatient();
            FaceFeature sourceFaceFeature=new FaceFeature();
            FaceSimilar faceSimilar = new FaceSimilar();
            float similer=-1;
            patient presult=new patient();
            for(int i=0;i<patientList.size();i++){
                if(patientList.get(i).getPfacedata()==null){continue;}
                sourceFaceFeature.setFeatureData(patientList.get(i).getPfacedata());
                int compareCode=faceEngine.compareFaceFeature(targetFaceFeature,sourceFaceFeature,faceSimilar);
                if(faceSimilar.getScore()>0.8&&faceSimilar.getScore()>similer){
                    similer=faceSimilar.getScore();
                    System.out.println(similer);
                    presult=patientList.get(i);
                }}
            return presult;
        }catch (Exception e){
            System.out.println("人脸比对出现问题");
            e.printStackTrace();
            return null;
        }
    }
    public doctor dcompareFace(FaceEngine faceEngine, FaceFeature targetFaceFeature){
        try{
            List<doctor> doctorList=doctorDao.getAllDoctor();
            FaceFeature sourceFaceFeature=new FaceFeature();
            FaceSimilar faceSimilar = new FaceSimilar();
            float similer=-1;
            doctor doc=new doctor();
            for(int i=0;i<doctorList.size();i++){
                if(doctorList.get(i).getDfacedata()==null){continue;}
                sourceFaceFeature.setFeatureData(doctorList.get(i).getDfacedata());
                int compareCode=faceEngine.compareFaceFeature(targetFaceFeature,sourceFaceFeature,faceSimilar);
                if(faceSimilar.getScore()>0.8&&faceSimilar.getScore()>similer){
                    similer=faceSimilar.getScore();
                    System.out.println(similer);
                    doc=doctorList.get(i);
                }}
            return doc;
        }catch (Exception e){
            System.out.println("人脸比对出现问题");
            e.printStackTrace();
            return null;
        }
    }
}
