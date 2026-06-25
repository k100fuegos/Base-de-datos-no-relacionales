// 2_insercion_datos.mongodb.js
use('bd_inventario_ventas');

// 1. INSERCIÓN DIRECTA DE USUARIOS

db.usuarios.insertMany([
    {
        nombre_usuario: 'Edwin Cruz',
        correo_usuario: 'admin@sistema.com',
        password_usuario: '$2b$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36WQoeG6Lruj3vjPGga31lW',
        estado_usuario: true,
        created_at: new Date('2026-06-13T22:38:52Z'),
        rol: {
            nombre_rol: 'Administrador'
        }
    },
    {
        nombre_usuario: 'Maria Lopez',
        correo_usuario: 'supervisor@sistema.com',
        password_usuario: '$2b$10$5.9Y1s4E28.U2w7uP0C7U.zG3B1rX2x8tN1c/Fj1.s3GzJ4QO7gWe',
        estado_usuario: true,
        created_at: new Date('2026-06-13T22:38:52Z'),
        rol: {
            nombre_rol: 'Supervisor'
        }
    },
    {
        nombre_usuario: 'Carlos Perez',
        correo_usuario: 'vendedor@sistema.com',
        password_usuario: '$2b$10$wT8K4Z7G8H9M9X9Q9P9Z9.9H9M9X9Q9P9Z9H9M9X9Q9P9Z9H9M9X9',
        estado_usuario: true,
        created_at: new Date('2026-06-13T22:38:52Z'),
        rol: {
            nombre_rol: 'Vendedor'
        }
    },
    {
        nombre_usuario: 'Kelvin Cienfuegos',
        correo_usuario: 'kelvin100fuegos@gmail.com',
        password_usuario: '$2y$10$GPFkU9KanxOv/OJ6r2V8Qu8hqgqxfGFFiO5F9h2xElJJZiD0F5hha',
        estado_usuario: true,
        created_at: new Date('2026-06-17T21:40:31Z'),
        rol: {
            nombre_rol: 'Administrador'
        }
    }
]);

// 2. INSERCIÓN DIRECTA DE CLIENTES
db.clientes.insertMany([
    {
        nombre_cliente: 'Consumidor Final',
        tipo_cliente: 'PN',
        dui_cliente: '00000000-0',
        estado_cliente: true
    },
    {
        nombre_cliente: 'Carlos Mendoza',
        tipo_cliente: 'PN',
        dui_cliente: '01234567-8',
        nit_cliente: '0614-120390-101-5',
        telefono_cliente: '7012-3456',
        estado_cliente: true
    },
    {
        nombre_cliente: 'Ana Gomez',
        tipo_cliente: 'PN',
        dui_cliente: '02345678-9',
        nit_cliente: '0614-250495-102-3',
        telefono_cliente: '7543-2109',
        estado_cliente: true
    },
    {
        nombre_cliente: 'Jose Ramirez',
        tipo_cliente: 'PN',
        dui_cliente: '03456789-1',
        nit_cliente: '0614-180188-103-8',
        telefono_cliente: '7123-4567',
        estado_cliente: true
    }
]);

// 3. INSERCIÓN DIRECTA DE PRODUCTOS
db.productos.insertMany([
    {
        codigo_producto: 'PROD-001',
        nombre_producto: 'Pasta Termica',
        modelo_producto: 'MX-4',
        categoria: 'Herramientas de Servicio Tecnico',
        marca: 'Arctic',
        precio_producto: Double(8.50),
        stock_producto: 25,
        estado_producto: true,
        imagen_producto: '../../../public/img/productos/producto_1719273600_4821.jpg'
    },
    {
        codigo_producto: 'PROD-002',
        nombre_producto: 'SSD NVMe',
        modelo_producto: 'NV2 1TB',
        categoria: 'Almacenamiento',
        marca: 'Kingston',
        precio_producto: Double(65.00),
        stock_producto: 15,
        estado_producto: true,
        imagen_producto: '../../../public/img/productos/producto_1719273605_1294.jpg'
    },
    {
        codigo_producto: 'PROD-003',
        nombre_producto: 'Memoria RAM',
        modelo_producto: 'Vengeance LPX 8GB',
        categoria: 'Componentes de PC',
        marca: 'Corsair',
        precio_producto: Double(28.00),
        stock_producto: 24,
        estado_producto: true,
        imagen_producto: '../../../public/img/productos/producto_1719273612_9823.jpg'
    },
    {
        codigo_producto: 'PROD-004',
        nombre_producto: 'Control PS4',
        modelo_producto: 'DualShock 4',
        categoria: 'Consolas y Videojuegos',
        marca: 'Sony',
        precio_producto: Double(55.00),
        stock_producto: 8,
        estado_producto: true,
        imagen_producto: '../../../public/img/productos/producto_1719273618_4451.jpg'
    },
    {
        codigo_producto: 'PROD-005',
        nombre_producto: 'Cautin Regulable',
        modelo_producto: '60W',
        categoria: 'Herramientas de Servicio Tecnico',
        marca: 'Redragon',
        precio_producto: Double(18.50),
        stock_producto: 12,
        estado_producto: true,
        imagen_producto: '../../../public/img/productos/producto_1719273625_7712.jpg'
    },
    {
        codigo_producto: 'PROD-006',
        nombre_producto: 'Teclado Mecanico',
        modelo_producto: 'K552 Kumara',
        categoria: 'Perifericos',
        marca: 'Redragon',
        precio_producto: Double(42.50),
        stock_producto: 20,
        estado_producto: true,
        imagen_producto: '../../../public/img/productos/producto_1719273630_3345.jpg'
    },
    {
        codigo_producto: 'PROD-007',
        nombre_producto: 'Audifonos Gamer',
        modelo_producto: 'Cloud Stinger',
        categoria: 'Perifericos',
        marca: 'HyperX',
        precio_producto: Double(39.99),
        stock_producto: 18,
        estado_producto: true,
        imagen_producto: '../../../public/img/productos/producto_1719273635_1109.jpg'
    },
    {
        codigo_producto: 'PROD-008',
        nombre_producto: 'Audifonos sony WH1000XM-4',
        modelo_producto: 'WH1000XM-4',
        categoria: 'Perifericos',
        marca: 'Sony',
        precio_producto: Double(300.00),
        stock_producto: 24,
        estado_producto: true,
        imagen_producto: '../../../public/img/productos/producto_1719273641_9901.jpg'
    },
    {
        codigo_producto: 'PROD-009',
        nombre_producto: 'Laptop HP Victus 15',
        modelo_producto: 'HP Victus 15-fb0000',
        categoria: 'Laptops Gamer',
        marca: 'HP',
        precio_producto: Double(800.00),
        stock_producto: 5,
        estado_producto: false,
        imagen_producto: '../../../public/img/productos/producto_1719273646_5632.png'
    }
]);

// 4. INSERCIÓN DIRECTA DE VENTAS
db.ventas.insertMany([
    {
        numero_factura: 'FAC-20260620064300',
        correo_usuario: 'vendedor@sistema.com',
        dui_cliente: '02345678-9',
        fecha_venta: new Date('2026-06-20T06:36:00Z'),
        subtotal_venta: Double(56.00),
        iva_venta: Double(7.28),
        total_venta: Double(63.28),
        estado_venta: 'Realizada',
        detalles: [
            {
                codigo_producto: 'PROD-003',
                cantidad_producto: Int32(2),
                precio_unitario: Double(28.00),
                subtotal_detalle: Double(56.00)
            }
        ]
    },
    {
        numero_factura: 'FAC-20260620064711',
        correo_usuario: 'kelvin100fuegos@gmail.com',
        dui_cliente: '03456789-1',
        fecha_venta: new Date('2026-06-20T06:46:00Z'),
        subtotal_venta: Double(56.00),
        iva_venta: Double(7.28),
        total_venta: Double(63.28),
        estado_venta: 'Pendiente',
        detalles: [
            {
                codigo_producto: 'PROD-003',
                cantidad_producto: Int32(2),
                precio_unitario: Double(28.00),
                subtotal_detalle: Double(56.00)
            }
        ]
    },
    {
        numero_factura: 'FAC-20260620065933',
        correo_usuario: 'kelvin100fuegos@gmail.com',
        dui_cliente: '02345678-9',
        fecha_venta: new Date('2026-06-20T06:58:00Z'),
        subtotal_venta: Double(356.00),
        iva_venta: Double(46.28),
        total_venta: Double(402.28),
        estado_venta: 'Pendiente',
        detalles: [
            {
                codigo_producto: 'PROD-008',
                cantidad_producto: Int32(1),
                precio_unitario: Double(300.00),
                subtotal_detalle: Double(300.00)
            },
            {
                codigo_producto: 'PROD-003',
                cantidad_producto: Int32(2),
                precio_unitario: Double(28.00),
                subtotal_detalle: Double(56.00)
            }
        ]
    },
    {
        numero_factura: 'FAC-20260620233951',
        correo_usuario: 'kelvin100fuegos@gmail.com',
        dui_cliente: '00000000-0',
        fecha_venta: new Date('2026-06-20T23:38:00Z'),
        subtotal_venta: Double(300.00),
        iva_venta: Double(39.00),
        total_venta: Double(339.00),
        estado_venta: 'Realizada',
        detalles: [
            {
                codigo_producto: 'PROD-008',
                cantidad_producto: Int32(1),
                precio_unitario: Double(300.00),
                subtotal_detalle: Double(300.00)
            }
        ]
    },
    {
        numero_factura: 'FAC-20260620234201',
        correo_usuario: 'kelvin100fuegos@gmail.com',
        dui_cliente: '00000000-0',
        fecha_venta: new Date('2026-06-20T23:39:00Z'),
        subtotal_venta: Double(3000.00),
        iva_venta: Double(390.00),
        total_venta: Double(3390.00),
        estado_venta: 'Anulada',
        detalles: [
            {
                codigo_producto: 'PROD-008',
                cantidad_producto: Int32(10),
                precio_unitario: Double(300.00),
                subtotal_detalle: Double(3000.00)
            }
        ]
    }
]);