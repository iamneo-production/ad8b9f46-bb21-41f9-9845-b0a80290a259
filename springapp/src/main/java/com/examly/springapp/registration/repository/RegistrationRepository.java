package com.examly.springapp.app.registration.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.examly.springapp.app.registration.model.User;
public interface RegistrationRepository extends JpaRepository<User ,Integer>{
    
}