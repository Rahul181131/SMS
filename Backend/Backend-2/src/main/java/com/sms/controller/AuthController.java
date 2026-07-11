package com.sms.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.sms.entity.User;
import com.sms.service.UserService;


@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {


    @Autowired
    private UserService userService;



    // Register API
    @PostMapping("/register")
    public ResponseEntity<User> registerUser(
            @RequestBody User user) {


        User savedUser = userService.registerUser(user);


        return ResponseEntity.ok(savedUser);
    }




    // Login API
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(
            @RequestBody User user) {


        User existingUser =
                userService.loginUser(
                        user.getEmail(),
                        user.getPassword()
                );


        if(existingUser != null) {

            return ResponseEntity.ok(existingUser);

        }


        return ResponseEntity
                .status(401)
                .body("Invalid email or password");

    }

}