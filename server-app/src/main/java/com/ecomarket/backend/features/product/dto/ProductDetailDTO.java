package com.ecomarket.backend.features.product.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.Map;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProductDetailDTO {
    private Long id;
    private String name;
    private String description;
    private Integer price;
    private Integer originalPrice;
    private Double rating;
    private Integer reviews;
    private List<String> images;
    private Boolean freeShipping;
    private Integer stock;
    private SellerDTO seller;
    private String category;
    private String subcategory;
    private List<String> features;
    private Map<String, String> specifications;
    private List<String> colors;
    private String warranty;

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class SellerDTO {
        private String name;
        private double rating;
        private int sales;
    }
}