package com.ecomarket.backend.features.user.dto;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

public record UserDTO(
        Long id,
        String uuid,
        String firstName,
        String lastName,
        String email,
        String phone,
        String documentType,
        String documentNumber,
        String passwordHash,
        LocalDate birthDate,
        LocalDateTime registrationDate,
        Integer statusId,
        List<String> roles
) {}
