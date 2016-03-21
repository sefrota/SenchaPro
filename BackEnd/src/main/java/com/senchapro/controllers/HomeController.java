package com.senchapro.controllers;

import com.senchapro.models.User;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by sletras on 16/03/2016.
 */
@RestController
public class HomeController {

    @RequestMapping("/")
    public @ResponseBody
    Map<String, List<User>> helloWorld(){
        Map<String, List<User>> users = new HashMap<>();
        List<User> usersData = new ArrayList<>();
        usersData.add(new User(1, "tonyt", "monkey", "Anthony", "Trinity", "Male",
        "1981-05-23", "tonyt@gmail.com", "Main Street", "92525555-22", "England"));
        users.put("users", usersData);
        usersData.add(new User(2, "hyunsuks", "monkey", "Hyunsuk", "Park", "Female",
                "1988-08-10", "wise_innocent@hotmail.com", "Main Street", "92525555-22", "Korea"));
        users.put("users", usersData);
        return users;
    }
}
