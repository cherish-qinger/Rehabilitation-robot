package com.example.demo.Service;

import com.example.demo.Entity.ask;
import com.example.demo.Entity.medical_record;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PatientService {
    @Autowired
    private com.example.demo.Dao.patientDao patientDao;
    @Autowired
    private com.example.demo.Dao.medical_recordDao medical_recordDao;
    @Autowired
    private com.example.demo.Dao.askDao askDao;

    public List<medical_record> getMedical_Records(int pid){
        try{
            return medical_recordDao.findMedicalRecordbyID(pid);
        }catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }

    public ask getAskbyAid(String aid){
        try{
            return askDao.findaskbyAid(aid);
        }
        catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }

    public List<ask> getPasklist(String pid){
        try{
            return askDao.findaskbyID(pid);
        }
        catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }

    public int writePAsk(ask asks){
        try{
            return askDao.insertPask(asks);
        }
        catch (Exception e){
            e.printStackTrace();
            return 0;
        }
    }


    //添加患者和医患关系
    public int addPatient(String pname, String psex, String pbirth, String paddress, String ptel, String pphoto, int dsid){
        try {
            int pid=patientDao.getMaxPid()+1;
            patientDao.adddprelation(dsid,pid);
            String bir=pbirth.substring(0,10);
            int year=Integer.parseInt(bir.substring(0,4));
            int age=2021-year;
            boolean result=patientDao.addNewPatient(pid,pname,psex,age,pbirth,pphoto,paddress,ptel);
            return pid;
        }catch (Exception e){
            System.out.println("添加患者时，service层出错");
            e.printStackTrace();
            return 0;
        }
    }

    //删除医患关系
    public boolean deletepdRelation(int pid,int dsid){
        try {
            boolean result=patientDao.deletepdRelation(pid,dsid);
            return result;
        }catch (Exception e){
            System.out.println("删除医患关系时,service层出错");
            e.printStackTrace();
            return false;
        }
    }
}
