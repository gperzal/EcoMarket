package com.ecomarket.backend.features.catalog.mapper;

import com.ecomarket.backend.features.catalog.dto.CatalogDTO;
import com.ecomarket.backend.features.catalog.dto.CatalogRequestDTO;
import com.ecomarket.backend.features.catalog.model.Catalog;
import com.ecomarket.backend.features.subcatalog.model.Subcatalog;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

public class CatalogMapper {

    public static CatalogDTO toDTO(Catalog entity) {
        List<Long> subcatalogIds = entity.getSubcatalogs() != null
                ? entity.getSubcatalogs().stream()
                .map(Subcatalog::getId)
                .collect(Collectors.toList())
                : Collections.emptyList();

        return new CatalogDTO(
                entity.getId(),
                entity.getName(),
                entity.getDescription(),
                entity.getImageUrl(),
                entity.getCreatedAt(),
                entity.getUpdatedAt(),
                entity.getStatusId(),
                subcatalogIds
        );
    }

    public static Catalog toEntity(CatalogRequestDTO dto) {
        return Catalog.builder()
                .name(dto.name())
                .description(dto.description())
                .imageUrl(dto.imageUrl())
                .statusId(dto.statusId())
                .build();
    }

    public static void updateEntityFromDTO(Catalog entity, CatalogRequestDTO dto) {
        entity.setName(dto.name());
        entity.setDescription(dto.description());
        entity.setImageUrl(dto.imageUrl());
        entity.setStatusId(dto.statusId());
    }
}