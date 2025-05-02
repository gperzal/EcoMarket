package com.ecomarket.backend.features.product_seller.mapper;

import com.ecomarket.backend.features.product.model.Product;
import com.ecomarket.backend.features.product.model.Specifications;
import com.ecomarket.backend.features.product_seller.dto.ProductSellerDTO;
import org.springframework.stereotype.Component;

@Component
public class ProductSellerMapper {

    public ProductSellerDTO toDTO(Product p) {
        return ProductSellerDTO.builder()
                .id(p.getId())
                .name(p.getName())
                .description(p.getDescription())
                .price(p.getPrice())
                .originalPrice(p.getOriginalPrice())
                .images(p.getImages())
                .freeShipping(p.getFreeShipping())
                .stock(p.getStock())
                .category(p.getCategory())
                .subcategory(p.getSubcategory())
                .features(p.getFeatures())
                .colors(p.getColors())
                .warranty(p.getWarranty())
                .build();
    }

    public void updateEntity(Product p, ProductSellerDTO dto) {
        p.setName(dto.getName());
        p.setDescription(dto.getDescription());
        p.setPrice(dto.getPrice());
        p.setOriginalPrice(dto.getOriginalPrice());
        p.setImages(dto.getImages());
        p.setFreeShipping(dto.getFreeShipping());
        p.setStock(dto.getStock());
        p.setCategory(dto.getCategory());
        p.setSubcategory(dto.getSubcategory());
        p.setFeatures(dto.getFeatures());
        p.setColors(dto.getColors());
        p.setWarranty(dto.getWarranty());
        // specs pueden omitirse o gestionarse aparte
    }
}