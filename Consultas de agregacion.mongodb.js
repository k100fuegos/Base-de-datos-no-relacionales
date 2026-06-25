// 4_agregaciones.mongodb.js
use('bd_inventario_ventas');

// 1. Pipeline: Total de ingresos por estado de venta
db.ventas.aggregate([
    { $match: { estado_venta: { $ne: 'Anulada' } } },
    { $group: { _id: "$estado_venta", ingresosTotales: { $sum: "$total_venta" } } },
    { $sort: { ingresosTotales: -1 } }
]);

// 2. Pipeline: Top 3 de clientes que más han gastado ($lookup)
db.ventas.aggregate([
    { $match: { estado_venta: 'Realizada' } },
    { $group: { _id: "$cliente_id", totalGastado: { $sum: "$total_venta" } } },
    { $lookup: { from: "clientes", localField: "_id", foreignField: "_id", as: "datos_cliente" } },
    { $unwind: "$datos_cliente" },
    { $project: { cliente: "$datos_cliente.nombre_cliente", totalGastado: 1, _id: 0 } },
    { $sort: { totalGastado: -1 } },
    { $limit: 3 }
]);

// 3. Pipeline: Cantidad de productos por categoría
db.productos.aggregate([
    { $match: { estado_producto: true } },
    { $group: { _id: "$categoria", totalProductos: { $sum: 1 }, stockTotal: { $sum: "$stock_producto" } } },
    { $sort: { stockTotal: -1 } }
]);

// 4. Pipeline: Ventas realizadas por cada usuario administrador/vendedor
db.ventas.aggregate([
    { $lookup: { from: "usuarios", localField: "usuario_id", foreignField: "_id", as: "datos_vendedor" } },
    { $unwind: "$datos_vendedor" },
    { $match: { estado_venta: 'Realizada' } },
    { $group: { _id: "$datos_vendedor.nombre_usuario", ventasRealizadas: { $sum: 1 }, montoGenerado: { $sum: "$total_venta" } } },
    { $sort: { montoGenerado: -1 } },
    { $limit: 5 }
]);

// 5. Pipeline: Desglose de productos más vendidos (Analizando el arreglo embebido)
db.ventas.aggregate([
    { $match: { estado_venta: 'Realizada' } },
    { $unwind: "$detalles" },
    { $group: { _id: "$detalles.id_producto", totalVendido: { $sum: "$detalles.cantidad_producto" } } },
    { $lookup: { from: "productos", localField: "_id", foreignField: "_id", as: "info_producto" } },
    { $unwind: "$info_producto" },
    { $project: { producto: "$info_producto.nombre_producto", totalVendido: 1, _id: 0 } },
    { $sort: { totalVendido: -1 } },
    { $limit: 5 }
]);