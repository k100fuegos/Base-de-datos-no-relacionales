// 5_usuarios_roles.mongodb.js
use('bd_inventario_ventas');

// 1. Creación de un Rol Personalizado (Solo lectura para reportes)
db.createRole({
    role: "reporteVentas",
    privileges: [
        { resource: { db: "bd_inventario_ventas", collection: "ventas" }, actions: ["find"] },
        { resource: { db: "bd_inventario_ventas", collection: "productos" }, actions: ["find"] }
    ],
    roles: []
});

// 2. Creación de Usuario Administrador (DBA)
db.createUser({
    user: "admin_inventario",
    pwd: passwordPrompt(), // Pide la contraseña al ejecutar
    roles: [ { role: "dbOwner", db: "bd_inventario_ventas" } ]
});

// 3. Creación de Usuario para la Aplicación (Backend)
db.createUser({
    user: "app_ventas_backend",
    pwd: "secureAppPassword2026",
    roles: [ { role: "readWrite", db: "bd_inventario_ventas" } ]
});

// 4. Creación de Usuario de Solo Lectura (Auditoría/Reportes)
db.createUser({
    user: "auditor_ventas",
    pwd: "auditorPassword2026",
    roles: [ { role: "reporteVentas", db: "bd_inventario_ventas" } ]
});