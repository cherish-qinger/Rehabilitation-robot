package com.example.demo.Controller;

import com.arcsoft.face.FaceEngine;
import com.arcsoft.face.FaceFeature;
import com.arcsoft.face.FaceInfo;
import com.arcsoft.face.enums.ImageFormat;


import com.arcsoft.face.toolkit.ImageInfo;
import com.arcsoft.face.toolkit.ImageFactory;
import com.example.demo.Entity.doctor;
import com.example.demo.Entity.patient;
import com.example.demo.Service.FaceSevice;
import com.example.demo.Service.loginService;
import com.example.demo.utils.RetResponse;
import com.example.demo.utils.RetResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import sun.misc.BASE64Decoder;
import sun.misc.BASE64Encoder;

import java.io.UnsupportedEncodingException;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/login")
public class LoginController {
    @Autowired
    private loginService loginService;

    //患者密码登录
    @RequestMapping("/pass_patient")
    public RetResult patientpasslogin(String id, String password){
        patient pat=new patient();
        if(loginService.patientlogin(id, password)!=null){
            pat=loginService.patientlogin(id, password);
        }

        if(pat.getPpassword()!=null&&pat.getPpassword().equals(password)){
            return RetResponse.makeRsp(200,"",pat);
//            return RetResponse.makeRsp(200,"",loginService.patientlogin(id, password).getPid());
        }
        return RetResponse.makeRsp(500,"查无此人");
    }
    //医生密码登录
    @RequestMapping("/pass_doctor")
    public RetResult doctorpasslogin(String id,String password){
        doctor doc=new doctor();
        if(loginService.doctorlogin(id, password)!=null){
            doc=loginService.doctorlogin(id, password);
        }
        if(doc.getDpassword()!=null){
            if(doc.getDpassword().equals(password)){
                return RetResponse.makeRsp(200,"",doc);
//                return RetResponse.makeRsp(200,"",loginService.doctorlogin(id, password).getDsid());
            }

        }
        return RetResponse.makeRsp(500,"查无此人");
    }
    //人脸识别登录，患者和医生都使用这一函数进行登录
    @RequestMapping("/facelogin")
    public RetResult faceLogin(String facedata){
        //取得引擎
        FaceSevice faceSevice=new FaceSevice();
        FaceEngine faceEngine= faceSevice.init();
        //解析图片
        String face=facedata.substring(22);//将dataurl串的头部码去掉，只留下图片的数据码
        BASE64Decoder decoder = new BASE64Decoder();
        try {
            byte[] decode=decoder.decodeBuffer(face);
            ImageInfo imageInfo=ImageFactory.getRGBData(decode);
            //人脸检测
            List<FaceInfo> faceInfoList = new ArrayList<FaceInfo>();
            int detectCode = faceEngine.detectFaces(imageInfo.getImageData(), imageInfo.getWidth(), imageInfo.getHeight(), ImageFormat.CP_PAF_BGR24, faceInfoList);
            //对进行识别的人脸进行特征提取
            FaceFeature targetfaceFeature = new FaceFeature();
            int extractCode = faceEngine.extractFaceFeature(imageInfo.getImageData(), imageInfo.getWidth(), imageInfo.getHeight(), ImageFormat.CP_PAF_BGR24, faceInfoList.get(0), targetfaceFeature);
            patient p=loginService.pcompareFace(faceEngine,targetfaceFeature);
            doctor d=loginService.dcompareFace(faceEngine,targetfaceFeature);

            if(p.getPid()>0){
                return RetResponse.makeRsp(200,"患者登录成功",p);
            }
            if(d.getDsid()>0){
                return RetResponse.makeRsp(200,"医生登录成功",d);
            }
            return RetResponse.makeRsp(500,"查无此人");
        }catch (Exception e){
            System.out.println("解码失败");
            return RetResponse.makeErrRsp("失败");
        }
    }
}
