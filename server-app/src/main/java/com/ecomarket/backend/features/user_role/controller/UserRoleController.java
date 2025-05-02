package com.ecomarket.backend.features.user_role.controller;

import com.ecomarket.backend.features.user_role.dto.UserRoleDTO;
import com.ecomarket.backend.features.user_role.service.UserRoleService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user-roles")
@RequiredArgsConstructor
public class UserRoleController {

    private final UserRoleService userRoleService;

    @GetMapping
    public ResponseEntity<List<UserRoleDTO>> getAll() {
        return ResponseEntity.ok(userRoleService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserRoleDTO> getById(@PathVariable Long id) {
        return ResponseEntity.ok(userRoleService.findById(id));
    }

    @PostMapping
    public ResponseEntity<UserRoleDTO> create(@RequestBody UserRoleDTO dto) {
        return ResponseEntity.ok(userRoleService.save(dto));
    }

    @PutMapping("/{id}")
    public ResponseEntity<UserRoleDTO> update(@PathVariable Long id, @RequestBody UserRoleDTO dto) {
        return ResponseEntity.ok(userRoleService.update(id, dto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        userRoleService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
