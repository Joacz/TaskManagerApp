package net.joagz.taskmanagerback.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.joagz.taskmanagerback.model.Task;
import net.joagz.taskmanagerback.model.User;
import net.joagz.taskmanagerback.service.db.TaskServiceJpa;
import net.joagz.taskmanagerback.service.db.UserServiceJpa;

@RestController
@RequestMapping("/tasks")
public class TaskController {

    @Autowired
    private TaskServiceJpa taskService;

    @Autowired
    private UserServiceJpa userService;

    @GetMapping("/admin/view")
    public List<Task> getUsers() {
        return taskService.findAll();
    }

    @GetMapping("/user/getsession")
    public User getUserBySession(Authentication auth) {
        return userService.findByUsername(auth.getName());
    }

    @GetMapping("")
    public List<Task> getUsers(Authentication auth) {
        User user = userService.findByUsername(auth.getName());
        
        return taskService.findAllByUser_id(user.getId());
    }

    @GetMapping("/{id}")
    public Task getUserById(@PathVariable long id) {
        return taskService.findById(id);
    }

    @PostMapping(value = "")
    public ResponseEntity<Task> createUser(@ModelAttribute Task task, Authentication auth) {

        if (!auth.isAuthenticated()) {
            return new ResponseEntity<Task>(HttpStatus.FORBIDDEN);
        }

        if (task == null) {
            return new ResponseEntity<Task>(HttpStatus.NOT_ACCEPTABLE);
        }

        String auth_name = auth.getName();
        User user = userService.findByUsername(auth_name);

        taskService.save(task, user.getId());
        return new ResponseEntity<Task>(HttpStatus.OK);
    }

    @DeleteMapping(value = "/{id}")
    public String deleteUser(@PathVariable long id, Authentication auth) {
        User user = userService.findByUsername(auth.getName());
        Task task = taskService.findById(id);

        if (task == null) {
            return "Task not found";
        }

        if (task.getUser().getId() == user.getId()) {
            taskService.delete(task);
            return "Task deleted";
        }

        return "ERROR, this task is not associated with your user or doesn't exist.";
    }

}
