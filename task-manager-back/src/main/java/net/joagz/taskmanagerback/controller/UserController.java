package net.joagz.taskmanagerback.controller;

import org.springframework.web.bind.annotation.RestController;

import net.joagz.taskmanagerback.model.Profile;
import net.joagz.taskmanagerback.model.User;
import net.joagz.taskmanagerback.service.db.ProfileServiceJpa;
import net.joagz.taskmanagerback.service.db.UserServiceJpa;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import org.apache.tomcat.util.http.parser.MediaType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserServiceJpa userService;

    @GetMapping("")
    public List<User> getUsers() {
        return userService.findAll();
    }

    @GetMapping("/{id}")
    public User getUserById(@PathVariable long id) {
        return userService.findById(id);
    }

    @PostMapping(value = "")
    public ResponseEntity<User> createUser(@ModelAttribute User user) {

        if (user == null) {
            return new ResponseEntity<User>(HttpStatus.NOT_ACCEPTABLE);
        }

        userService.save(user);
        return new ResponseEntity<User>(HttpStatus.OK);
    }

    @DeleteMapping(value = "/{id}")
    public String deleteUser(@PathVariable long id) {

        User user = userService.findById(id);

        if (user == null) {
            return "User not found";
        }

        userService.delete(user);

        return "User deleted";

    }

}
