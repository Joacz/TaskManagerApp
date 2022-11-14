package net.joagz.taskmanagerback.service;

import java.util.List;

import net.joagz.taskmanagerback.model.Task;

public interface ITaskService {
    
    public List<Task> findAll();

    public Task findById(long id);

    public void save(Task task);

    public void delete(Task task);
    
    public void toggleCheck(long task_id);

}
