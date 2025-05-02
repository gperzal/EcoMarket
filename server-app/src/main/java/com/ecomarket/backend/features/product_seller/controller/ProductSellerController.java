package com.ecomarket.backend.features.product_seller.controller;

import com.ecomarket.backend.features.product_seller.dto.ProductSellerDTO;
import com.ecomarket.backend.features.product_seller.service.ProductSellerService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/seller/products")
@RequiredArgsConstructor
public class ProductSellerController {

    private final ProductSellerService productSellerService;

    @GetMapping
    public List<ProductSellerDTO> getMyProducts(@AuthenticationPrincipal UserDetails user) {
        return productSellerService.getMyProducts(user.getUsername());
    }

    @PostMapping
    public ProductSellerDTO createProduct(@AuthenticationPrincipal UserDetails user,
                                          @RequestBody ProductSellerDTO dto) {
        return productSellerService.createProduct(user.getUsername(), dto);
    }

    @PutMapping("/{id}")
    public ProductSellerDTO updateProduct(@AuthenticationPrincipal UserDetails user,
                                          @PathVariable Long id,
                                          @RequestBody ProductSellerDTO dto) {
        return productSellerService.updateProduct(user.getUsername(), id, dto);
    }

    @DeleteMapping("/{id}")
    public void deleteProduct(@AuthenticationPrincipal UserDetails user, @PathVariable Long id) {
        productSellerService.deleteProduct(user.getUsername(), id);
    }
}