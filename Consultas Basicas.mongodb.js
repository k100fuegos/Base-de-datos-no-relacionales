// 3_consultas_basicas.mongodb.js
use('bd_inventario_ventas');

// --- 3 Consultas con filtros simples ---
use('bd_inventario_ventas');
db.productos.find({ estado_producto: true });
db.clientes.find({ tipo_cliente: 'PN' });
db.ventas.find({ estado_venta: 'Realizada' });

// --- 3 Consultas con operadores de comparación ---
use('bd_inventario_ventas');
db.productos.find({ precio_producto: { $gt: 50 } }); 
db.productos.find({ stock_producto: { $lte: 15 } }); 
db.ventas.find({ total_venta: { $gte: 100 } }); 

// --- 3 Consultas con operadores lógicos ---
use('bd_inventario_ventas');
db.productos.find({ $and: [{ marca: 'Sony' }, { stock_producto: { $gt: 10 } }] });
db.ventas.find({ $or: [{ estado_venta: 'Pendiente' }, { estado_venta: 'Anulada' }] });
db.usuarios.find({ $and: [{ estado_usuario: true }, { 'rol.nombre_rol': 'Administrador' }] });

// --- 3 Consultas con proyección ---
use('bd_inventario_ventas');
db.productos.find({}, { nombre_producto: 1, precio_producto: 1, _id: 0 });
db.clientes.find({}, { nombre_cliente: 1, telefono_cliente: 1, _id: 0 });
db.ventas.find({}, { numero_factura: 1, total_venta: 1, estado_venta: 1 });

// --- 2 Consultas con sort() ---
use('bd_inventario_ventas');
db.productos.find().sort({ precio_producto: -1 }); 
db.ventas.find().sort({ fecha_venta: 1 }); 

// --- 2 Consultas con limit() ---
use('bd_inventario_ventas');
db.productos.find().sort({ stock_producto: -1 }).limit(3); 
db.ventas.find({ estado_venta: 'Realizada' }).limit(5);

// --- 2 Consultas sobre objetos embebidos ---
use('bd_inventario_ventas');
db.usuarios.find({ "rol.nombre_rol": "Supervisor" });
db.usuarios.find({ "rol.nombre_rol": "Vendedor", estado_usuario: true });

// --- 2 Consultas sobre arreglos ---
use('bd_inventario_ventas');
db.ventas.find({ "detalles.cantidad_producto": { $gte: 5 } }); 
db.ventas.find({ "detalles.precio_unitario": 300.00 });