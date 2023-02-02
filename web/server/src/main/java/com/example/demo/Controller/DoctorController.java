package com.example.demo.Controller;

import com.arcsoft.face.FaceEngine;
import com.arcsoft.face.FaceFeature;
import com.arcsoft.face.FaceInfo;
import com.arcsoft.face.enums.ImageFormat;
import com.arcsoft.face.toolkit.ImageFactory;
import com.arcsoft.face.toolkit.ImageInfo;
import com.example.demo.Entity.ask;
import com.example.demo.Entity.doctor;
import com.example.demo.Entity.patient;
import com.example.demo.Service.DoctorService;
import com.example.demo.Service.FaceSevice;
import com.example.demo.utils.RetResponse;
import com.example.demo.utils.RetResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import sun.misc.BASE64Decoder;
import sun.misc.BASE64Encoder;

import javax.imageio.stream.ImageInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/doctor")
public class DoctorController {
    @Autowired
    private DoctorService doctorService;

    @RequestMapping("/getphoto")
    public RetResult getTrainTask() {
        ProcessBuilder processBuilder = new ProcessBuilder();
        processBuilder.command("C:\\Program Files (x86)\\Microsoft Visual Studio\\Shared\\Python36_64\\python.exe","C:\\Users\\光\\Desktop\\summary.py");
        //将标准输入流和错误输入流合并，通过标准输入流读取信息
        processBuilder.redirectErrorStream(true);
        try {
            //启动进程
            Process start = processBuilder.start();
            //获取输入流
            InputStream inputStream = start.getInputStream();
            byte[] byt = new byte[inputStream.available()];
            inputStream.read(byt);
            return RetResponse.makeRsp(200,"查询成功","nihao");
        } catch (IOException e) {
            e.printStackTrace();
            return RetResponse.makeRsp(500,"后端查询失败");
        }
    }

    //查询医生信息
    @RequestMapping("getdoctor")
    public RetResult getdoctor(String dsid){
        try{
            doctor result=doctorService.getdoctorbyid(dsid);
            if(result!=null){
                return RetResponse.makeRsp(200,"查询成功",result);
            }
            else {
                return RetResponse.makeRsp(500,"查询失败");
            }
        }catch (Exception e){
            e.printStackTrace();
            System.out.println("查询医生信息时，Controller层出错");
            return RetResponse.makeRsp(500,"后端查询失败");
        }
    }

    //h回答病人问题
    @RequestMapping("/reply")
    public RetResult writeDanswer(String replycontent, int aid, String dsid){
        ask asks=new ask();
        asks.setReplycontent(replycontent);
        asks.setAid(aid);
        asks.setDsid(dsid);
        String replyd=doctorService.getdoctorbyid(dsid).getDname();
        asks.setReplyd(replyd);
        int result =doctorService.writeDAnswer(asks);
        if(result!=0){
            return RetResponse.makeRsp(200,"添加成功");
        }
        else {
            return RetResponse.makeRsp(500,"添加失败");
        }
    }

    //查询病人问题列表
    @RequestMapping("/findasklist")
    public RetResult findasklist(String pid){
        try{
            List<ask> result=doctorService.findasklist(pid);
            if(result!=null){
                return RetResponse.makeRsp(200,"查询成功",result);
            }
            else {
                return RetResponse.makeRsp(500, "查询失败");
            }
        }catch (Exception e){
            e.printStackTrace();
            System.out.println("查询病人问题列表时，Controller层出错");
            return RetResponse.makeRsp(500,"后端查询失败");
        }
    }

    //查询病人信息
    @RequestMapping("/findpatient")
    public RetResult findpatient(String pid){
        try{
            patient result=doctorService.findPatient(pid);
            if(result!=null){
                return RetResponse.makeRsp(200,"查询成功",result);
            }
            else {
                return RetResponse.makeRsp(500,"查询失败");
            }
        }catch (Exception e){
            e.printStackTrace();
            System.out.println("查询病人信息时，Controller层出错");
            return RetResponse.makeRsp(500,"后端查询失败");
        }
    }

    //医生写病例内容
    @RequestMapping("/addmrcontent")
    public RetResult addmrcontent(String mrcontent, int pid, String writed){
        try{
            if(doctorService.addmrcontent(mrcontent, pid, writed)==1){
                return RetResponse.makeRsp(200,"添加成功");
            }else{
                return RetResponse.makeRsp(500,"后端添加失败");
            }
        }catch (Exception e){
            e.printStackTrace();
            System.out.println("添加指导时，Controller层出错");
            return RetResponse.makeRsp(500,"后端添加失败");
        }
    }

    //医生查询自己的患者信息
    @RequestMapping("/getMyPatients")
    public RetResult getMyPatients(String dsid){
        List<patient> result =doctorService.getMypatients(dsid);
        if(result!=null){

            return RetResponse.makeRsp(200,"查询成功",result);
        }else{
            return RetResponse.makeRsp(500,"查询失败");
        }
    }
    //注册患者
    @RequestMapping("/adddoctor")
    public RetResult addNewDoctor(String dname, String dbirth, String dsex, String dpolitics, String dpassword, String  demail, String dtel,
                                  String did, String dwag, String dhospital, String ddepartment, String daddress, String dtitle, MultipartFile file){
        try {
            //以下三行，将前端传来的文件信息转化为base64编码后的字符串进行存储，该字符串在前端能直接显示
            BASE64Encoder encoder=new BASE64Encoder();
            String avatar=encoder.encode(file.getBytes());
            avatar="data:image/jpg;base64,"+avatar;
            int id=Integer.parseInt(did);
            int wag=Integer.parseInt(dwag);
            int dsid=doctorService.addNewDoctor(dname,dbirth,dsex,dpolitics,dpassword,demail,dtel,id,wag,dhospital,ddepartment,daddress,dtitle,avatar);
            if(dsid>0){
                return RetResponse.makeRsp(200,"添加成功",dsid);
            }else{
                return  RetResponse.makeRsp(500,"添加失败");
            }
        }catch (Exception e){
            System.out.println("添加用户时Controller层出错");
            e.printStackTrace();
            return RetResponse.makeErrRsp("失败");
        }
    }
    //添加患者的人脸数据
    @RequestMapping("/addFaceData")
    public RetResult addFaceData(int dsid, String facedata){
        //取得引擎
        FaceSevice faceSevice=new FaceSevice();
        FaceEngine faceEngine= faceSevice.init();
        //解析图片
        String face=facedata.substring(22);//将dataurl串的头部码去掉，只留下图片的数据码
        BASE64Decoder decoder = new BASE64Decoder();
        try {
            byte[] decode=decoder.decodeBuffer(face);
            //System.out.println(decode);
            ImageInfo imageInfo= ImageFactory.getRGBData(decode);
            // System.out.println(imageInfo);
            //人脸检测
            List<FaceInfo> faceInfoList = new ArrayList<FaceInfo>();
            int detectCode = faceEngine.detectFaces(imageInfo.getImageData(), imageInfo.getWidth(), imageInfo.getHeight(), ImageFormat.CP_PAF_BGR24, faceInfoList);
            //特征提取
            FaceFeature faceFeature = new FaceFeature();
            int extractCode = faceEngine.extractFaceFeature(imageInfo.getImageData(), imageInfo.getWidth(), imageInfo.getHeight(), ImageFormat.CP_PAF_BGR24, faceInfoList.get(0), faceFeature);
            byte[] featuredata=faceFeature.getFeatureData();
            doctorService.addFaceData(dsid,featuredata);
            int unInitCode = faceEngine.unInit();
            return RetResponse.makeRsp(200,"插入人脸特征成功",faceFeature.getFeatureData().length);
        }catch (Exception e){
            System.out.println("解码失败");
            return RetResponse.makeErrRsp("失败");
        }
    }
}
