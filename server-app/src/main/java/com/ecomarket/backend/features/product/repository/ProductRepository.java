package com.ecomarket.backend.features.product.repository;

import com.ecomarket.backend.features.product.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {

    List<Product> findByCategoryContainingIgnoreCaseAndNameContainingIgnoreCase(String category, String name);
    List<Product> findTop4ByCategoryAndIdNot(String category, Long id);

}