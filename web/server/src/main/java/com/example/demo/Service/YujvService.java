package com.example.demo.Service;

import com.example.demo.Dao.yujvDao;
import com.example.demo.Entity.dafu;
import com.example.demo.Entity.patien;
import com.example.demo.Entity.yujv;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class YujvService {
    @Autowired
    private yujvDao yujvDao;

    public yujv getLastYujv(){
        return yujvDao.getLastYujv();
    }
    public dafu getLastDafu(){
        return yujvDao.getLastDafu();
    }
    public List<String> getYujv(int oldnum,int newnum){
        return yujvDao.getYujv(oldnum,newnum);
    }
    public List<String> getdafu(int oldnum,int newnum){
        return yujvDao.getDafu(oldnum,newnum);
    }
    public patien getLastTask(){return yujvDao.getLastPatien();}
    public List<String> getNewTask(int oldid,int newid){return yujvDao.getNewTask(oldid, newid);}
}
