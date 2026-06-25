// 2_insercion_datos.mongodb.js
use('bd_inventario_ventas');

// Inserción de Usuarios
const usu1 = db.usuarios.insertOne({
    nombre_usuario: 'Edwin Cruz', correo_usuario: 'admin@sistema.com',
    password_usuario: '$2b$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36WQoeG6Lruj3vjPGga31lW', // admin123
    estado_usuario: true, created_at: new Date('2026-06-13T22:38:52Z'),
    rol: { nombre_rol: 'Administrador' }
}).insertedId;

const usu2 = db.usuarios.insertOne({
    nombre_usuario: 'Maria Lopez', correo_usuario: 'supervisor@sistema.com',
    password_usuario: '$2b$10$5.9Y1s4E28.U2w7uP0C7U.zG3B1rX2x8tN1c/Fj1.s3GzJ4QO7gWe', // super123
    estado_usuario: true, created_at: new Date('2026-06-13T22:38:52Z'),
    rol: { nombre_rol: 'Supervisor' }
}).insertedId;

const usu3 = db.usuarios.insertOne({
    nombre_usuario: 'Carlos Perez', correo_usuario: 'vendedor@sistema.com',
    password_usuario: '$2b$10$wT8K4Z7G8H9M9X9Q9P9Z9.9H9M9X9Q9P9Z9H9M9X9Q9P9Z9H9M9X9', // vend123
    estado_usuario: true, created_at: new Date('2026-06-13T22:38:52Z'),
    rol: { nombre_rol: 'Vendedor' }
}).insertedId;

const usu6 = db.usuarios.insertOne({
    nombre_usuario: 'Kelvin Cienfuegos', correo_usuario: 'kelvin100fuegos@gmail.com',
    password_usuario: '$2y$10$GPFkU9KanxOv/OJ6r2V8Qu8hqgqxfGFFiO5F9h2xElJJZiD0F5hha',
    estado_usuario: true, created_at: new Date('2026-06-17T21:40:31Z'),
    rol: { nombre_rol: 'Administrador' }
}).insertedId;

// Inserción de Clientes (Solo los activos)
const cli1 = db.clientes.insertOne({ nombre_cliente: 'Consumidor Final', tipo_cliente: 'PN', dui_cliente: '00000000-0', estado_cliente: true }).insertedId;
const cli2 = db.clientes.insertOne({ nombre_cliente: 'Carlos Mendoza', tipo_cliente: 'PN', dui_cliente: '01234567-8', nit_cliente: '0614-120390-101-5', telefono_cliente: '7012-3456', estado_cliente: true }).insertedId;
const cli3 = db.clientes.insertOne({ nombre_cliente: 'Ana Gomez', tipo_cliente: 'PN', dui_cliente: '02345678-9', nit_cliente: '0614-250495-102-3', telefono_cliente: '7543-2109', estado_cliente: true }).insertedId;
const cli4 = db.clientes.insertOne({ nombre_cliente: 'Jose Ramirez', tipo_cliente: 'PN', dui_cliente: '03456789-1', nit_cliente: '0614-180188-103-8', telefono_cliente: '7123-4567', estado_cliente: true }).insertedId;

// Inserción de Productos
const prodArchivos = [
    { c: 'PROD-001', n: 'Pasta Termica', m: 'MX-4', cat: 'Herramientas de Servicio Tecnico', mar: 'Arctic', p: Double(8.50), s: 25, img: '../../../public/img/productos/producto_1719273600_4821.jpg' },
    { c: 'PROD-002', n: 'SSD NVMe', m: 'NV2 1TB', cat: 'Almacenamiento', mar: 'Kingston', p: Double(65.00), s: 15, img: '../../../public/img/productos/producto_1719273605_1294.jpg' },
    { c: 'PROD-003', n: 'Memoria RAM', m: 'Vengeance LPX 8GB', cat: 'Componentes de PC', mar: 'Corsair', p: Double(28.00), s: 24, img: '../../../public/img/productos/producto_1719273612_9823.jpg' },
    { c: 'PROD-004', n: 'Control PS4', m: 'DualShock 4', cat: 'Consolas y Videojuegos', mar: 'Sony', p: Double(55.00), s: 8, img: '../../../public/img/productos/producto_1719273618_4451.jpg' },
    { c: 'PROD-005', n: 'Cautin Regulable', m: '60W', cat: 'Herramientas de Servicio Tecnico', mar: 'Redragon', p: Double(18.50), s: 12, img: '../../../public/img/productos/producto_1719273625_7712.jpg' },
    { c: 'PROD-006', n: 'Teclado Mecanico', m: 'K552 Kumara', cat: 'Perifericos', mar: 'Redragon', p: Double(42.50), s: 20, img: '../../../public/img/productos/producto_1719273630_3345.jpg' },
    { c: 'PROD-007', n: 'Audifonos Gamer', m: 'Cloud Stinger', cat: 'Perifericos', mar: 'HyperX', p: Double(39.99), s: 18, img: '../../../public/img/productos/producto_1719273635_1109.jpg' },
    { c: 'PROD-008', n: 'Audifonos sony WH1000XM-4', m: 'WH1000XM-4', cat: 'Perifericos', mar: 'Sony', p: Double(300.00), s: 24, img: '../../../public/img/productos/producto_1719273641_9901.jpg' },
    { c: 'PROD-009', n: 'Laptop HP Victus 15', m: 'HP Victus 15-fb0000', cat: 'Laptops Gamer', mar: 'HP', p: Double(800.00), s: 5, img: '../../../public/img/productos/producto_1719273646_5632.png', estado_producto: false }
];

let prodIds = {};
prodArchivos.forEach(p => {
    prodIds[p.c] = db.productos.insertOne({
        codigo_producto: p.c, nombre_producto: p.n, modelo_producto: p.m,
        categoria: p.cat, marca: p.mar, precio_producto: p.p,
        stock_producto: p.s, estado_producto: p.estado_producto !== false, imagen_producto: p.img
    }).insertedId;
});

// Inserción de Ventas (Solo Facturas por Fecha)
db.ventas.insertMany([
    {
        numero_factura: 'FAC-20260620064300', cliente_id: cli3, usuario_id: usu3,
        fecha_venta: new Date('2026-06-20T06:36:00Z'), 
        subtotal_venta: Double(56.00), iva_venta: Double(7.28), total_venta: Double(63.28), estado_venta: 'Realizada',
        detalles: [ { id_producto: prodIds['PROD-003'], cantidad_producto: Int32(2), precio_unitario: Double(28.00), subtotal_detalle: Double(56.00) } ]
    },
    {
        numero_factura: 'FAC-20260620064711', cliente_id: cli4, usuario_id: usu6,
        fecha_venta: new Date('2026-06-20T06:46:00Z'), 
        subtotal_venta: Double(56.00), iva_venta: Double(7.28), total_venta: Double(63.28), estado_venta: 'Pendiente',
        detalles: [ { id_producto: prodIds['PROD-003'], cantidad_producto: Int32(2), precio_unitario: Double(28.00), subtotal_detalle: Double(56.00) } ]
    },
    {
        numero_factura: 'FAC-20260620065933', cliente_id: cli3, usuario_id: usu6,
        fecha_venta: new Date('2026-06-20T06:58:00Z'), 
        subtotal_venta: Double(356.00), iva_venta: Double(46.28), total_venta: Double(402.28), estado_venta: 'Pendiente',
        detalles: [
            { id_producto: prodIds['PROD-008'], cantidad_producto: Int32(1), precio_unitario: Double(300.00), subtotal_detalle: Double(300.00) },
            { id_producto: prodIds['PROD-003'], cantidad_producto: Int32(2), precio_unitario: Double(28.00), subtotal_detalle: Double(56.00) }
        ]
    },
    {
        numero_factura: 'FAC-20260620233951', cliente_id: cli1, usuario_id: usu6,
        fecha_venta: new Date('2026-06-20T23:38:00Z'), 
        subtotal_venta: Double(300.00), iva_venta: Double(39.00), total_venta: Double(339.00), estado_venta: 'Realizada',
        detalles: [ { id_producto: prodIds['PROD-008'], cantidad_producto: Int32(1), precio_unitario: Double(300.00), subtotal_detalle: Double(300.00) } ]
    },
    {
        numero_factura: 'FAC-20260620234201', cliente_id: cli1, usuario_id: usu6,
        fecha_venta: new Date('2026-06-20T23:39:00Z'), 
        subtotal_venta: Double(3000.00), iva_venta: Double(390.00), total_venta: Double(3390.00), estado_venta: 'Anulada',
        detalles: [ { id_producto: prodIds['PROD-008'], cantidad_producto: Int32(10), precio_unitario: Double(300.00), subtotal_detalle: Double(3000.00) } ]
    }
]);