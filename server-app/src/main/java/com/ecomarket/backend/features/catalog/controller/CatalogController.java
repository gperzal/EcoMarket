package com.ecomarket.backend.features.catalog.controller;

import com.ecomarket.backend.features.catalog.dto.CatalogDTO;
import com.ecomarket.backend.features.catalog.dto.CatalogRequestDTO;
import com.ecomarket.backend.features.catalog.service.CatalogService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/catalogs")
@RequiredArgsConstructor
public class CatalogController {

    private final CatalogService catalogService;

    @GetMapping
    public ResponseEntity<List<CatalogDTO>> findAll() {
        return ResponseEntity.ok(catalogService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<CatalogDTO> findById(@PathVariable Long id) {
        return ResponseEntity.ok(catalogService.findById(id));
    }

    @PostMapping
    public ResponseEntity<CatalogDTO> create(@RequestBody CatalogRequestDTO dto) {
        CatalogDTO created = catalogService.save(dto);
        return new ResponseEntity<>(created, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<CatalogDTO> update(@PathVariable Long id, @RequestBody CatalogRequestDTO dto) {
        return ResponseEntity.ok(catalogService.update(id, dto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        catalogService.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/status/{statusId}")
    public ResponseEntity<List<CatalogDTO>> findAllByStatusId(@PathVariable Integer statusId) {
        return ResponseEntity.ok(catalogService.findAllByStatusId(statusId));
    }

    @GetMapping("/{id}/subcatalogs")
    public ResponseEntity<CatalogDTO> findWithSubcatalogs(@PathVariable Long id) {
        return ResponseEntity.ok(catalogService.findCatalogWithSubcatalogs(id));
    }
}
