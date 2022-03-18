package com.examly.springapp.registration.service;
import org.springframework.stereotype.Service;
import com.examly.springapp.app.registration.model.User;
import com.examly.springapp.app.registration.repository.RegistrationRepository;
import org.springframework.beans.factory.annotation.Autowired;
@Service
public class RegistrationService{
    @Autowired
    private RegistrationRepository repo;
    
    public User saveUser(User user){
        return repo.save(user);
    }
}
