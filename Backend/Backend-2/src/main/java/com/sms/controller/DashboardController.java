package com.sms.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sms.dto.DashboardResponse;
import com.sms.service.DashboardService;

@RestController
@RequestMapping("/api/dashboard")
public class DashboardController {


    private final DashboardService dashboardService;


    public DashboardController(DashboardService dashboardService) {

        this.dashboardService = dashboardService;

    }


    @GetMapping
    public DashboardResponse getDashboardData() {

        return dashboardService.getDashboardData();

    }

}