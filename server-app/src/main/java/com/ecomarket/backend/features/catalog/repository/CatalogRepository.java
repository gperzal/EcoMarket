package com.ecomarket.backend.features.catalog.repository;

import com.ecomarket.backend.features.catalog.model.Catalog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface CatalogRepository extends JpaRepository<Catalog, Long> {

    @Query("SELECT c FROM Catalog c WHERE c.statusId = :statusId")
    List<Catalog> findAllByStatusId(@Param("statusId") Integer statusId);

    @Query("SELECT c FROM Catalog c JOIN FETCH c.subcatalogs WHERE c.id = :id")
    Optional<Catalog> findCatalogWithSubcatalogs(@Param("id") Long id);

    boolean existsByName(String name);
}