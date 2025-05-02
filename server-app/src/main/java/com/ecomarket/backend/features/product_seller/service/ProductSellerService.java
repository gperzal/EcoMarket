package com.ecomarket.backend.features.product_seller.service;

import com.ecomarket.backend.features.product_seller.dto.ProductSellerDTO;

import java.util.List;

public interface ProductSellerService {
    List<ProductSellerDTO> getMyProducts(String email);
    ProductSellerDTO createProduct(String email, ProductSellerDTO dto);
    ProductSellerDTO updateProduct(String email, Long id, ProductSellerDTO dto);
    void deleteProduct(String email, Long id);
}