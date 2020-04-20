let sql = require('mssql')
let db = require('../config/db')

compras = []
Reporte = []

async function agregar(id,cantidad) {

    let nuevoId = 0;
    try{
        await sql.connect(db.config)
        const result = await sql.query`insert into Compras(IdArticulo, Cantidad) values(${id},${cantidad})`

        if (result.rowsAffected[0] > 0) {
            const result2 = await sql.query('select @@identity as nuevoId')
            nuevoId = result2.recordset[0].nuevoId
        }
    }
    catch (err) {
        console.log(err)
    }
    return nuevoId
}


async function buscar(id) {
   
    let persona = undefined;
    try{
        await sql.connect(db.config)
        const result = await sql.query`select a.IdArticulo, a.Nombre, a.Precio,c.Cantidad,c.IdCompra ,sum(a.Precio * c.Cantidad) as Total from Articulos a join Compras c on a.IdArticulo = c.IdArticulo group by a.IdArticulo, a.Nombre, a.Precio,c.Cantidad,c.IdCompra having c.IdCompra = ${id}`
        console.log("Si se pudo shrek")
        if (result.rowsAffected[0] > 0)
            persona = result.recordset[0]
    }
    catch (err) {
        console.log(err)
    }
    return persona
}

async function listar() {
    let compras = []
    try {
        await sql.connect(db.config)

        const result = await sql.query('select a.IdArticulo, a.Nombre, a.Precio,c.Cantidad,c.IdCompra ,sum(a.Precio * c.Cantidad) as Total from Articulos a join Compras c on a.IdArticulo = c.IdArticulo group by a.IdArticulo, a.Nombre, a.Precio,c.Cantidad,c.IdCompra')

        compras = result.recordset       
    } catch (err) {
        console.log(err)
    }
    return compras
}

async function reportefinal(){
    let compras = []
    try {
        await sql.connect(db.config)

        const result = await sql.query('select a.Nombre, COUNT(c.IdArticulo) as VentasTotales, sum(c.Cantidad * a.Precio) as TotalVendido from Articulos a join Compras c on a.IdArticulo = c.IdArticulo group by a.Nombre order by 3 desc')

        compras = result.recordset       
    } catch (err) {
        console.log(err)
    }
    return compras



}


async function modificar(compra) {
    let modificado = false;
    try
    {
        await sql.connect(db.config)
        const result = await sql.query`update Compras set Cantidad = ${compra.cantidad} where IdCompra = ${compra.id}`

        if (result.rowsAffected[0] > 0) {
            modificado = true
        }
    }
    catch (err) {
        console.log(err)
    }
    return modificado
}

async function borrar (id) {
    let borrado = false;
        try{
        await sql.connect(db.config)
        const result = await sql.query`delete Compras where IdCompra =(${id})`

        if (result.rowsAffected[0] > 0) {
            borrado = true
        }
    }
    catch (err) {
        console.log(err)
    }
    return borrado
}
exports.reportefinal = reportefinal
exports.agregar = agregar
exports.buscar = buscar
exports.listar = listar
exports.borrar = borrar
exports.modificar = modificar
