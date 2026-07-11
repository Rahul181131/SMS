package com.sms.serviceimpl;

import org.springframework.stereotype.Service;

import com.sms.dto.DashboardResponse;
import com.sms.repository.StudentRepository;
import com.sms.repository.UserRepository;
import com.sms.service.DashboardService;

@Service
public class DashboardServiceImpl implements DashboardService {

    private final StudentRepository studentRepository;
    private final UserRepository userRepository;


    public DashboardServiceImpl(
            StudentRepository studentRepository,
            UserRepository userRepository) {

        this.studentRepository = studentRepository;
        this.userRepository = userRepository;

    }


    @Override
    public DashboardResponse getDashboardData() {

        long totalStudents = studentRepository.count();

        long totalUsers = userRepository.count();


        return new DashboardResponse(
                totalStudents,
                totalUsers
        );

    }

}