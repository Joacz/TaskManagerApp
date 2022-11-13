package net.joagz.taskmanagerback.controller;

import org.springframework.web.bind.annotation.RestController;

import net.joagz.taskmanagerback.model.User;
import net.joagz.taskmanagerback.service.db.UserServiceJpa;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
public class UserController {

    @Autowired
    private UserServiceJpa userService;

    @GetMapping(value = "/")
    public List<User> getUsers() {
        return userService.findAll();
    }

}
