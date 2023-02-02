package com.example.demo.Entity;

public class doctor {
    //医生系统编号
    private int dsid;
    //医生工号
    private int did;
    //医生姓名
    private String dname;
    //医生出生时间
    private String dbirth;
    //医生年龄
    private int dage;
    //医生工作年龄
    private int wage;
    //医生个人头像
    private byte[] dphoto;
    //医生所在医院
    private String dhospital;
    //医生任职部门
    private String ddepartment;
    //医生职称
    private String dtitle;
    //医生电话号
    private String dtel;
    //医生邮箱
    private String demail;
    //医生性别
    private char dsex;
    //医生政治面貌
    private String dpolitics;
    //医生密码
    private String dpassword;
    //医生人脸特征
    private byte[] dfacedata;
    //医生住址
    private String daddress;

    public doctor(){}

    public int getDsid() {
        return dsid;
    }

    public void setDsid(int dsid) {
        this.dsid = dsid;
    }

    public int getDid() {
        return did;
    }

    public void setDid(int did) {
        this.did = did;
    }

    public String getDname() {
        return dname;
    }

    public void setDname(String dname) {
        this.dname = dname;
    }

    public String getDbirth() {
        return dbirth;
    }

    public void setDbirth(String dbirth) {
        this.dbirth = dbirth;
    }

    public int getDage() {
        return dage;
    }

    public void setDage(int dage) {
        this.dage = dage;
    }

    public int getWage() {
        return wage;
    }

    public void setWage(int wage) {
        this.wage = wage;
    }

    public byte[] getDphoto() {
        return dphoto;
    }

    public void setDphoto(byte[] dphoto) {
        this.dphoto = dphoto;
    }

    public String getDhospital() {
        return dhospital;
    }

    public void setDhospital(String dhospital) {
        this.dhospital = dhospital;
    }

    public String getDdepartment() {
        return ddepartment;
    }

    public void setDdepartment(String ddepartment) {
        this.ddepartment = ddepartment;
    }

    public String getDtitle() {
        return dtitle;
    }

    public void setDtitle(String dtitle) {
        this.dtitle = dtitle;
    }

    public String getDtel() {
        return dtel;
    }

    public void setDtel(String dtel) {
        this.dtel = dtel;
    }

    public String getDemail() {
        return demail;
    }

    public void setDemail(String demail) {
        this.demail = demail;
    }

    public char getDsex() {
        return dsex;
    }

    public void setDsex(char dsex) {
        this.dsex = dsex;
    }

    public String getDpolitics() {
        return dpolitics;
    }

    public void setDpolitics(String dpolitics) {
        this.dpolitics = dpolitics;
    }

    public String getDpassword() {
        return dpassword;
    }

    public void setDpassword(String dpassword) {
        this.dpassword = dpassword;
    }

    public byte[] getDfacedata() {
        return dfacedata;
    }

    public void setDfacedata(byte[] dfacedata) {
        this.dfacedata = dfacedata;
    }

    public String getDaddress() {
        return daddress;
    }

    public void setDaddress(String daddress) {
        this.daddress = daddress;
    }
}
