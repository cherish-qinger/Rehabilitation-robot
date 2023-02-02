package com.example.demo.Entity;

public class medical_record {
    //患者编号
    private int pid;
    //病历编号
    private int men;
    //病历内容
    private String mrcontent;
    //填写人名
    private String writed;
    //填写时间
    private String writetime;

    public medical_record(){
    }


    public int getPid() {
        return pid;
    }

    public void setPid(int pid) {
        this.pid = pid;
    }

    public int getMen() {
        return men;
    }

    public void setMen(int men) {
        this.men = men;
    }

    public String getMrcontent() {
        return mrcontent;
    }

    public void setMrcontent(String mrcontent) {
        this.mrcontent = mrcontent;
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
