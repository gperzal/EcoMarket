package com.ecomarket.backend.features.user.service;

import com.ecomarket.backend.exception.ApiException;
import com.ecomarket.backend.features.user.dto.UserDTO;
import com.ecomarket.backend.features.user.mapper.UserMapper;
import com.ecomarket.backend.features.user.model.User;
import com.ecomarket.backend.features.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository repository;

    @Override
    public List<UserDTO> findAll() {
        return repository.findAll().stream()
                .map(UserMapper::toDTO)
                .toList();
    }

    @Override
    public UserDTO findById(Long id) {
        return repository.findById(id)
                .map(UserMapper::toDTO)
                .orElseThrow(() -> new ApiException("User not found with id: " + id));
    }

    @Override
    public UserDTO save(UserDTO dto) {
        User entity = UserMapper.toEntity(dto);
        return UserMapper.toDTO(repository.save(entity));
    }

    @Override
    public UserDTO update(Long id, UserDTO dto) {
        User user = repository.findById(id)
                .orElseThrow(() -> new ApiException("User not found with id: " + id));

        user.setFirstName(dto.firstName());
        user.setLastName(dto.lastName());
        user.setPhone(dto.phone());
        user.setDocumentType(dto.documentType());
        user.setDocumentNumber(dto.documentNumber());
        user.setBirthDate(dto.birthDate());
        user.setStatusId(dto.statusId());

        return UserMapper.toDTO(repository.save(user));
    }

    @Override
    public void deleteById(Long id) {
        repository.deleteById(id);
    }

    @Override
    public UserDTO findByEmail(String email) {
        return repository.findByEmail(email)
                .map(UserMapper::toDTO)
                .orElseThrow(() -> new ApiException("User not found with email: " + email));
    }
}
