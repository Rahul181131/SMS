package com.sms.service;

import com.sms.entity.User;

public interface UserService {


    // Register User
    User registerUser(User user);



    // Login User
    User loginUser(String email, String password);


}
