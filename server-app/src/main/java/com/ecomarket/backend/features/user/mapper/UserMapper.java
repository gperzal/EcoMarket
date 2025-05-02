package com.ecomarket.backend.features.user.mapper;

import com.ecomarket.backend.features.user.dto.UserDTO;
import com.ecomarket.backend.features.user.model.User;
import com.ecomarket.backend.features.user_role.model.UserRole;
import com.ecomarket.backend.features.role.shared.RoleUtils;

import java.util.List;
import java.util.stream.Collectors;

public class UserMapper {
    public static UserDTO toDTO(User u) {
        List<String> roles = u.getUserRoles() != null
                ? u.getUserRoles().stream()
                .map(UserRole::getRoleId)
                .map(RoleUtils::getRoleName)
                .collect(Collectors.toList())
                : List.of();

        return new UserDTO(
                u.getId(),
                u.getUuid(),
                u.getFirstName(),
                u.getLastName(),
                u.getEmail(),
                u.getPhone(),
                u.getDocumentType(),
                u.getDocumentNumber(),
                u.getPasswordHash(),
                u.getBirthDate(),
                u.getRegistrationDate(),
                u.getStatusId(),
                roles
        );
    }

    public static User toEntity(UserDTO dto) {
        return User.builder()
                .id(dto.id())
                .uuid(dto.uuid())
                .firstName(dto.firstName())
                .lastName(dto.lastName())
                .email(dto.email())
                .phone(dto.phone())
                .documentType(dto.documentType())
                .documentNumber(dto.documentNumber())
                .passwordHash(dto.passwordHash())
                .birthDate(dto.birthDate())
                .registrationDate(dto.registrationDate())
                .statusId(dto.statusId())
                .build();
    }
}
