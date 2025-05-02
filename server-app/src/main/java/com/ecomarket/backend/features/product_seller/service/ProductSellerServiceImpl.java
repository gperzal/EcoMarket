package com.ecomarket.backend.features.product_seller.service;

import com.ecomarket.backend.exception.NotFoundException;
import com.ecomarket.backend.features.product.model.Product;
import com.ecomarket.backend.features.product.repository.ProductRepository;
import com.ecomarket.backend.features.product_seller.dto.ProductSellerDTO;
import com.ecomarket.backend.features.product_seller.mapper.ProductSellerMapper;
import com.ecomarket.backend.features.product_seller.service.ProductSellerService;
import com.ecomarket.backend.features.user.model.User;
import com.ecomarket.backend.features.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductSellerServiceImpl implements ProductSellerService {

    private final ProductRepository productRepository;
    private final ProductSellerMapper mapper;
    private final UserRepository userRepository;

    @Override
    public List<ProductSellerDTO> getMyProducts(String email) {
        User seller = userRepository.findByEmail(email)
                .orElseThrow(() -> new NotFoundException("Vendedor no encontrado: " + email));

        return productRepository.findAll().stream()
                .filter(p -> p.getSeller().getId().equals(seller.getId()))
                .map(mapper::toDTO)
                .toList();
    }

    @Override
    public ProductSellerDTO createProduct(String email, ProductSellerDTO dto) {
        User seller = userRepository.findByEmail(email)
                .orElseThrow(() -> new NotFoundException("Vendedor no encontrado: " + email));

        Product p = Product.builder()
                .name(dto.getName())
                .description(dto.getDescription())
                .price(dto.getPrice())
                .originalPrice(dto.getOriginalPrice())
                .images(dto.getImages())
                .freeShipping(dto.getFreeShipping())
                .stock(dto.getStock())
                .category(dto.getCategory())
                .subcategory(dto.getSubcategory())
                .features(dto.getFeatures())
                .colors(dto.getColors())
                .warranty(dto.getWarranty())
                .seller(seller)
                .build();

        return mapper.toDTO(productRepository.save(p));
    }

    @Override
    public ProductSellerDTO updateProduct(String email, Long id, ProductSellerDTO dto) {
        User seller = userRepository.findByEmail(email)
                .orElseThrow(() -> new NotFoundException("Vendedor no encontrado: " + email));

        Product product = productRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Producto no encontrado con id: " + id));

        if (!product.getSeller().getId().equals(seller.getId())) {
            throw new NotFoundException("No puedes modificar un producto que no te pertenece.");
        }

        mapper.updateEntity(product, dto);
        return mapper.toDTO(productRepository.save(product));
    }

    @Override
    public void deleteProduct(String email, Long id) {
        User seller = userRepository.findByEmail(email)
                .orElseThrow(() -> new NotFoundException("Vendedor no encontrado: " + email));

        Product product = productRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Producto no encontrado con id: " + id));

        if (!product.getSeller().getId().equals(seller.getId())) {
            throw new NotFoundException("No puedes eliminar un producto que no te pertenece.");
        }

        productRepository.delete(product);
    }
}