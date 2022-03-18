package com.examly.springapp.app.registration.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.registration.service.RegistrationService;
import com.examly.springapp.app.registration.model.User;
@RestController
public class RegistrationController {
    @Autowired
    private RegistrationService service;

    @RequestMapping("/registerUser")
    public User registerUser(@RequestBody User user){
        String tempEmailId=user.getEmailId();
        if(tempEmailId!=null &&!"".equals(tempEmailId)){

        }
        User userObj=null;
        userObj =service.saveUser(user);
        return userObj;
    }
}
