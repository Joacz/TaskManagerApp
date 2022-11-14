package net.joagz.taskmanagerback.service;

import java.util.List;

import net.joagz.taskmanagerback.model.Task;

public interface ITaskService {
    
    public List<Task> findAll();

    public Task findById(long id);

    public void save(Task task, Long user_id);

    public void delete(Task task);
    
    public void toggleCheck(long task_id);

    public void update(Task task);

    public List<Task> findAllByUser_id(Long user_id);

}
