package com.example.demo.Service;

import com.example.demo.Dao.doctorDao;
import com.example.demo.Dao.guidanceDao;
import com.example.demo.Entity.guidance;
import com.example.demo.Entity.train_task;
import com.example.demo.utils.RetResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Service
public class GuidanceService {
    @Autowired
    private guidanceDao guidanceDao;
    @Autowired
    private doctorDao doctorDao;

    public List<guidance> getMyGuidance(int pid){
        try {
            return guidanceDao.getMyGuidance(pid);
        }catch (Exception e){
            System.out.println("查询医嘱时，service层");
            e.printStackTrace();
            return null;
        }
    }

    public boolean addGUidance(String guidance,int pid,int type,int dsid){
        try{
            String dname=doctorDao.getDoctorInfoById(dsid).getDname();
            SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            Date date = new Date();
            return guidanceDao.addGuidance(pid,type,guidance,dname,df.format(date));
        }catch (Exception e){
            e.printStackTrace();
            System.out.println("添加指导时Service层出错");
            return false;
        }
    }
    //更新训练任务
    public boolean updateTrainTask(int pid,String traincontent,int dsid){
        try {
            //查找用户是否有训练任务
            int num=guidanceDao.countIsTrainTask(pid);
            String dname=doctorDao.getDoctorInfoById(dsid).getDname();
            SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            Date date = new Date();
            boolean result;
            if(num==1){
                //为1时，说明有任务，执行更新操作
                result=guidanceDao.updateTrainTask(pid,traincontent,dname,df.format(date));
            }else{
                //不为1时，说明没任务，执行插入操作
                result=guidanceDao.addTrainTask(pid,traincontent,dname,df.format(date));
            }
            return result;
        }catch (Exception e){
            e.printStackTrace();
            System.out.println("更新训练任务时，service层出错");
            return false;
        }
    }
    //获取医生写的训练任务
    public train_task getWritedTrainTask(int pid){
        try{
            return guidanceDao.getWritedTrainTask(pid);
        }catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }
}
