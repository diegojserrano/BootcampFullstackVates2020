let sql = require('mssql')
let db = require('../config/db')

personas = []

async function agregar(nueva) {
    let nuevoId = 0;
    try {
        await sql.connect(db.config)
        const result = await sql.query `insert into Compras (IdArticulo,Cantidad) values(${nueva.IdArticulo},${nueva.Cantidad})`

        if (result.rowsAffected[0] > 0) {
            const result2 = await sql.query('select @@identity as nuevoId')
            nuevoId = result2.recordset[0].nuevoId
        }
    } catch (err) {
        console.log(err)
    }
    return nuevoId
}


async function listar() {
    let compras = []
    try {
        await sql.connect(db.config)

        const result = await sql.query('select c.IdCompra,a.nombre,c.Cantidad,a.Precio, c.Cantidad * a.Precio from compras c, articulos a where c.IdArticulo=a.IdArticulo')

        // const result = await sql.query('select Nombre from Articulos')
        compras = result.recordset
        console.log(compras)
    } catch (err) {
        console.log(err)
    }
    return compras
}

async function listaArticulo() {
    let compras = []
    try {
        await sql.connect(db.config)

        //const result = await sql.query('select c.IdCompra,a.nombre,c.Cantidad,a.Precio, c.Cantidad * a.Precio from compras c, articulos a where c.IdArticulo=a.IdArticulo')

        const result = await sql.query('select * from Articulos')
        compras = result.recordset
        console.log(compras)
    } catch (err) {
        console.log(err)
    }
    return compras
}

async function listadoArticulosPorVentas() {
    let compras = []
    try {
        await sql.connect(db.config)

        const result = await sql.query('select a.Nombre , count(*) as cantidadVenta from Articulos a, Compras c where a.IdArticulo=c.IdArticulo group by a.Nombre')
        compras = result.recordset
        console.log(compras)
    } catch (err) {
        console.log(err)
    }
    return compras
}

async function totalFacturado() {
    let compras = []
    try {
        await sql.connect(db.config)

        const result = await sql.query('select a.Nombre, SUM(a.Precio * c.Cantidad) from Articulos a, Compras c where a.IdArticulo=c.IdArticulo group by a.Nombre having count(*)<5')
        compras = result.recordset
        console.log(compras)
    } catch (err) {
        console.log(err)
    }
    return compras
}




exports.agregar = agregar
exports.listar = listar
exports.listaArticulo = listaArticulo
exports.listadoArticulosPorVentas = listadoArticulosPorVentas
exports.totalFacturado = totalFacturado