package com.example.demo.Entity;

public class train_task {
    //患者编号
    private int pid;
    //任务内容
    private String traincontent;
    //填写人名
    private String writed;
    //填写时间
    private String writetime;

    public train_task(){}

    public int getPid() {
        return pid;
    }

    public void setPid(int pid) {
        this.pid = pid;
    }

    public String getTraincontent() {
        return traincontent;
    }

    public void setTraincontent(String traincontent) {
        this.traincontent = traincontent;
    }

    public String getWrited() {
        return writed;
    }

    public void setWrited(String writed) {
        this.writed = writed;
    }

    public String getWritetime() {
        return writetime;
    }

    public void setWritetime(String writetime) {
        this.writetime = writetime;
    }
}
