package com.ecomarket.backend.features.user_role.service;

import com.ecomarket.backend.features.user_role.dto.UserRoleDTO;
import java.util.List;

public interface UserRoleService {
    List<UserRoleDTO> findAll();
    UserRoleDTO findById(Long id);
    UserRoleDTO save(UserRoleDTO dto);
    UserRoleDTO update(Long id, UserRoleDTO dto);
    void deleteById(Long id);
}
