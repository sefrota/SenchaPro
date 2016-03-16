package com.senchapro.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by sletras on 16/03/2016.
 */
@RestController
public class HomeController {

    @RequestMapping("/")
    public String helloWorld(){
        return "Hello";
    }
}
