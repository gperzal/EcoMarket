package com.ecomarket.backend.features.subcatalog.service;

import com.ecomarket.backend.features.subcatalog.dto.SubcatalogDTO;
import com.ecomarket.backend.features.subcatalog.dto.SubcatalogRequestDTO;

import java.util.List;

public interface SubcatalogService {
    List<SubcatalogDTO> findAll();
    SubcatalogDTO findById(Long id);
    SubcatalogDTO save(SubcatalogRequestDTO subcatalogDTO);
    SubcatalogDTO update(Long id, SubcatalogRequestDTO subcatalogDTO);
    void deleteById(Long id);
    List<SubcatalogDTO> findAllByCatalogId(Long catalogId);
    List<SubcatalogDTO> findAllByStatusId(Integer statusId);
    List<SubcatalogDTO> findAllByCatalogIdAndStatusId(Long catalogId, Integer statusId);
}