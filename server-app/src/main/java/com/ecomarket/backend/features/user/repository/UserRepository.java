package com.ecomarket.backend.features.user.repository;

import com.ecomarket.backend.features.user.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    boolean existsByEmail(String email);
    Optional<User> findByEmail(String email);

    @Query("SELECT u FROM User u JOIN FETCH u.userRoles WHERE u.id = :id")
    Optional<User> findUserWithRoles(@Param("id") Long id);
}
