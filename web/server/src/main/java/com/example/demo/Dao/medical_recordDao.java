package com.example.demo.Dao;
import com.example.demo.Entity.doctor;
import com.example.demo.Entity.medical_record;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.springframework.stereotype.Component;
import java.util.List;

@Component
@Mapper
public interface medical_recordDao {
    @Select("select * from medical_record where pid=#{pid}")
    List<medical_record> findMedicalRecordbyID(int pid);
    @Update("insert into medical_record (men,pid,mrcontent,writed,writetime) values(#{men},#{pid},#{mrcontent},#{writed},now())")
    int insertmrecord(medical_record mr);
}
