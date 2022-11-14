package net.joagz.taskmanagerback.service;

import java.util.List;

import net.joagz.taskmanagerback.model.Profile;

public interface IProfileService {
    
    public List<Profile> findAll();

    public Profile findById(long id);

    public void save(Profile profile);

    public void delete(Profile profile);

}
