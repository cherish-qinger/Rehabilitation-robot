package com.example.demo.utils;

public class RetResponse {
    //自定义message 失败信息
    public static <T> RetResult<T> makeErrRsp(String message) {
        return new RetResult<T>(400,message,null);
    }

    //自定义code,msg 返回数据
    public static <T> RetResult<T> makeRsp(int code, String msg) {
        return new RetResult<T>(code,msg,null);
    }
    //自定义code,msg,data 返回数据
    public static <T> RetResult<T> makeRsp(int code, String msg, T data) {
        return new RetResult<T>(code,msg,data);
    }
}
