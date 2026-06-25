// 5_usuarios_roles.mongodb.js
use('bd_inventario_ventas');

// 0. LIMPIEZA PREVIA 
db.dropAllUsers();
db.dropAllRoles();

// 1. CREACIÓN DE ROL PERSONALIZADO
// Rol de solo lectura exclusivo para sacar reportes de ventas
db.createRole({
    role: "reporteVentas",
    privileges: [
        { resource: { db: "bd_inventario_ventas", collection: "ventas" }, actions: ["find"] },
        { resource: { db: "bd_inventario_ventas", collection: "productos" }, actions: ["find"] }
    ],
    roles: []
});

// 2. CREACIÓN DE USUARIOS DEL SISTEMA MONGODB

// Usuario Administrador (Dueño de la base de datos)
use('bd_inventario_ventas');

db.createUser({
    user: "admin_inventario",
    pwd: "AdminPassword2026", 
    roles: [ 
        { role: "dbOwner", db: "bd_inventario_ventas" } 
    ]
});

// Usuario para la Aplicación (Backend - Permisos de Lectura y Escritura)
use('bd_inventario_ventas');

db.createUser({
    user: "app_ventas_backend",
    pwd: "AppPassword2026",
    roles: [ 
        { role: "readWrite", db: "bd_inventario_ventas" } 
    ]
});

// Usuario Auditor (Solo lectura usando el rol personalizado)
use('bd_inventario_ventas');

db.createUser({
    user: "auditor_ventas",
    pwd: "AuditorPassword2026",
    roles: [ 
        { role: "reporteVentas", db: "bd_inventario_ventas" } 
    ]
});