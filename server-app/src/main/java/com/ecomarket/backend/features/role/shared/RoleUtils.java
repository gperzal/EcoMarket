package com.ecomarket.backend.features.role.shared;

public class RoleUtils {
    public static String getRoleName(Long rolId) {
        return switch (rolId.intValue()) {
            case 1 -> "ADMIN";
            case 2 -> "SELLER";
            case 3 -> "BUYER";
            default -> "UNKNOWN";
        };
    }
}