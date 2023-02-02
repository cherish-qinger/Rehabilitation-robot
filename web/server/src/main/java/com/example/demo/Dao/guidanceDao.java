package com.example.demo.Dao;

import com.example.demo.Entity.guidance;
import com.example.demo.Entity.train_task;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Mapper
public interface guidanceDao {
    //访问数据库，获取指导内容
    @Select("select * from guidance where pid=#{pid}")
    List<guidance> getMyGuidance(int pid);
    //添加指导内容
    @Insert("insert into guidance(pid,type,guidance,writed,writetime,isread)" +
            " values(#{pid},#{type},#{guidance},#{writed},#{writrtime},0)")
    boolean addGuidance(int pid,int type,String guidance,String writed,String writetime);
    //添加训练内容
    @Insert("insert into train_task(pid,traincontent,writed,writetime)" +
            " values(#{pid},#{traincontent},#{writed},#{writetime})")
    boolean addTrainTask(int pid,String traincontent,String writed,String writetime);
    //更新训练内容
    @Update("update train_task" +
            " set traincontent=#{traincontent},writed=#{writed},writetime=#{writetime}" +
            " where pid=#{pid}")
    boolean updateTrainTask(int pid,String traincontent,String writed,String writetime);
    //查找用户是否有训练内容
    @Select("select count(*) from train_task where pid=#{pid}")
    int countIsTrainTask(int pid);
    //获取编号为pid的用户的训练内容
    @Select("select * from train_task where pid=#{pid}")
    train_task getWritedTrainTask(int pid);
}
