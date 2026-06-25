// 1_creacion_db_esquemas.mongodb.js
use('bd_inventario_ventas');

// 1. COLECCIÓN DE USUARIOS
db.createCollection('usuarios', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: ['nombre_usuario', 'correo_usuario', 'password_usuario', 'rol'],
            properties: {
                nombre_usuario: { bsonType: 'string' },
                correo_usuario: { bsonType: 'string', pattern: "^.+@.+$" },
                password_usuario: { bsonType: 'string' },
                estado_usuario: { bsonType: 'bool' },
                rol: {
                    bsonType: 'object',
                    required: ['nombre_rol'],
                    properties: {
                        nombre_rol: { enum: ['Administrador', 'Supervisor', 'Vendedor'] }
                    }
                }
            }
        }
    }
});

// 2. COLECCIÓN DE CLIENTES
db.createCollection('clientes', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: ['nombre_cliente', 'tipo_cliente', 'estado_cliente'],
            properties: {
                nombre_cliente: { bsonType: 'string' },
                tipo_cliente: { enum: ['PN', 'PJ'] },
                dui_cliente: { bsonType: ['string', 'null'] },
                nit_cliente: { bsonType: ['string', 'null'] },
                estado_cliente: { bsonType: 'bool' }
            }
        }
    }
});

// 3. COLECCIÓN DE PRODUCTOS
db.createCollection('productos', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: ['codigo_producto', 'nombre_producto', 'precio_producto', 'stock_producto'],
            properties: {
                codigo_producto: { bsonType: 'string' },
                nombre_producto: { bsonType: 'string' },
                precio_producto: { bsonType: 'double', minimum: 0 },
                stock_producto: { bsonType: 'int', minimum: 0 },
                estado_producto: { bsonType: 'bool' },
                categoria: { bsonType: 'string' },
                marca: { bsonType: 'string' }
            }
        }
    }
});

// 4. COLECCIÓN DE VENTAS
db.createCollection('ventas', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: ['numero_factura', 'correo_usuario', 'dui_cliente', 'fecha_venta', 'subtotal_venta', 'iva_venta', 'total_venta', 'detalles'],
            properties: {
                numero_factura: { bsonType: 'string' },
                correo_usuario: { bsonType: 'string' },
                dui_cliente: { bsonType: 'string' },
                estado_venta: { enum: ['Realizada', 'Pendiente', 'Anulada'] },
                subtotal_venta: { bsonType: 'double' },
                iva_venta: { bsonType: 'double' },
                total_venta: { bsonType: 'double' },
                detalles: {
                    bsonType: 'array',
                    minItems: 1,
                    items: {
                        bsonType: 'object',
                        required: ['codigo_producto', 'cantidad_producto', 'precio_unitario', 'subtotal_detalle'],
                        properties: {
                            codigo_producto: { bsonType: 'string' },
                            cantidad_producto: { bsonType: 'int', minimum: 1 },
                            precio_unitario: { bsonType: 'double' },
                            subtotal_detalle: { bsonType: 'double' }
                        }
                    }
                }
            }
        }
    }
});

// 5. CREACIÓN DE ÍNDICE BÁSICO EN LA COLECCIÓN DE VENTAS
db.ventas.createIndex({ numero_factura: 1 }, { unique: true });