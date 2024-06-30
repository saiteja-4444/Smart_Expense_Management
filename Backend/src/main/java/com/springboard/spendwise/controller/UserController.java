package com.springboard.spendwise.controller;


import com.springboard.spendwise.Dto.LoginDTO;
import com.springboard.spendwise.model.User;
import com.springboard.spendwise.response.LoginResponse;
import com.springboard.spendwise.service.UserService;


import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.*; 
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/spendwise/register")
public class UserController {

// kunal work for registration
    @Autowired
    UserService userService;


    @PostMapping("/users")
    public User createUser(@RequestBody User user) {
        return userService.createUser(user);
    }

    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userService.viewUsers();
    }

    @GetMapping("/users/{id}")
    public User getUserById(@PathVariable Long id){
        return userService.getUserById(id);
    }    

    @DeleteMapping("/users/{id}")
    public void deleteUser(@PathVariable Long id){
        userService.deleteUser(id);
    }

  @GetMapping("/users/findIdByEmail/{email}")
    public ResponseEntity<Long> getUserIdByEmail(@PathVariable String email) {
        User user = userService.getUserByEmail(email);
        if (user != null) {
            return ResponseEntity.ok(user.getId());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/users/{id}/update")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User user) {
        User updatedUser = userService.updateUser(id, user);
        return ResponseEntity.ok(updatedUser);
    }

    @PostMapping("/users/updatePassword")
    public ResponseEntity<User> updatePassword(@RequestBody User user) {
        User updatedUser = userService.updateUserPassword(user); // Call updatePassword with newPassword
        return ResponseEntity.ok(updatedUser); // Return the updated user object
    }


// login (use api http://localhost:8085/register/users/login) or using use (/user/login) by changing the @RequestMapping path
    @PostMapping(path = "/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginDTO loginDTO)
    {
        LoginResponse loginResponse = userService.loginUser(loginDTO);
        return ResponseEntity.ok(loginResponse);
    }

}
