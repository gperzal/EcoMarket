package com.ecomarket.backend.features.cart.controller;

import com.ecomarket.backend.features.cart.dto.CartDTO;
import com.ecomarket.backend.features.cart.dto.CartItemRequest;
import com.ecomarket.backend.features.cart.service.CartService;
import com.ecomarket.backend.security.model.CustomUserDetails;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
@RestController
@RequestMapping("/api/cart")
@RequiredArgsConstructor
public class CartController {

    private final CartService cartService;

    @GetMapping
    public ResponseEntity<CartDTO> getCart(@AuthenticationPrincipal CustomUserDetails userDetails) {
        return ResponseEntity.ok(cartService.getCart(userDetails.getUser().getId()));
    }

    @PostMapping("/add")
    public ResponseEntity<CartDTO> addToCart(
            @AuthenticationPrincipal CustomUserDetails userDetails,
            @RequestBody CartItemRequest request
    ) {
        return ResponseEntity.ok(cartService.addToCart(
                userDetails.getUser().getId(), request.productId(), request.quantity()
        ));
    }

    @PatchMapping("/update")
    public ResponseEntity<CartDTO> updateQuantity(
            @AuthenticationPrincipal CustomUserDetails userDetails,
            @RequestBody CartItemRequest request
    ) {
        return ResponseEntity.ok(cartService.updateItemQuantity(
                userDetails.getUser().getId(), request.productId(), request.quantity()
        ));
    }

    @PostMapping("/remove")
    public ResponseEntity<CartDTO> removeFromCart(
            @AuthenticationPrincipal CustomUserDetails userDetails,
            @RequestBody CartItemRequest request
    ) {
        return ResponseEntity.ok(cartService.removeFromCart(
                userDetails.getUser().getId(), request.productId()
        ));
    }

    @DeleteMapping
    public ResponseEntity<Void> clearCart(@AuthenticationPrincipal CustomUserDetails userDetails) {
        cartService.clearCart(userDetails.getUser().getId());
        return ResponseEntity.noContent().build();
    }
}
