package com.ecomarket.backend.features.catalog.service;

import com.ecomarket.backend.exception.ApiException;
import com.ecomarket.backend.features.catalog.dto.CatalogDTO;
import com.ecomarket.backend.features.catalog.dto.CatalogRequestDTO;
import com.ecomarket.backend.features.catalog.mapper.CatalogMapper;
import com.ecomarket.backend.features.catalog.model.Catalog;
import com.ecomarket.backend.features.catalog.repository.CatalogRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CatalogServiceImpl implements CatalogService {

    private final CatalogRepository repository;

    @Override
    @Transactional(readOnly = true)
    public List<CatalogDTO> findAll() {
        return repository.findAll().stream()
                .map(CatalogMapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public CatalogDTO findById(Long id) {
        return repository.findById(id)
                .map(CatalogMapper::toDTO)
                .orElseThrow(() -> new ApiException("Catalog not found with id: " + id));
    }

    @Override
    @Transactional
    public CatalogDTO save(CatalogRequestDTO dto) {
        if (repository.existsByName(dto.name())) {
            throw new ApiException("Catalog with name " + dto.name() + " already exists");
        }

        Catalog catalog = CatalogMapper.toEntity(dto);
        Catalog savedCatalog = repository.save(catalog);

        return CatalogMapper.toDTO(savedCatalog);
    }

    @Override
    @Transactional
    public CatalogDTO update(Long id, CatalogRequestDTO dto) {
        Catalog catalog = repository.findById(id)
                .orElseThrow(() -> new ApiException("Catalog not found with id: " + id));

        // Check if name already exists and it's not the same catalog
        if (!catalog.getName().equals(dto.name()) && repository.existsByName(dto.name())) {
            throw new ApiException("Catalog with name " + dto.name() + " already exists");
        }

        CatalogMapper.updateEntityFromDTO(catalog, dto);
        Catalog updatedCatalog = repository.save(catalog);

        return CatalogMapper.toDTO(updatedCatalog);
    }

    @Override
    @Transactional
    public void deleteById(Long id) {
        if (!repository.existsById(id)) {
            throw new ApiException("Catalog not found with id: " + id);
        }
        repository.deleteById(id);
    }

    @Override
    @Transactional(readOnly = true)
    public List<CatalogDTO> findAllByStatusId(Integer statusId) {
        return repository.findAllByStatusId(statusId).stream()
                .map(CatalogMapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public CatalogDTO findCatalogWithSubcatalogs(Long id) {
        return repository.findCatalogWithSubcatalogs(id)
                .map(CatalogMapper::toDTO)
                .orElseThrow(() -> new ApiException("Catalog not found with id: " + id));
    }
}