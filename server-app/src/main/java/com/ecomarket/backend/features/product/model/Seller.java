package com.ecomarket.backend.features.product.model;

import jakarta.persistence.Embeddable;

@Embeddable
public class Seller {
    private String name;
    private double rating;
    private int sales;
}