package com.ecomarket.backend.features.user_role.mapper;

import com.ecomarket.backend.features.user_role.dto.UserRoleDTO;
import com.ecomarket.backend.features.user_role.model.UserRole;

public class UserRoleMapper {
    public static UserRoleDTO toDTO(UserRole entity) {
        return new UserRoleDTO(
                entity.getId(),
                entity.getUserId(),
                entity.getRoleId(),
                entity.getRegisteredAt()
        );
    }

    public static UserRole toEntity(UserRoleDTO dto) {
        return UserRole.builder()
                .id(dto.id())
                .userId(dto.userId())
                .roleId(dto.roleId())
                .registeredAt(dto.registeredAt())
                .build();
    }
}

