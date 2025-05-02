package com.ecomarket.backend.features.user_role.dto;

import java.time.LocalDateTime;

public record UserRoleDTO(
        Long id,
        Long userId,
        Long roleId,
        LocalDateTime registeredAt
) {}