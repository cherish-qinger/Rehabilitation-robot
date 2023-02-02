package com.example.demo.Dao;

import com.baomidou.dynamic.datasource.annotation.DS;
import com.example.demo.Entity.dafu;
import com.example.demo.Entity.patien;
import com.example.demo.Entity.yujv;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Component;

import java.util.List;
//使用@DS注解，以指明使用的是那个数据库，默认的主数据库不需要该注解，该注解按网上的说法，放在service和dao中均可，但并未尝试
@DS("yujv")
@Mapper
@Component
public interface yujvDao {
    //查找yujv表中的最后一条记录
   @Select(" select   *   from   yujv  order by id desc limit 1")
    yujv getLastYujv();
   //查找dafu表的最后一条记录
   @Select("select   *   from   dafu  order by id desc limit 1")
   dafu getLastDafu();
   //查找yujv表中所有id在范围内的记录
   @Select("Select sentence from yujv where id>=#{oldid}&&id<=#{newid}")
    List<String> getYujv(int oldid,int newid);
   @Select("select response from dafu where id>=#{oldid}&&id<=#{newid}")
    List<String> getDafu(int oldid,int newid);
    @Select(" select   *   from   patien  order by id desc limit 1")
    patien getLastPatien();
    @Select("select response from patien where id>=#{oldid}&&id<=#{newid}")
    List<String> getNewTask(int oldid,int newid);

}
