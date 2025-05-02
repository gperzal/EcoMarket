package com.ecomarket.backend.features.product.model;

import jakarta.persistence.Embeddable;
import lombok.Data;

import java.util.HashMap;
import java.util.Map;

@Embeddable
@Data
public class Specifications {
    private String marca;
    private String modelo;
    private String sistemaOperativo;
    private String tamañoDePantalla;
    private String resolucion;
    private String procesador;
    private String memoriaRAM;
    private String almacenamiento;
    private String camaraPrincipal;
    private String camaraFrontal;
    private String bateria;
    private String dimensiones;
    private String peso;

    public Map<String, String> toMap() {
        Map<String, String> map = new HashMap<>();
        map.put("Marca", this.marca);
        map.put("Modelo", this.modelo);
        map.put("Sistema Operativo", this.sistemaOperativo);
        map.put("Tamaño de pantalla", this.tamañoDePantalla);
        map.put("Resolución", this.resolucion);
        map.put("Procesador", this.procesador);
        map.put("Memoria RAM", this.memoriaRAM);
        map.put("Almacenamiento", this.almacenamiento);
        map.put("Cámara principal", this.camaraPrincipal);
        map.put("Cámara frontal", this.camaraFrontal);
        map.put("Batería", this.bateria);
        map.put("Dimensiones", this.dimensiones);
        map.put("Peso", this.peso);
        return map;
    }
}