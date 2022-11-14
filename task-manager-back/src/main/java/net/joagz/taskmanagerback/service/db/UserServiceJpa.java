package net.joagz.taskmanagerback.service.db;

import java.util.LinkedList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import net.joagz.taskmanagerback.model.Profile;
import net.joagz.taskmanagerback.model.User;
import net.joagz.taskmanagerback.repository.UserRepository;
import net.joagz.taskmanagerback.service.IUserService;

@Service
@Primary
public class UserServiceJpa implements IUserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private ProfileServiceJpa profileService;

    @Override
    public void delete(User user) {
        user.setProfile(null);
        userRepository.deleteById(user.getId());
    }

    @Override
    public User findByUsername(String username) {
        return userRepository.findByUsername(username);
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

        Profile profile = profileService.findById(1);
        List<Profile> profiles = new LinkedList<Profile>();

        profiles.add(profile);
        user.setProfile(profiles);
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setStatus(1);
        userRepository.save(user);
    }

}
