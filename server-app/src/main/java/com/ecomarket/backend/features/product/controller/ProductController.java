package com.ecomarket.backend.features.product.controller;

import com.ecomarket.backend.features.product.dto.ProductDetailDTO;
import com.ecomarket.backend.features.product.dto.ProductListDTO;
import com.ecomarket.backend.features.product.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@RequiredArgsConstructor
public class ProductController {

    private final ProductService productService;

    @GetMapping
    public List<ProductListDTO> getCatalog(
            @RequestParam(required = false) String category,
            @RequestParam(required = false) List<String> subcategory,
            @RequestParam(required = false) String search,
            @RequestParam(required = false) Integer minPrice,
            @RequestParam(required = false) Integer maxPrice,
            @RequestParam(required = false) Boolean freeShipping,
            @RequestParam(required = false) String sortBy,
            @RequestParam(defaultValue = "0") int page
    ) {
        return productService.getProducts(category, subcategory, search, minPrice, maxPrice, freeShipping, sortBy, page);
    }


    @GetMapping("/{id}")
    public ProductDetailDTO getProductDetail(@PathVariable Long id) {
        return productService.getProductDetail(id);
    }

    @GetMapping("/{id}/similar")
    public List<ProductListDTO> getSimilarProducts(@PathVariable Long id) {
        return productService.getSimilarProducts(id);
    }
}