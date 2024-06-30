package com.springboard.spendwise.service;


import com.springboard.spendwise.Dto.LoginDTO;
import com.springboard.spendwise.model.User;
import com.springboard.spendwise.response.LoginResponse;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public interface UserService {


    LoginResponse loginUser(LoginDTO loginDTO);

    // Kunal work for registration
    User createUser(User user);
    User updateUser(Long id, User user);
    List<User>viewUsers();
    void deleteUser(Long id);
    User getUserById(Long id);
    User getUserByEmail(String email);
    public User updateUserPassword(User user);

    // This method needs to be implemented to retrieve the password securely (hashed password)
    String getUserPasswordById(Long id);
}
