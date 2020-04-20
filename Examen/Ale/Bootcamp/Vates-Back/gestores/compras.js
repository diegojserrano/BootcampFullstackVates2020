let sql = require('mssql');
let db = require('../config/db');


//==================
// Listar COMPRAS POR ARTICULOS
//==================
async function listar() {
    let listaCompras = []
    try {
        await sql.connect(db.config)

        const result = await sql.query('select a.IdArticulo, a.Nombre, a.Precio,c.Cantidad, sum(a.Precio * c.Cantidad) as Total from Articulos a join Compras c on a.IdArticulo = c.IdArticulo group by a.IdArticulo, a.Nombre, a.Precio,c.Cantidad')

        listaCompras = result.recordset
    } catch (err) {
        console.log(err)
    }
    return listaCompras
};


//==================
// Listado de Articulos
//==================

async function listarArticulos() {
    let listaCompras = []
    try {
        await sql.connect(db.config)

        const result = await sql.query('select a.IdArticulo, a.Nombre, a.Precio from Articulos a ')

        listaCompras = result.recordset
    } catch (err) {
        console.log(err)
    }
    return listaCompras
};

//==================
// Agregar Articulo
//==================
async function agregar(nombre, precio) {
    let nuevo = 0;
    try {
        let monto = (precio);
        await sql.connect(db.config)
        const result = await sql.query `insert into Articulos(Nombre, Precio) values(${nombre}, ${monto})`

        nuevo = 1

    } catch (err) {
        console.log(err)
    }
    return nuevo
}



//==================
// Modificar
//==================

async function modificar(articulo) {
    let modificado = false;
    try {
        await sql.connect(db.config)
        const resultado = await sql.query `update Articulos set nombre = ${articulo.nombre} where IdArticulo = ${articulo.id}`

        modificado = true
    } catch (err) {
        console.log(err)
    }
    return modificado
}


//==================
// Eliminar
//==================
async function borrar(id) {
    let borrado = false;

    try {
        await sql.connect(db.config)

        let busca = await sql.query `select count(*) from Articulos where IdArticulo = ${id} `

        if (busca = 0) {
            resultado = false
        } else {
            await sql.query `delete Articulos where IdArticulo = ${id}`
            borrado = true
        }

    } catch (err) {
        console.log(err)
    }
    return borrado
}

//==================
// Agregar Compra
//==================
async function nuevaCompra(IdArticulo, Cantidad) {
    let nuevo = 0;
    try {
        let cant = (Cantidad);
        await sql.connect(db.config)
        const result = sql.query `insert into compras(IdArticulo,Cantidad)values(${IdArticulo}, ${cant})`

        return nuevo = 1

    } catch (err) {
        console.log(err)
    }
    return nuevo
};

//==================
// REPORTE
//==================
async function reporte() {
    let Reporte = []
    try {
        await sql.connect(db.config)

        const result = await sql.query('select a.Nombre, COUNT(c.IdArticulo) as CantidadVentas, sum(c.Cantidad * a.Precio) as TotalFacturado from Articulos a join Compras c on a.IdArticulo = c.IdArticulo group by a.Nombre order by 3 desc ')

        Reporte = result.recordset
    } catch (err) {
        console.log(err)
    }
    return Reporte
};



exports.nuevaCompra = nuevaCompra;
exports.listar = listar;
exports.listarArticulos = listarArticulos;
exports.agregar = agregar;
exports.modificar = modificar;
exports.borrar = borrar;
exports.reporte = reporte;