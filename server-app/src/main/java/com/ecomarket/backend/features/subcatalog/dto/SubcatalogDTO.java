package com.ecomarket.backend.features.subcatalog.dto;

import java.time.LocalDateTime;

public record SubcatalogDTO(
        Long id,
        String name,
        String description,
        String shortDescription,
        String imageUrl,
        Long catalogId,
        String catalogName,
        LocalDateTime createdAt,
        LocalDateTime updatedAt,
        Integer statusId,
        Double price
) {}