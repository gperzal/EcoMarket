package com.ecomarket.backend.features.product.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProductListDTO {
    private Long id;
    private String name;
    private String description;
    private Integer price;
    private Integer originalPrice;
    private Double rating;
    private Integer reviews;
    private String image;
    private Boolean freeShipping;
    private Integer stock;
    private String seller;
    private String category;
    private String subcategory;
}