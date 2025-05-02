package com.ecomarket.backend.features.subcatalog.mapper;

import com.ecomarket.backend.features.catalog.model.Catalog;
import com.ecomarket.backend.features.subcatalog.dto.SubcatalogDTO;
import com.ecomarket.backend.features.subcatalog.dto.SubcatalogRequestDTO;
import com.ecomarket.backend.features.subcatalog.model.Subcatalog;

public class SubcatalogMapper {

    public static SubcatalogDTO toDTO(Subcatalog entity) {
        return new SubcatalogDTO(
                entity.getId(),
                entity.getName(),
                entity.getDescription(),
                entity.getShortDescription(),
                entity.getImageUrl(),
                entity.getCatalog().getId(),
                entity.getCatalog().getName(),
                entity.getCreatedAt(),
                entity.getUpdatedAt(),
                entity.getStatusId(),
                entity.getPrice()
        );
    }

    public static Subcatalog toEntity(SubcatalogRequestDTO dto, Catalog catalog) {
        return Subcatalog.builder()
                .name(dto.name())
                .description(dto.description())
                .shortDescription(dto.shortDescription())
                .imageUrl(dto.imageUrl())
                .catalog(catalog)
                .statusId(dto.statusId())
                .price(dto.price())
                .build();
    }

    public static void updateEntityFromDTO(Subcatalog entity, SubcatalogRequestDTO dto, Catalog catalog) {
        entity.setName(dto.name());
        entity.setDescription(dto.description());
        entity.setShortDescription(dto.shortDescription());
        entity.setImageUrl(dto.imageUrl());
        entity.setCatalog(catalog);
        entity.setStatusId(dto.statusId());
        entity.setPrice(dto.price());
    }
}