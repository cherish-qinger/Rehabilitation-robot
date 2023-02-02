package com.example.demo.Entity;

public class physiological_data {
    private int pid;
    private String gettime;
    private int heartrate;
    private int conductance;
    private int temperature;
    private boolean isoutrange;

    public physiological_data(){}

    public int getPid() {
        return pid;
    }

    public void setPid(int pid) {
        this.pid = pid;
    }

    public String getGettime() {
        return gettime;
    }

    public void setGettime(String gettime) {
        this.gettime = gettime;
    }

    public int getHeartrate() {
        return heartrate;
    }

    public void setHeartrate(int heartrate) {
        this.heartrate = heartrate;
    }

    public int getConductance() {
        return conductance;
    }

    public void setConductance(int conductance) {
        this.conductance = conductance;
    }

    public int getTemperature() {
        return temperature;
    }

    public void setTemperature(int temperature) {
        this.temperature = temperature;
    }

    public boolean isIsoutrange() {
        return isoutrange;
    }

    public void setIsoutrange(boolean isoutrange) {
        this.isoutrange = isoutrange;
    }
}
