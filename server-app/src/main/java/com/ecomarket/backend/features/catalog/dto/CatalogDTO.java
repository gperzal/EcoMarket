package com.ecomarket.backend.features.catalog.dto;

import java.time.LocalDateTime;
import java.util.List;

public record CatalogDTO(
        Long id,
        String name,
        String description,
        String imageUrl,
        LocalDateTime createdAt,
        LocalDateTime updatedAt,
        Integer statusId,
        List<Long> subcatalogIds
) {}