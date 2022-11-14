package net.joagz.taskmanagerback.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import net.joagz.taskmanagerback.model.Profile;

public interface ProfileRepository extends JpaRepository<Profile, Long> {

}
