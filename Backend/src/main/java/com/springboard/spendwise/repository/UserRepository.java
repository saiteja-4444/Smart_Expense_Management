package com.springboard.spendwise.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.springboard.spendwise.model.User;


@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // kunal work for registration
    User findByEmail(String email);
    
// login
    User findByEmailAndPassword(String email, String password);

    User getUserByEmail(String email);

}
