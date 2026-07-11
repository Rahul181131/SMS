package com.sms.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.sms.entity.User;
import com.sms.service.UserService;


@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")
public class UserController {


    @Autowired
    private UserService userService;


    // Register
    @PostMapping("/register")
    public ResponseEntity<User> registerUser(
            @RequestBody User user) {

        User savedUser = userService.registerUser(user);

        return ResponseEntity.ok(savedUser);
    }


    // Login
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(
            @RequestBody User user) {


        User loginUser =
                userService.loginUser(
                        user.getEmail(),
                        user.getPassword()
                );


        if(loginUser != null) {

            return ResponseEntity.ok(loginUser);

        }


        return ResponseEntity
                .badRequest()
                .body("Invalid email or password");

    }

}