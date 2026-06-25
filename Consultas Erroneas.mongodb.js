// Prueba de Validación 1: Evitar precios negativos en productos (Rompe la regla minimum: 0)
db.productos.insertOne({
    codigo_producto: 'PROD-ERR1',
    nombre_producto: 'Mouse Defectuoso',
    precio_producto: -15.00, // ESTO CAUSARÁ EL ERROR
    stock_producto: 10,
    estado_producto: true,
    categoria: 'Perifericos',
    marca: 'Genius'
});

// Prueba de Validación 2: Evitar correos mal formateados en usuarios (Rompe la regla pattern: "^.+@.+$")
db.usuarios.insertOne({
    nombre_usuario: 'Usuario Invalido',
    correo_usuario: 'correo_sin_arroba.com', // ESTO CAUSARÁ EL ERROR
    password_usuario: '12345',
    estado_usuario: true,
    rol: { nombre_rol: 'Vendedor' }
});