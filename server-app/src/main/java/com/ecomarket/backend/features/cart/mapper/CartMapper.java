package com.ecomarket.backend.features.cart.mapper;

import com.ecomarket.backend.features.cart.dto.CartDTO;
import com.ecomarket.backend.features.cart.dto.CartItemDTO;
import com.ecomarket.backend.features.cart.model.Cart;
import com.ecomarket.backend.features.cart.model.CartItem;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor
public class CartMapper {

    public CartDTO toDto(Cart cart) {
        if (cart == null) return null;

        List<CartItemDTO> itemDTOs = cart.getItems().stream().map(this::toItemDto).collect(Collectors.toList());

        return CartDTO.builder()
                .id(cart.getId())
                .userId(cart.getUser().getId())
                .lastUpdated(cart.getLastUpdated())
                .items(itemDTOs)
                .build();
    }

    public CartItemDTO toItemDto(CartItem item) {
        return CartItemDTO.builder()
                .productId(item.getProduct().getId())
                .productName(item.getProduct().getName())
                .price(item.getProduct().getPrice())
                .quantity(item.getQuantity())
                .image(item.getProduct().getMainImage())
                .build();
    }
}
