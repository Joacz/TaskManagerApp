package net.joagz.taskmanagerback.service.db;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import net.joagz.taskmanagerback.model.Task;
import net.joagz.taskmanagerback.repository.TaskRepository;
import net.joagz.taskmanagerback.service.ITaskService;

public class TaskServiceJpa implements ITaskService {

    @Autowired
    private TaskRepository taskRepository;

    @Override
    public void toggleCheck(long task_id) {
        Task task = this.findById(task_id);
        task.setChecked(task.getChecked() == 0 ? 1 : 0);
        save(task);
    }

    @Override
    public void delete(Task task) {
        taskRepository.deleteById(task.getId());
    }

    @Override
    public List<Task> findAll() {
        return taskRepository.findAll();
    }

    @Override
    public Task findById(long id) {
        Optional<Task> task = taskRepository.findById(id);
        return task.get();
    }

    @Override
    public void save(Task task) {
        taskRepository.save(task);
    }

}
