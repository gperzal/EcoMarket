package com.ecomarket.backend.features.catalog.dto;

public record CatalogRequestDTO(
        String name,
        String description,
        String imageUrl,
        Integer statusId
) {}