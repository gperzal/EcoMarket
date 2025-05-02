package com.ecomarket.backend.features.subcatalog.service;

import com.ecomarket.backend.exception.ApiException;
import com.ecomarket.backend.features.catalog.model.Catalog;
import com.ecomarket.backend.features.catalog.repository.CatalogRepository;
import com.ecomarket.backend.features.subcatalog.dto.SubcatalogDTO;
import com.ecomarket.backend.features.subcatalog.dto.SubcatalogRequestDTO;
import com.ecomarket.backend.features.subcatalog.mapper.SubcatalogMapper;
import com.ecomarket.backend.features.subcatalog.model.Subcatalog;
import com.ecomarket.backend.features.subcatalog.repository.SubcatalogRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class SubcatalogServiceImpl implements SubcatalogService {

    private final SubcatalogRepository repository;
    private final CatalogRepository catalogRepository;

    @Override
    @Transactional(readOnly = true)
    public List<SubcatalogDTO> findAll() {
        return repository.findAll().stream()
                .map(SubcatalogMapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public SubcatalogDTO findById(Long id) {
        return repository.findById(id)
                .map(SubcatalogMapper::toDTO)
                .orElseThrow(() -> new ApiException("Subcatalog not found with id: " + id));
    }

    @Override
    @Transactional
    public SubcatalogDTO save(SubcatalogRequestDTO dto) {
        Catalog catalog = catalogRepository.findById(dto.catalogId())
                .orElseThrow(() -> new ApiException("Catalog not found with id: " + dto.catalogId()));

        if (repository.existsByNameAndCatalogId(dto.name(), dto.catalogId())) {
            throw new ApiException("Subcatalog with name " + dto.name() +
                    " already exists in catalog with id: " + dto.catalogId());
        }

        Subcatalog subcatalog = SubcatalogMapper.toEntity(dto, catalog);
        Subcatalog savedSubcatalog = repository.save(subcatalog);

        return SubcatalogMapper.toDTO(savedSubcatalog);
    }

    @Override
    @Transactional
    public SubcatalogDTO update(Long id, SubcatalogRequestDTO dto) {
        Subcatalog subcatalog = repository.findById(id)
                .orElseThrow(() -> new ApiException("Subcatalog not found with id: " + id));

        Catalog catalog = catalogRepository.findById(dto.catalogId())
                .orElseThrow(() -> new ApiException("Catalog not found with id: " + dto.catalogId()));

        // Check if name already exists in the same catalog (if name or catalog changed)
        if ((!subcatalog.getName().equals(dto.name()) ||
                !subcatalog.getCatalog().getId().equals(dto.catalogId())) &&
                repository.existsByNameAndCatalogId(dto.name(), dto.catalogId())) {
            throw new ApiException("Subcatalog with name " + dto.name() +
                    " already exists in catalog with id: " + dto.catalogId());
        }

        SubcatalogMapper.updateEntityFromDTO(subcatalog, dto, catalog);
        Subcatalog updatedSubcatalog = repository.save(subcatalog);

        return SubcatalogMapper.toDTO(updatedSubcatalog);
    }

    @Override
    @Transactional
    public void deleteById(Long id) {
        if (!repository.existsById(id)) {
            throw new ApiException("Subcatalog not found with id: " + id);
        }
        repository.deleteById(id);
    }

    @Override
    @Transactional(readOnly = true)
    public List<SubcatalogDTO> findAllByCatalogId(Long catalogId) {
        return repository.findAllByCatalogId(catalogId).stream()
                .map(SubcatalogMapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public List<SubcatalogDTO> findAllByStatusId(Integer statusId) {
        return repository.findAllByStatusId(statusId).stream()
                .map(SubcatalogMapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public List<SubcatalogDTO> findAllByCatalogIdAndStatusId(Long catalogId, Integer statusId) {
        return repository.findAllByCatalogIdAndStatusId(catalogId, statusId).stream()
                .map(SubcatalogMapper::toDTO)
                .collect(Collectors.toList());
    }
}