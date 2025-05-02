package com.ecomarket.backend.features.cart.service;

import com.ecomarket.backend.features.cart.dto.CartDTO;

public interface CartService {
    CartDTO getCart(Long userId);
    CartDTO addToCart(Long userId, Long productId, int quantity);
    CartDTO removeFromCart(Long userId, Long productId);
    CartDTO updateItemQuantity(Long userId, Long productId, int quantity);
    void clearCart(Long userId);
}
