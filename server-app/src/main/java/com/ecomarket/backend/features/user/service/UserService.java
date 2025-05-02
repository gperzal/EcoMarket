package com.ecomarket.backend.features.user.service;

import com.ecomarket.backend.features.user.dto.UserDTO;
import java.util.List;

public interface UserService {
    List<UserDTO> findAll();
    UserDTO findById(Long id);
    UserDTO save(UserDTO userDTO);
    UserDTO update(Long id, UserDTO userDTO);
    void deleteById(Long id);
    UserDTO findByEmail(String email);
}
