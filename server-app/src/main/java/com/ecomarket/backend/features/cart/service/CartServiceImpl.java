package com.ecomarket.backend.features.cart.service;

import com.ecomarket.backend.features.cart.dto.CartDTO;
import com.ecomarket.backend.features.cart.mapper.CartMapper;
import com.ecomarket.backend.features.cart.model.Cart;
import com.ecomarket.backend.features.cart.model.CartItem;
import com.ecomarket.backend.features.cart.repository.CartRepository;
import com.ecomarket.backend.features.product.model.Product;
import com.ecomarket.backend.features.product.repository.ProductRepository;
import com.ecomarket.backend.features.user.model.User;
import com.ecomarket.backend.features.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CartServiceImpl implements CartService {

    private final CartRepository cartRepository;
    private final ProductRepository productRepository;
    private final UserRepository userRepository;
    private final CartMapper cartMapper;

    @Override
    public CartDTO getCart(Long userId) {
        return cartMapper.toDto(findOrCreateCart(userId));
    }

    @Override
    public CartDTO addToCart(Long userId, Long productId, int quantity) {
        Cart cart = findOrCreateCart(userId);

        Optional<CartItem> existingItem = cart.getItems()
                .stream()
                .filter(item -> item.getProduct().getId().equals(productId))
                .findFirst();

        if (existingItem.isPresent()) {
            existingItem.get().setQuantity(existingItem.get().getQuantity() + quantity);
        } else {
            Product product = productRepository.findById(productId)
                    .orElseThrow(() -> new RuntimeException("Producto no encontrado"));

            CartItem newItem = CartItem.builder()
                    .cart(cart)
                    .product(product)
                    .quantity(quantity)
                    .build();

            cart.getItems().add(newItem);
        }

        cart.setLastUpdated(LocalDateTime.now());
        cartRepository.save(cart);

        return cartMapper.toDto(cart);
    }

    @Override
    public CartDTO updateItemQuantity(Long userId, Long productId, int quantity) {
        Cart cart = cartRepository.findByUserId(userId)
                .orElseThrow(() -> new RuntimeException("Carrito no encontrado"));

        CartItem item = cart.getItems().stream()
                .filter(i -> i.getProduct().getId().equals(productId))
                .findFirst()
                .orElseThrow(() -> new RuntimeException("Producto no está en el carrito"));

        item.setQuantity(quantity);
        cart.setLastUpdated(LocalDateTime.now());

        cartRepository.save(cart);
        return cartMapper.toDto(cart);
    }


    @Override
    public CartDTO removeFromCart(Long userId, Long productId) {
        Cart cart = findOrCreateCart(userId);

        cart.getItems().removeIf(i -> i.getProduct().getId().equals(productId));
        cart.setLastUpdated(LocalDateTime.now());

        cartRepository.save(cart);
        return cartMapper.toDto(cart);
    }

    @Override
    public void clearCart(Long userId) {
        Cart cart = findOrCreateCart(userId);

        cart.getItems().clear();
        cart.setLastUpdated(LocalDateTime.now());

        cartRepository.save(cart);
    }

    // 🔁 Reutilizado por todos los métodos públicos
    private Cart findOrCreateCart(Long userId) {
        return cartRepository.findByUserId(userId).orElseGet(() -> {
            User user = userRepository.findById(userId)
                    .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

            Cart newCart = new Cart();
            newCart.setUser(user);
            newCart.setLastUpdated(LocalDateTime.now());
            return cartRepository.save(newCart);
        });
    }
}
