package com.ecomarket.backend.features.subcatalog.repository;

import com.ecomarket.backend.features.subcatalog.model.Subcatalog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface SubcatalogRepository extends JpaRepository<Subcatalog, Long> {

    @Query("SELECT s FROM Subcatalog s WHERE s.catalog.id = :catalogId")
    List<Subcatalog> findAllByCatalogId(@Param("catalogId") Long catalogId);

    @Query("SELECT s FROM Subcatalog s WHERE s.statusId = :statusId")
    List<Subcatalog> findAllByStatusId(@Param("statusId") Integer statusId);

    @Query("SELECT s FROM Subcatalog s WHERE s.catalog.id = :catalogId AND s.statusId = :statusId")
    List<Subcatalog> findAllByCatalogIdAndStatusId(
            @Param("catalogId") Long catalogId,
            @Param("statusId") Integer statusId);

    boolean existsByNameAndCatalogId(String name, Long catalogId);
}