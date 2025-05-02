package com.ecomarket.backend.features.subcatalog.controller;

import com.ecomarket.backend.features.subcatalog.dto.SubcatalogDTO;
import com.ecomarket.backend.features.subcatalog.dto.SubcatalogRequestDTO;
import com.ecomarket.backend.features.subcatalog.service.SubcatalogService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/subcatalogs")
@RequiredArgsConstructor
public class SubcatalogController {

    private final SubcatalogService subcatalogService;

    @GetMapping
    public ResponseEntity<List<SubcatalogDTO>> findAll() {
        return ResponseEntity.ok(subcatalogService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<SubcatalogDTO> findById(@PathVariable Long id) {
        return ResponseEntity.ok(subcatalogService.findById(id));
    }

    @PostMapping
    public ResponseEntity<SubcatalogDTO> create(@RequestBody SubcatalogRequestDTO dto) {
        SubcatalogDTO created = subcatalogService.save(dto);
        return new ResponseEntity<>(created, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<SubcatalogDTO> update(@PathVariable Long id, @RequestBody SubcatalogRequestDTO dto) {
        return ResponseEntity.ok(subcatalogService.update(id, dto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        subcatalogService.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/catalog/{catalogId}")
    public ResponseEntity<List<SubcatalogDTO>> findByCatalogId(@PathVariable Long catalogId) {
        return ResponseEntity.ok(subcatalogService.findAllByCatalogId(catalogId));
    }

    @GetMapping("/status/{statusId}")
    public ResponseEntity<List<SubcatalogDTO>> findByStatusId(@PathVariable Integer statusId) {
        return ResponseEntity.ok(subcatalogService.findAllByStatusId(statusId));
    }

    @GetMapping("/catalog/{catalogId}/status/{statusId}")
    public ResponseEntity<List<SubcatalogDTO>> findByCatalogIdAndStatusId(@PathVariable Long catalogId, @PathVariable Integer statusId) {
        return ResponseEntity.ok(subcatalogService.findAllByCatalogIdAndStatusId(catalogId, statusId));
    }
}
