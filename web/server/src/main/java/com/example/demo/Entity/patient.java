package com.example.demo.Entity;

public class patient {
    //患者编号
    private int pid;
    //患者姓名
    private String pname;
    //患者性别
    private char psex;
    //患者照片
    private byte[] pphoto;
    //患者出生日期
    private String pbirth;
    //患者年龄
    private int page;
    //患者家庭地址
    private String paddress;
    //患者电话
    private String ptel;
    //患者人脸数据
    private byte[] pfacedata;
    //患者密码
    private String ppassword;

    public patient(){}

    public int getPid() {
        return pid;
    }

    public void setPid(int pid) {
        this.pid = pid;
    }

    public String getPname() {
        return pname;
    }

    public void setPname(String pname) {
        this.pname = pname;
    }

    public char getPsex() {
        return psex;
    }

    public void setPsex(char psex) {
        this.psex = psex;
    }

    public byte[] getPphoto() {
        return pphoto;
    }

    public void setPphoto(byte[] pphoto) {
        this.pphoto = pphoto;
    }

    public String getPbirth() {
        return pbirth;
    }

    public void setPbirth(String pbirth) {
        this.pbirth = pbirth;
    }

    public int getPage() {
        return page;
    }

    public void setPage(int page) {
        this.page = page;
    }

    public String getPaddress() {
        return paddress;
    }

    public void setPaddress(String paddress) {
        this.paddress = paddress;
    }

    public String getPtel() {
        return ptel;
    }

    public void setPtel(String ptel) {
        this.ptel = ptel;
    }

    public byte[] getPfacedata() {
        return pfacedata;
    }

    public void setPfacedata(byte[] pfacedata) {
        this.pfacedata = pfacedata;
    }

    public String getPpassword() {
        return ppassword;
    }

    public void setPpassword(String ppassword) {
        this.ppassword = ppassword;
    }
}
