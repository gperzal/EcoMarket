package com.ecomarket.backend.security.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RegisterRequest {

    @NotBlank(message = "First name is required")
    private String firstName;

    @NotBlank(message = "Last name is required")
    private String lastName;

    @NotBlank(message = "Document type is required")
    @Pattern(regexp = "^(RUT|DNI|NIE|PASAPORTE|CI|LE|LC|CEDULA|CPF|RG)$",
            flags = Pattern.Flag.CASE_INSENSITIVE,
            message = "Document type must be RUT, DNI, NIE, PASAPORTE, CI, LE, LC, CEDULA, CPF or RG")
    private String documentType;
    private String documentNumber;
    private LocalDate birthDate;

    @Pattern(regexp = "^\\+56\\d{9}$", message = "Phone must be in the format +569XXXXXXXX")
    @NotBlank(message = "Phone is required")
    private String phone;

    @Email(message = "Invalid email format")
    @NotBlank(message = "Email is required")
    private String email;

    @NotBlank(message = "Password is required")
    @Size(min = 6, message = "Password must be at least 6 characters long")
    private String passwordHash;
}