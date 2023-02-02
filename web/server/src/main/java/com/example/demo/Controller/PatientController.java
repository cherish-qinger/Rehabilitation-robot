package com.example.demo.Controller;

import com.example.demo.Entity.ask;
import com.example.demo.Entity.medical_record;
import com.example.demo.Service.PatientService;
import com.example.demo.utils.RetResponse;
import com.example.demo.utils.RetResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import sun.misc.BASE64Encoder;

import java.util.List;

@RestController
@RequestMapping("/patient")
public class PatientController {
    @Autowired
    private PatientService patientService;

    //进行患者注册
    @RequestMapping("/addpatient")
    public RetResult addPatient(String pname, String psex, String pbirth, String paddress, String ptel, MultipartFile pphoto, int dsid){
        try {
            BASE64Encoder encoder=new BASE64Encoder();
            String avatar=encoder.encode(pphoto.getBytes());
            avatar="data:image/jpg;base64,"+avatar;
            int result=patientService.addPatient(pname,psex,pbirth,paddress,ptel,avatar,dsid);
            if(result>0){
                return RetResponse.makeRsp(200,"添加成功",result);
            }
            return RetResponse.makeRsp(500,"添加出错");
        }catch (Exception e){
            System.out.println("添加患者时，Controller层出错");
            e.printStackTrace();
            return RetResponse.makeRsp(500,"添加出错");
        }
    }

    @RequestMapping("deletepdrelation")
    public RetResult deletePDRelation(int pid, int dsid){
        try{
            boolean result=patientService.deletepdRelation(pid,dsid);
            if(result==true){
                return RetResponse.makeRsp(200,"删除医患关系成功");
            }
            return RetResponse.makeRsp(500,"删除医患关系出错");
        }catch (Exception e){
            System.out.println("删除医患关系时，Controller层出错");
            e.printStackTrace();
            return RetResponse.makeRsp(500,"删除医患关系出错");
        }
    }

    @RequestMapping("/getMedical_Record")
    public RetResult findMedicalRecordbyID(int pid){
        List<medical_record> result =patientService.getMedical_Records(pid);
        if(result!=null){
            return RetResponse.makeRsp(200,"查询成功",result);
        }else{
            return RetResponse.makeRsp(500,"查询失败");
        }
    }

    @RequestMapping("/getAskbyAid")
    public RetResult getAsk(String aid){
        ask result=patientService.getAskbyAid(aid);
        if(result!=null){
            return RetResponse.makeRsp(200,"查询成功",result);
        }else{
            return RetResponse.makeRsp(500,"查询失败");
        }
    }

    @RequestMapping("/getPaskList")
    public RetResult getPaskList(String pid){
        List<ask> result =patientService.getPasklist(pid);
        if(result!=null){
            return RetResponse.makeRsp(200,"查询成功",result);
        }else{
            return RetResponse.makeRsp(500,"查询失败");
        }
    }

    @RequestMapping("/writePask")
    public RetResult writePask(String askcontent, int pid){
        ask asks=new ask();
        asks.setAskcontent(askcontent);
        asks.setPid(pid);
        int result =patientService.writePAsk(asks);
        if(result!=0){
            return RetResponse.makeRsp(200,"添加成功");
        }
        else {
            return RetResponse.makeRsp(500,"添加失败");
        }
    }

}
