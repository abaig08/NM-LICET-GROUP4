package com.nm.group4.wta;

public class Strength {
    private String date;
    private String workout;
    private int sets;
    private int reps;
    
    public Strength(String date, String workout, int sets, int reps) {
        this.date = date;
        this.workout = workout;
        this.sets = sets;
        this.reps = reps;
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

    public int getSets() {
        return sets;
    }

    public void setSets(int sets) {
        this.sets = sets;
    }

    public int getReps() {
        return reps;
    }

    public void setReps(int reps) {
        this.reps = reps;
    }
}
