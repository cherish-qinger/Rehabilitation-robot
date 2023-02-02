package com.example.demo.Entity;

public class ask {
    private int aid;
    private int pid;
    private String asktime;
    private String askcontent;
    private String replytime;
    private String replycontent;
    private boolean isreply;
    private String replyd;
    private String dsid;

    public ask(){
    }

    public String getDsid() {
        return dsid;
    }

    public void setDsid(String dsid) {
        this.dsid = dsid;
    }

    public int getAid() {
        return aid;
    }

    public void setAid(int aid) {
        this.aid = aid;
    }

    public int getPid() {
        return pid;
    }

    public void setPid(int pid) {
        this.pid = pid;
    }

    public String getAsktime() {
        return asktime;
    }

    public void setAsktime(String asktime) {
        this.asktime = asktime;
    }

    public String getAskcontent() {
        return askcontent;
    }

    public void setAskcontent(String askcontent) {
        this.askcontent = askcontent;
    }

    public String getReplytime() {
        return replytime;
    }

    public void setReplytime(String replytime) {
        this.replytime = replytime;
    }

    public String getReplycontent() {
        return replycontent;
    }

    public void setReplycontent(String replycontent) {
        this.replycontent = replycontent;
    }

    public boolean isIsreply() {
        return isreply;
    }

    public void setIsreply(boolean isreply) {
        this.isreply = isreply;
    }

    public String getReplyd() {
        return replyd;
    }

    public void setReplyd(String replyd) {
        this.replyd = replyd;
    }
}
