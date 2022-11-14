package net.joagz.taskmanagerback.service.db;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import net.joagz.taskmanagerback.model.Profile;
import net.joagz.taskmanagerback.repository.ProfileRepository;
import net.joagz.taskmanagerback.service.IProfileService;

@Service
@Primary
public class ProfileServiceJpa implements IProfileService {

    @Autowired
    private ProfileRepository profileRepository;

    @Override
    public void delete(Profile profile) {
        profileRepository.deleteById(profile.getId());
    }

    @Override
    public List<Profile> findAll() {
        return profileRepository.findAll();
    }

    @Override
    public Profile findById(long id) {
        Optional<Profile> profile = profileRepository.findById(id);
        return profile.get();
    }

    @Override
    public void save(Profile profile) {
        profileRepository.save(profile);
    }

}
