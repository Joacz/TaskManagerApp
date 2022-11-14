package net.joagz.taskmanagerback.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import net.joagz.taskmanagerback.model.Task;

public interface TaskRepository extends JpaRepository<Task, Long> {

}
