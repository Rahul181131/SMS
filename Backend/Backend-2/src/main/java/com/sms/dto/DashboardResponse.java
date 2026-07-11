package com.sms.dto;

public class DashboardResponse {

    private long totalStudents;
    private long totalUsers;

    public DashboardResponse(long totalStudents, long totalUsers) {
        this.totalStudents = totalStudents;
        this.totalUsers = totalUsers;
    }

    public long getTotalStudents() {
        return totalStudents;
    }

    public void setTotalStudents(long totalStudents) {
        this.totalStudents = totalStudents;
    }

    public long getTotalUsers() {
        return totalUsers;
    }

    public void setTotalUsers(long totalUsers) {
        this.totalUsers = totalUsers;
    }
}