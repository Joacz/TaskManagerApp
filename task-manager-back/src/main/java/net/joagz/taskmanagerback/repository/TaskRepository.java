package net.joagz.taskmanagerback.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import net.joagz.taskmanagerback.model.Task;

public interface TaskRepository extends JpaRepository<Task, Long> {
    public List<Task> findAllByUser_id(Long user_id);
}
