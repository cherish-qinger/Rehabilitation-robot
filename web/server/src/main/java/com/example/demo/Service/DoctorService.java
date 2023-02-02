package com.example.demo.Service;

import com.example.demo.Entity.ask;
import com.example.demo.Entity.doctor;
import com.example.demo.Entity.medical_record;
import com.example.demo.Entity.patient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DoctorService {
    @Autowired
    private com.example.demo.Dao.patientDao patientDao;
    @Autowired
    private com.example.demo.Dao.doctorDao doctorDao;
    @Autowired
    private com.example.demo.Dao.medical_recordDao medical_recordDao;
    @Autowired
    private com.example.demo.Dao.askDao askDao;

    //找医生信息
    public doctor getdoctorbyid(String dsid){
        try{
            return doctorDao.findDoctorById(dsid);
        }catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }

    public int writeDAnswer(ask asks){
        try{
            return askDao.insertDanswer(asks);
        }
        catch (Exception e){
            e.printStackTrace();
            return 0;
        }
    }

    public List<ask> findasklist(String pid){
        try{
            return askDao.findaskbyID(pid);
        }catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }

    public patient findPatient(String pid){
        try{
            return patientDao.findPatientById(pid);
        }catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }

    public int addmrcontent(String mrcontent,int pid,String writed){
        try{
            medical_record mr=new medical_record();
            mr.setMrcontent(mrcontent);
            mr.setWrited(writed);
            mr.setPid(pid);
            int men=medical_recordDao.findMedicalRecordbyID(pid).size()+1;
            mr.setMen(men);
            return medical_recordDao.insertmrecord(mr);
        }catch (Exception e){
            e.printStackTrace();
            System.out.println("添加病例时，service层出错");
            return 0;
        }
    }

    public List<patient> getMypatients(String dsid){
        try{
            return patientDao.getMyPatients(dsid);
        }catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }
    public int addNewDoctor(String dname, String dbirth,String dsex,String dpolitics,String dpassword,String  demail,String dtel,
                            int did,int dwag,String dhospital,String ddepartment,String daddress,String title,String dphoto){
        try {
            int dsid=doctorDao.getMaxDsis()+1;
            String bir=dbirth.substring(0,10);
            int year=Integer.parseInt(bir.substring(0,4));
            int age=2021-year;
            boolean result= doctorDao.addNewDoctor(dsid,dname,dbirth,dsex,dpolitics,dpassword,demail,dtel,
                    did,dwag,dhospital,ddepartment,daddress,title,dphoto,age);
            if(result){
                return dsid;
            }else {
                return 0;
            }
        }catch (Exception e){
            e.printStackTrace();
            System.out.println("注册医生时，service层出错");
            return 0;
        }
    }

    //插入用户的人脸数据
    public void addFaceData(int dsid,byte[] featuredata){
        try{
            doctorDao.addFace(dsid,featuredata);
        }catch (Exception e){
            System.out.println("人脸添加失败");
            e.printStackTrace();
        }
    }
}
