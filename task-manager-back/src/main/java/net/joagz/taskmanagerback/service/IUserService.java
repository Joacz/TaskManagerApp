package net.joagz.taskmanagerback.service;

import java.util.List;

import net.joagz.taskmanagerback.model.User;

public interface IUserService {

    public List<User> findAll();

    public User findById(long id);

    public void save(User user);

    public void delete(User user);

    public User findByUsername(String username);
    
}
