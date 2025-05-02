package com.ecomarket.backend.features.user_role.service;

import com.ecomarket.backend.exception.NotFoundException;
import com.ecomarket.backend.features.user_role.dto.UserRoleDTO;
import com.ecomarket.backend.features.user_role.mapper.UserRoleMapper;
import com.ecomarket.backend.features.user_role.model.UserRole;
import com.ecomarket.backend.features.user_role.repository.UserRoleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserRoleServiceImpl implements UserRoleService {

    private final UserRoleRepository repository;

    @Override
    public List<UserRoleDTO> findAll() {
        return repository.findAll().stream().map(UserRoleMapper::toDTO).toList();
    }

    @Override
    public UserRoleDTO findById(Long id) {
        return repository.findById(id)
                .map(UserRoleMapper::toDTO)
                .orElseThrow(() -> new NotFoundException("User role assignment not found with id: " + id));
    }

    @Override
    public UserRoleDTO save(UserRoleDTO dto) {
        UserRole userRole = UserRoleMapper.toEntity(dto);
        return UserRoleMapper.toDTO(repository.save(userRole));
    }

    @Override
    public UserRoleDTO update(Long id, UserRoleDTO dto) {
        UserRole entity = repository.findById(id)
                .orElseThrow(() -> new NotFoundException("User role assignment not found with id: " + id));

        entity.setRoleId(dto.roleId());
        entity.setUserId(dto.userId());
        return UserRoleMapper.toDTO(repository.save(entity));
    }

    @Override
    public void deleteById(Long id) {
        repository.deleteById(id);
    }
}
