
# 💳 EcoMarket Backend - Arquitectura Modular con Spring Boot

Este proyecto es una API backend para Ecomarket, estructurada siguiendo principios de arquitectura modular y diseño orientado al dominio (DDD). Soporta gestión de usuarios, productos financieros, transacciones, seguridad con JWT, sistema de puntos de fidelización y más.

---

## 📦 Estructura de Carpetas

```
com.ecomarket.backend
├── config                 # Configuraciones generales (CORS, beans, Swagger, etc.)
├── security              # Seguridad (JWT, filtros, autenticación)
├── common                # Utilidades compartidas y manejo centralizado de errores
├── features              # Módulos del dominio, organizados por feature 
│   ├── user
│   ├── user_role
│   ├── role
│   ├── product_seller
│   ├── product
│   └── cart
 
```

---

## 🧱 Estructura por Feature

Cada carpeta `features/*` contiene:

- `model` → Entidad JPA
- `dto` → DTOs inmutables (`record` de Java)
- `mapper` → Conversión DTO ↔ Entity (manualmente o con MapStruct)
- `repository` → Repositorio JPA
- `service` → Lógica de negocio
- `controller` → Controladores REST
- `shared` → Constantes/utilidades internas
- `exception` → Excepciones personalizadas del dominio (opcional)

---

## 🔐 Seguridad

- Autenticación basada en JWT.
- Acceso basado en roles (`ADMIN`, `EXECUTIVE`, `CLIENT`).
- Contraseñas encriptadas con BCrypt.
- Toda la lógica de seguridad se encuentra en `security/`.

El login y registro retornan un token válido y el rol del usuario para control de acceso en el frontend.

---

## 📜 Validaciones

Las validaciones en los DTO utilizan anotaciones de Jakarta:

```java
@NotBlank
@Size(min = 6)
@Email
@Pattern(regexp = "\+56\d{9}", message = "Phone must follow Chilean format +569XXXXXXXX")
```

---

## 🎯 Principales Mejoras

- ✅ Estructura modular por feature (domain-driven)
- ✅ Seguridad moderna con JWT y BCrypt
- ✅ Excepciones centralizadas con `@ControllerAdvice`
- ✅ Uso de DTOs `record` inmutables
- ✅ Uso de inglés técnico en entidades y rutas
- ✅ Estructura lista para integración con Swagger
- ✅ Preparado para escalar a microservicios

---


## 🧪 Testing

El proyecto cuenta con una cobertura de pruebas bien estructurada que sigue el patrón modular de la aplicación principal:

```
src/test/java/com/ecomarket/backend/
├── auth                    # Pruebas de autenticación (login y registro)
│   ├── LoginControllerTest
│   └── RegisterControllerTest
├── config                  # Configuraciones de seguridad y beans
│   └── TestSecurityConfig
├── controller              # Controlador master centralizado
│   └── MasterControllerTest
├── user                    # Pruebas específicas del módulo de usuario
│   ├── UserRepositoryTest
│   └── UserServiceTest
└── BackendApplicationTests # Smoke test para validación general del contexto
```

### 🔍 Cobertura de pruebas:

- **Controladores**: Se validan respuestas HTTP, payloads y restricciones de acceso.
- **Servicios**: Se testea la lógica de negocio de cada módulo con mocks (Mockito).
- **Repositorios**: Se testean operaciones CRUD sobre una base de datos en memoria (H2).
- **Validaciones**: Se prueba el comportamiento de los DTOs con restricciones `@Valid`.
- **Seguridad**: Se simulan usuarios autenticados con diferentes roles usando `@WithMockUser`.

### 🧪 Herramientas y buenas prácticas:

- Framework de pruebas: **JUnit 5**
- Simulaciones: **Mockito**
- Tests de integración aislados: `@SpringBootTest`, `@DataJpaTest`, `@WebMvcTest`
- Archivos de configuración de prueba:  
  `src/test/resources/application-test.properties`

> Las pruebas están diseñadas para ser escalables por feature y facilitar el mantenimiento continuo.


## 📘 Documentación API (Swagger)

La documentación completa de la API está disponible en:
👉 [http://localhost:8080/swagger-ui/index.html](http://localhost:8080/swagger-ui/index.html)

La estructura de documentación OpenAPI está modularizada por feature en `src/main/resources/openapi/`.
Cada archivo `.yaml` representa un módulo (ej. `user.yaml`, `product.yaml`, etc).

### 🛠️ ¿Cómo agregar nueva documentación?
Si agregas un nuevo `*.yaml`, ejecuta el script:

```bash
python src/main/resources/openapi/combine_openapi.py
```

Esto combinará todos los archivos en `openapi/openapi.yaml`, el cual es luego movido automáticamente al directorio `static/` para ser servido por Swagger.

