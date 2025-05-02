package com.ecomarket.backend.features.product_seller.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProductSellerDTO {
    private Long id;
    private String name;
    private String description;
    private Integer price;
    private Integer originalPrice;
    private List<String> images;
    private Boolean freeShipping;
    private Integer stock;
    private String category;
    private String subcategory;
    private List<String> features;
    private List<String> colors;
    private String warranty;
}