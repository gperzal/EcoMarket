package com.ecomarket.backend.features.product.service;

import com.ecomarket.backend.features.product.dto.ProductDetailDTO;
import com.ecomarket.backend.features.product.dto.ProductListDTO;

import java.util.List;

public interface ProductService {
    List<ProductListDTO> getProducts(
            String category,
            List<String> subcategory,
            String search,
            Integer minPrice,
            Integer maxPrice,
            Boolean freeShipping,
            String sortBy,
            int page
    );

    ProductDetailDTO getProductDetail(Long id);
    List<ProductListDTO> getSimilarProducts(Long id);
}