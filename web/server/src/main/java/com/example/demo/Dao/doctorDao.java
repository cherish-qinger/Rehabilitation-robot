package com.example.demo.Dao;

import com.example.demo.Entity.doctor;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Mapper
public interface doctorDao {

    //获取编号为id的医生信息
    @Select("select * from doctor where DSID=#{id}")
    doctor findDoctorById(String id);
    //获取医生表的所有信息
    @Select("select * from doctor")
    List<doctor> getAllDoctor();
    //获取医生表中的最大编号
    @Select("select max(dsid) from doctor")
    int getMaxDsis();
    //向医生表中添加新的医生信息
    @Insert("insert into doctor(dsid,dname,dbirth,dsex,dpolitics,dpassword,demail,dtel," +
            "did,wage,dhospital,ddepartment,daddress,dtitle,dphoto,dage)" +
            "values(#{dsid},#{dname},#{dbirth},#{dsex},#{dpolitics},#{dpassword},#{demail},#{dtel},#{did}," +
            "#{dwag},#{dhospital},#{ddepartment},#{daddress},#{dtitle},#{dphoto},#{age})")
    boolean addNewDoctor(int dsid,String dname, String dbirth,String dsex,String dpolitics,String dpassword,String  demail,String dtel,
                         int did,int dwag,String dhospital,String ddepartment,String daddress,String dtitle,String dphoto,int age);

    //根据用户id插入相应的人脸数据特征
    @Update("UPDATE doctor set DFaceData=#{FaceDATA} where dsid=#{dsid}")
    void addFace(int dsid,byte[] FaceDATA);
    //根据医生的dsid获取医生的信息
    @Select("select * from doctor where dsid=#{dsid}")
    doctor getDoctorInfoById(int dsid);
}
