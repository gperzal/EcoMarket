package com.ecomarket.backend.features.subcatalog.dto;

public record SubcatalogRequestDTO(
        String name,
        String description,
        String imageUrl,
        Long catalogId,
        Integer statusId,
        String shortDescription,
        Double price
) {}