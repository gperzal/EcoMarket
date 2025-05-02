package com.ecomarket.backend.features.product.mapper;

import com.ecomarket.backend.features.product.dto.ProductDetailDTO;
import com.ecomarket.backend.features.product.dto.ProductListDTO;
import com.ecomarket.backend.features.product.model.Product;
import org.springframework.stereotype.Component;

import java.util.Map;

@Component
public class ProductMapper {

    public ProductListDTO toListDTO(Product product) {
        return ProductListDTO.builder()
                .id(product.getId())
                .name(product.getName())
                .description(product.getDescription())
                .price(product.getPrice())
                .originalPrice(product.getOriginalPrice())
                .rating(product.getRating())
                .reviews(product.getReviews())
                .image(product.getImages() != null && !product.getImages().isEmpty() ? product.getImages().get(0) : null)
                .freeShipping(product.getFreeShipping())
                .stock(product.getStock())
                .seller(product.getSeller().getFirstName() + " " + product.getSeller().getLastName())
                .category(product.getCategory())
                .subcategory(product.getSubcategory())
                .build();
    }

    public ProductDetailDTO toDetailDTO(Product product) {
        return ProductDetailDTO.builder()
                .id(product.getId())
                .name(product.getName())
                .description(product.getDescription())
                .price(product.getPrice())
                .originalPrice(product.getOriginalPrice())
                .rating(product.getRating())
                .reviews(product.getReviews())
                .images(product.getImages())
                .freeShipping(product.getFreeShipping())
                .stock(product.getStock())
                .seller(ProductDetailDTO.SellerDTO.builder()
                        .name(product.getSeller().getFirstName() + " " + product.getSeller().getLastName())
                        .rating(4.9)
                        .sales(1245)
                        .build())
                .category(product.getCategory())
                .subcategory(product.getSubcategory())
                .features(product.getFeatures())
                .specifications(
                        product.getSpecifications() != null
                                ? product.getSpecifications().toMap()
                                : Map.of()
                )
                .colors(product.getColors())
                .warranty(product.getWarranty())
                .build();
    }
}