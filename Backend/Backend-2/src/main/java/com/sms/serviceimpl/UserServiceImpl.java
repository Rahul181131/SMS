package com.sms.serviceimpl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sms.entity.User;
import com.sms.repository.UserRepository;
import com.sms.service.UserService;


@Service
public class UserServiceImpl implements UserService {


    @Autowired
    private UserRepository userRepository;



    // Register User
    @Override
    public User registerUser(User user) {

        return userRepository.save(user);
    }




    // Login User
    @Override
    public User loginUser(String email, String password) {


        User user = userRepository.findByEmail(email)
                .orElse(null);



        if(user != null && user.getPassword().equals(password)) {

            return user;

        }


        return null;
    }

}
