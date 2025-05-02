package com.ecomarket.backend.security.service;

import com.ecomarket.backend.exception.ApiException;
import com.ecomarket.backend.security.dto.LoginRequest;
import com.ecomarket.backend.security.dto.LoginResponse;
import com.ecomarket.backend.security.dto.RegisterRequest;
import com.ecomarket.backend.security.jwt.JwtUtil;
import com.ecomarket.backend.features.user.model.User;
import com.ecomarket.backend.features.user.repository.UserRepository;
import com.ecomarket.backend.features.user_role.model.UserRole;
import com.ecomarket.backend.features.user_role.repository.UserRoleRepository;
import static com.ecomarket.backend.features.role.shared.RoleUtils.getRoleName;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@RequiredArgsConstructor
@Service
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;
    private final CustomUserDetailsService userDetailsService;
    private final UserRoleRepository userRoleRepository;

    public void register(RegisterRequest request) {
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new ApiException("Email is already in use");
        }

        User user = User.builder()
                .email(request.getEmail())
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .documentType(request.getDocumentType())
                .documentNumber(request.getDocumentNumber())
                .birthDate(request.getBirthDate())
                .phone(request.getPhone())
                .passwordHash(passwordEncoder.encode(request.getPasswordHash()))
                .build();

        User savedUser = userRepository.save(user);

        UserRole userRole = UserRole.builder()
                .userId(savedUser.getId())
                .roleId(3L) // Default role: CLIENT
                .registeredAt(LocalDateTime.now())
                .build();

        userRoleRepository.save(userRole);
    }

    public LoginResponse login(LoginRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );

        UserDetails userDetails = userDetailsService.loadUserByUsername(request.getEmail());
        String jwt = jwtUtil.generateToken(userDetails);

        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new ApiException("Email does not exist"));

        List<String> roles = user.getUserRoles().stream()
                .map(userRole -> getRoleName(userRole.getRoleId()))
                .toList();

        return LoginResponse.builder()
                .token(jwt)
                .email(user.getEmail())
                .roles(roles)
                .firstName(user.getFirstName())
                .lastName(user.getLastName())
                .build();
    }

}