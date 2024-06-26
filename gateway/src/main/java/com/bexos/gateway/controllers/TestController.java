package com.bexos.gateway.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {
    @GetMapping("/hello")
    public String hello(){
        return "Hello from gateway client, i am open";
    }

    @GetMapping("/secure")
    public String secure(){
        return "Hello from gateway client, i am secured";
    }
}
