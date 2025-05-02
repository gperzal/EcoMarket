package com.ecomarket.backend.features.product.service;

import com.ecomarket.backend.exception.NotFoundException;
import com.ecomarket.backend.features.product.dto.ProductDetailDTO;
import com.ecomarket.backend.features.product.dto.ProductListDTO;
import com.ecomarket.backend.features.product.mapper.ProductMapper;
import com.ecomarket.backend.features.product.model.Product;
import com.ecomarket.backend.features.product.repository.ProductRepository;
import com.ecomarket.backend.features.product.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;
    private final ProductMapper productMapper;

    @Override
    public List<ProductListDTO> getProducts(
            String category,
            List<String> subcategories,
            String search,
            Integer minPrice,
            Integer maxPrice,
            Boolean freeShipping,
            String sortBy,
            int page
    ) {
        List<Product> baseList = productRepository.findAll();

        return baseList.stream()
                .filter(p -> category == null || p.getCategory().equalsIgnoreCase(category))
                .filter(p -> subcategories == null || subcategories.isEmpty() || subcategories.contains(p.getSubcategory()))
                .filter(p -> search == null || p.getName().toLowerCase().contains(search.toLowerCase()))
                .filter(p -> subcategories == null || subcategories.isEmpty() || subcategories.contains(p.getSubcategory()))
                .filter(p -> minPrice == null || p.getPrice() >= minPrice)
                .filter(p -> maxPrice == null || p.getPrice() <= maxPrice)
                .filter(p -> freeShipping == null || p.getFreeShipping().equals(freeShipping))
                .sorted((a, b) -> {
                    if (sortBy == null) return 0;
                    return switch (sortBy) {
                        case "price_asc" -> a.getPrice() - b.getPrice();
                        case "price_desc" -> b.getPrice() - a.getPrice();
                        case "rating" -> Double.compare(b.getRating() != null ? b.getRating() : 0, a.getRating() != null ? a.getRating() : 0);
                        case "newest" -> b.getId().compareTo(a.getId());
                        default -> 0;
                    };
                })
                .map(productMapper::toListDTO)
                .toList();
    }


    @Override
    public ProductDetailDTO getProductDetail(Long id) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Producto no encontrado con id: " + id));
        return productMapper.toDetailDTO(product);
    }

    @Override
    public List<ProductListDTO> getSimilarProducts(Long id) {
        Product base = productRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Producto base no encontrado con id: " + id));

        return productRepository
                .findTop4ByCategoryAndIdNot(base.getCategory(), base.getId())
                .stream()
                .map(productMapper::toListDTO)
                .toList();
    }
}