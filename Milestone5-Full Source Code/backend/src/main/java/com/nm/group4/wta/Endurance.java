package com.nm.group4.wta;



public class Endurance {
    private String date;
    private String workout;
    private int duration;

    // Constructor
    public Endurance(int userId, String date, String workout, int duration) {
        this.date = date;
        this.workout = workout;
        this.duration = duration;
    }


    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getWorkout() {
        return workout;
    }

    public void setWorkout(String workout) {
        this.workout = workout;
    }

    public int getDuration() {
        return duration;
    }
}