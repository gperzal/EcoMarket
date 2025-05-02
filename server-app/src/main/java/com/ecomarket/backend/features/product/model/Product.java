package com.ecomarket.backend.features.product.model;

import com.ecomarket.backend.features.user.model.User;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String description;
    private Integer price;
    private Integer originalPrice;
    private Double rating;
    private Integer reviews;
    private Boolean freeShipping;
    private Integer stock;

    @ElementCollection
    private List<String> images;

    @ManyToOne
    @JoinColumn(name = "seller_id")
    private User seller;

    private String category;
    private String subcategory;

    @ElementCollection
    private List<String> features;

    @Embedded
    private Specifications specifications;

    @ElementCollection
    private List<String> colors;

    private String warranty;
}