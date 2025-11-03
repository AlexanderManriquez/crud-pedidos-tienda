# CRUD Pedidos Tienda

Proyecto simple de ejemplo (API REST) para gestionar usuarios y sus pedidos usando Node.js, Express y Sequelize (PostgreSQL).

## Características

- Gestión de usuarios: crear, listar, actualizar y eliminar.
- Gestión de pedidos: crear pedidos y listar pedidos por usuario.
- Modelos definidos con Sequelize y relaciones Usuarios <-> Pedidos.
- Uso de transacciones en operaciones que modifican la base de datos.
- Auto-sincronización de tablas mediante `sequelize.sync({ alter: true })` (útil en desarrollo).

## Requisitos

- Node.js 16+ (o versión compatible)
- PostgreSQL
- npm

## Instalación

1. Clona el repositorio o descarga los archivos.
2. Instala dependencias:

```powershell
npm install
```

3. Crea un archivo `.env` en la raíz con las variables necesarias (ejemplo abajo).
4. Ejecuta la base de datos PostgreSQL y asegúrate de que las credenciales coincidan con las del `.env`.

## Variables de entorno (ejemplo `.env`)

Crea un archivo `.env` con las siguientes variables:

```npm
DB_NAME=nombre_basedatos
DB_USER=usuario
DB_PASSWORD=contraseña
DB_HOST=localhost
DB_PORT=5432
PORT=3000
```

## Scripts útiles

- `npm run dev` - Inicia el servidor con `nodemon` (modo desarrollo).
- `npm start` - Inicia el servidor con `node`.

## Ejecutar la aplicación

En desarrollo:

```powershell
npm run dev
```

En producción:

```powershell
npm start
```

La aplicación por defecto se sirve en `http://localhost:3000` (o el puerto definido en `PORT`).

Al iniciar el servidor, Sequelize intentará sincronizar las tablas automáticamente.

## Endpoints

Usuarios:

- POST /usuarios
  - Crear un nuevo usuario
  - Body JSON ejemplo:

    ```json
    {
      "nombre": "juan",
      "email": "juan@example.com",
      "contrasena": "miPassword123"
    }
    ```

- GET /usuarios
  - Obtener listado de usuarios

- PUT /usuarios/:id
  - Actualizar usuario

- DELETE /usuarios/:id
  - Eliminar usuario

Pedidos:

- POST /pedidos
  - Crear un pedido
  - Body JSON ejemplo:

    ```json
    {
      "usuario_id": 1,
      "producto": "Zapatos",
      "cantidad": 2
    }
    ```

- GET /usuarios/:id/pedidos
  - Obtener pedidos de un usuario por su id

## Próximos pasos

1. Implementar hashing de contraseñas con `bcrypt` y actualizar endpoints de autenticación si aplica.
2. Añadir validación de entrada (`express-validator`).
3. Añadir middleware de manejo de errores centralizado.
4. Para producción crear migraciones en lugar de `sync({ alter: true })`.
5. Añadir tests básicos para servicios y controladores.
