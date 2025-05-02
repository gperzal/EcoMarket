package com.ecomarket.backend.features.role.mapper;

import com.ecomarket.backend.features.role.dto.RoleDTO;
import com.ecomarket.backend.features.role.model.Role;

public class RoleMapper {

    public static RoleDTO toDTO(Role role) {
        return new RoleDTO(
                role.getId(),
                role.getName(),
                role.getDescription()
        );
    }

    public static Role toEntity(RoleDTO dto) {
        return Role.builder()
                .id(dto.id())
                .name(dto.name())
                .description(dto.description())
                .build();
    }
}
