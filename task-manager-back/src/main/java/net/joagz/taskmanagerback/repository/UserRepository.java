package net.joagz.taskmanagerback.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import net.joagz.taskmanagerback.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    // QUERY: 'SELECT * FROM users WHERE username = "?"'
    public User findByUsername(String username);
}
