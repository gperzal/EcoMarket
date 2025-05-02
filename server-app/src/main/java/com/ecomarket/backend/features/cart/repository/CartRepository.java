package com.ecomarket.backend.features.cart.repository;

import com.ecomarket.backend.features.cart.model.Cart;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CartRepository extends JpaRepository<Cart, Long> {
    Optional<Cart> findByUserId(Long userId);

}
