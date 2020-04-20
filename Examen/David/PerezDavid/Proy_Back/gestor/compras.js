let sql = require('mssql')
let db = require('../config/db')

compras = []

 //**** Listar Compras ****//

async function listar() {
    let listCompras = []
    try {
        await sql.connect(db.config)

        const result = await sql.query(
        `SELECT com.IdCompra, art.Nombre, com.Cantidad, art.Precio 
        FROM Articulos art 
        INNER JOIN Compras com 
        ON art.IdArticulo = com.IdArticulo`)

        listCompras = result.recordset
    }
    catch (err) {
        console.log(err)
    } 
    return listCompras
}

//*** Nueva compra ***//

async function agregarCompra(IdArticulo, Cantidad) {
    let nuevo = 0;
    try {
        let cantidad = (Cantidad)
        await sql.connect(db.config)
        const result = await sql.query`INSERT INTO Compras(IdArticulos, Cantidad) VALUES(${IdArticulo}, ${cantidad})`

        if (result.rowsAffected[0] > 0) {
            const result2 = await sql.query(`select @@identity as nuevo`)
            nuevo = result2.recordset[0].nuevo
        }
    }
    catch (err) {
        console.log(err)
    }
    return nuevo
}

//**** Nuevo Articulo ****//

async function agregarArticulo(nombre, precio) {
    let nuevo = 0;
    try {
        let precio = (precio)
        await sql.connect(db.config)
        const result = await sql.query`INSERT INTO Articulos(Nombre, Precio) VALUES(${nombre}, ${precio})`

        if (result.rowsAffected[0] > 0) {
            const result2 = await sql.query(`select @@identity as nuevo`)
            nuevo = result2.recordset[0].nuevo
        }
    }
    catch (err) {
        console.log(err)
    }
    return nuevo
}


//**** Modificar ****//

async function editar(articulo) {
    let modificado = false;
    try {
        await sql.connect(db.config)
        const result = await sql.query`UPDATE Articulos SET nombre = ${articulo.nombre} where idArticulo = ${articulo.id}`

        if (result.rowsAffected[0] > 0) {
            modificado = true
        }
    } catch (err) {
        console.log(err)
    }
    return modificado
}

//**** Borrar ****//

async function borrar (id) {
    let borrado = false;

    try{
        await sql.connect(db.config)
        const result = await sql.query`DELETE Articulos WHERE IdArticulo = ${id}`

        if (result.rowsAffected[0] > 0) {
            borrado = true
        }
    }
    catch (err) {
        console.log(err)
    }
    return borrado
}

 //**** Listar Articulos - Reporte ****//

 async function reporte() {
    let listArticulos = []
    try {
        await sql.connect(db.config)

        const result = await sql.query(
        `SELECT art.Nombre, COUNT(com.Cantidad) as Cant_Ventas, SUM(art.Precio * com.Cantidad) as Total_Facturado 
        FROM Articulos art 
        INNER JOIN Compras com 
        ON art.IdArticulo = com.IdArticulo
        GROUP BY ar.Nombre ORDER BY DESC`)

        listArticulos = result.recordset
    }
    catch (err) {
        console.log(err)
    } 
    return listArticulos
}


exports.agregarCompra = agregarCompra;
exports.agregarArticulo = agregarArticulo;
exports.listar = listar;
exports.borrar = borrar;
exports.editar = editar;
exports.reporte = reporte;