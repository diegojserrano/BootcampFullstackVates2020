let sql = require('mssql')
let db = require('../config/db')

compras = []

async function agregar(nueva) {
    let nuevoId = 0;
    try{
        await sql.connect(db.config)
        const result = await sql.query`insert into compras values(${nueva.IdArticulo},${nueva.cantidad})`

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

async function buscarTotal(id) {
    let compra = undefined;
    try{
        await sql.connect(db.config)
       
        const result = await sql.query`select sum(c.Cantidad)* a.precio as total from compras c join articulos a on a.IdArticulo = c.IdArticulo where IdCompra = ${id} group by a.Precio`

        if (result.rowsAffected[0] > 0)
            compra = result.recordset[0]
    }
    catch (err) {
        console.log(err)
    }
    return compra
}


async function buscar(IdArticulo) {
    let compra = undefined;
    try{
        await sql.connect(db.config)
      //  const result = await sql.query`select id, articulo, cantidad from compras where id = ${id}`

      const result = await sql.query`select c.IdCompra, c.IdArticulo, c.Cantidad ,a.nombre , a.precio from compras c join articulos a on a.IdArticulo = c.IdArticulo  where IdCompra = ${IdCompra}`

        if (result.rowsAffected[0] > 0)
            compra = result.recordset[0]
    }
    catch (err) {
        console.log(err)
    }
    return compra
}

async function listar() {
    let compras = []
    try {
        await sql.connect(db.config)

        const result = await sql.query('select c.IdCompra, c.IdArticulo, c.Cantidad ,a.nombre , a.precio , c.Cantidad * a.precio as   total from compras c join articulos a on a.IdArticulo = c.IdArticulo ')

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
        const result = await sql.query`update compras set IdArticulo = ${compra.IdArticulo}, IdArticulo = ${compra.IdArticulo} where id = ${compra.id}`

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
        const result = await sql.query`delete compras where IdCompra =(${IdCompra})`

        if (result.rowsAffected[0] > 0) {
            borrado = true
        }
    }
    catch (err) {
        console.log(err)
    }
    return borrado
}

exports.agregar = agregar
exports.buscarTotal = buscarTotal
exports.buscar = buscar
exports.listar = listar
exports.borrar = borrar
exports.modificar = modificar