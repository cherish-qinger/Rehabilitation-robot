package com.example.demo.Dao;

import com.example.demo.Entity.patient;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Mapper
public interface patientDao {
    //查询特定编号的患者信息
    @Select("select * from patient where pid=#{id}")
    patient findPatientById(String id);
    //获取所有的患者信息
    @Select("select * from patient")
    List<patient> getAllPatient();
    //获取指定编号的医生的所有患者信息
    @Select("select * from patient,dprelation where patient.pid=dprelation.pid&&dprelation.dsid=#{dsid}")
    List<patient> getMyPatients(String dsid);
    //获得患者的最大编号
    @Select("select max(pid) from patient")
    int getMaxPid();
    //向患者表中新增患者信息，其中默认密码设置为123456
    @Insert("insert into patient(pid,pname,psex,page,pbirth,pphoto,paddress,ptel,ppassword)" +
            "values(#{pid},#{pname},#{psex},#{page},#{pbirth},#{pphoto},#{paddress},#{ptel},123456)")
    boolean addNewPatient(int pid,String pname,String psex,int page,String pbirth,String pphoto,String paddress,String ptel);
    //向医患关系表中添加相应的关系
    @Insert("insert into dprelation(dsid,pid) values(#{dsid},#{pid})")
    boolean adddprelation(int dsid,int pid);
    //删除医患关系表中相应关系
    @Delete("delete from dprelation where pid=#{pid}&&dsid=#{dsid}")
    boolean deletepdRelation(int pid,int dsid);
}
