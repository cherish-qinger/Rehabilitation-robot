package com.example.demo.Controller;

import com.example.demo.Service.GuidanceService;
import com.example.demo.utils.RetResponse;
import com.example.demo.utils.RetResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/guidance")
public class GuidanceController {
    @Autowired
    private GuidanceService guidanceService;
    //查询自己的指导信息，将饮食指导等三种指导统一传递给前端，前端根据类型进行分类显示
    @RequestMapping("/getMyGuidance")
    public RetResult getMyGuidance(int pid){
        try {
            return RetResponse.makeRsp(200,"查询成功",guidanceService.getMyGuidance(pid));
        }catch (Exception e){
            e.printStackTrace();
            System.out.println("查看医嘱时，Controller层出错");
            return RetResponse.makeRsp(500,"查询失败");
        }
    }
    //医生添加指导内容，三种指导均使用这一函数
    @RequestMapping("/addGuidance")
    public RetResult addGuidance(String guidance,int pid,int type,int dsid){
        try{
            if(guidanceService.addGUidance(guidance, pid, type, dsid)){
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
    //医生使用该请求添加指导内容，若数据表中有该患者的训练内容，对内容进行更新，没有进行添加
    //具体实现是在guidanceservice中的函数进行实现
    @RequestMapping("/updateTrainTask")
    public RetResult updateTrainTask(int pid,String traincontent,int dsid){
        try {
            if(guidanceService.updateTrainTask(pid, traincontent, dsid)){
                return RetResponse.makeRsp(200,"更新成功");
            }else{
                return RetResponse.makeRsp(500,"更新失败");
            }
        }catch (Exception e){
            e.printStackTrace();
            System.out.println("更新训练任务时，Controller层出错");
            return RetResponse.makeRsp(500,"更新失败");
        }
    }
    //患者查询医生写的训练任务
    @RequestMapping("/getWritedTask")
    public RetResult getWritedTask(int pid){
        try{
            return RetResponse.makeRsp(200,"查询成功",guidanceService.getWritedTrainTask(pid));
        }catch (Exception e){
            e.printStackTrace();
            return RetResponse.makeRsp(500,"查询失败");
        }
    }
}
