package com.ecomarket.backend.features.role.service;

import com.ecomarket.backend.features.role.dto.RoleDTO;

import java.util.List;

public interface RoleService {
    List<RoleDTO> findAll();
    RoleDTO findById(Long id);
    RoleDTO save(RoleDTO dto);
    RoleDTO update(Long id, RoleDTO dto);
    void deleteById(Long id);
}
