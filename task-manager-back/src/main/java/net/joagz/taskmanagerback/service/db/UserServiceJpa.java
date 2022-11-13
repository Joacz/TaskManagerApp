package net.joagz.taskmanagerback.service.db;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import net.joagz.taskmanagerback.model.User;
import net.joagz.taskmanagerback.repository.UserRepository;
import net.joagz.taskmanagerback.service.IUserService;

@Service
@Primary
public class UserServiceJpa implements IUserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public void delete(User user) {
        userRepository.deleteById(user.getId());
    }

    @Override
    public List<User> findAll() {
        return userRepository.findAll();
    }

    @Override
    public User findById(long id) {
        Optional<User> user = userRepository.findById(id);
        return user.get();
    }

    @Override
    public void save(User user) {
        userRepository.save(user);
    }

}
