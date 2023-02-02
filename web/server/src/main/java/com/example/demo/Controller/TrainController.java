package com.example.demo.Controller;

import com.example.demo.Entity.dafu;
import com.example.demo.Entity.patien;
import com.example.demo.Entity.yujv;
import com.example.demo.Service.YujvService;
import com.example.demo.utils.RetResponse;
import com.example.demo.utils.RetResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.*;

//测试
@RequestMapping("/train")
@RestController
public class TrainController {
    @Autowired
    private YujvService yujvService;

    //调用启动语音识别的程序
    @RequestMapping("/getTrainTask")
    public void getTrainTask() {
        ProcessBuilder processBuilder = new ProcessBuilder();
        processBuilder.command("C:\\ProgramData\\Anaconda3\\python.exe","D:\\tele_yuyin.py");
        //将标准输入流和错误输入流合并，通过标准输入流读取信息
        processBuilder.redirectErrorStream(true);
        try {
            //启动进程
            Process start = processBuilder.start();
            //获取输入流
            InputStream inputStream = start.getInputStream();
            //转成字符输入流
            InputStreamReader inputStreamReader = new InputStreamReader(inputStream, "gbk");
            int len = -1;
            char[] c = new char[1024];
            StringBuffer outputString = new StringBuffer();
            //读取进程输入流中的内容
            while ((len = inputStreamReader.read(c)) != -1) {
                String s = new String(c, 0, len);
                outputString.append(s);
                System.out.print(s);
            }
            //inputStream.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    //获取yujv表中的最后一条记录
    @RequestMapping("/getLastYujv")
    public RetResult getLastYujv(){
        try{
            yujv y =yujvService.getLastYujv();
            return RetResponse.makeRsp(200,"success",y);
        }catch (Exception e){
            e.printStackTrace();
            return RetResponse.makeErrRsp("error");
        }
    }
    //获取dafu表中的最后一条记录
    @RequestMapping("/getLastDafu")
    public RetResult getLastDafu(){
        try{
            dafu d =yujvService.getLastDafu();
            return RetResponse.makeRsp(200,"success",d);
        }catch (Exception e){
            e.printStackTrace();
            return RetResponse.makeErrRsp("error");
        }
    }
    //获取yujv表中新增的患者语句
    @RequestMapping("/getYujv")
    public RetResult getYujv(int oriId,int LastId){
        try{
            return RetResponse.makeRsp(200,"success",yujvService.getYujv(oriId,LastId));
        }catch (Exception e){
            e.printStackTrace();
            return RetResponse.makeErrRsp("error");
        }
    }
    //获取dafu表中新增的机器答复
    @RequestMapping("/getDafu")
    public RetResult getDafu(int oriId,int LastId){
        try{
            return RetResponse.makeRsp(200,"success",yujvService.getdafu(oriId,LastId));
        }catch (Exception e){
            e.printStackTrace();
            return RetResponse.makeErrRsp("error");
        }
    }
    //获取表中的最后一个任务
    @RequestMapping("/getLastTask")
    public RetResult getLastTask(){
        try{
            return RetResponse.makeRsp(200,"success",yujvService.getLastTask());
        }catch (Exception e){
            e.printStackTrace();
            return RetResponse.makeErrRsp("error");
        }
    }
    //获取表中新增的任务
    @RequestMapping("/getTask")
    public RetResult getTask(int oriId,int LastId){
        try{
            return RetResponse.makeRsp(200,"success",yujvService.getNewTask(oriId, LastId));
        }catch (Exception e){
            e.printStackTrace();
            return RetResponse.makeErrRsp("error");
        }
    }
}
