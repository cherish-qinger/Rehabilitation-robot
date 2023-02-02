package com.example.demo.Dao;

import com.example.demo.Entity.ask;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Mapper
public interface askDao {
    @Select("select * from ask where pid=#{pid}")
    List<ask> findaskbyID(String pid);
    @Select("select * from ask a , dprelation d where a.pid=d.pid and d.dsid=#{dsid}")
    List<ask> findaskbyDsiD(String dsid);
    @Select("select * from ask where aid=#{aid}")
    ask findaskbyAid(String aid);
    @Update("insert into ask (pid,asktime,askcontent,isreply) values(#{pid},now(),#{askcontent},0)")
    int insertPask(ask mr);
    @Update("update ask set replytime=now(),replycontent=#{replycontent},isreply=1,replyd=#{replyd},dsid=#{dsid} where aid=#{aid}")
    int insertDanswer(ask mr);
}