package com.ecomarket.backend.features.catalog.service;

import com.ecomarket.backend.features.catalog.dto.CatalogDTO;
import com.ecomarket.backend.features.catalog.dto.CatalogRequestDTO;

import java.util.List;

public interface CatalogService {
    List<CatalogDTO> findAll();
    CatalogDTO findById(Long id);
    CatalogDTO save(CatalogRequestDTO catalogDTO);
    CatalogDTO update(Long id, CatalogRequestDTO catalogDTO);
    void deleteById(Long id);
    List<CatalogDTO> findAllByStatusId(Integer statusId);
    CatalogDTO findCatalogWithSubcatalogs(Long id);
}