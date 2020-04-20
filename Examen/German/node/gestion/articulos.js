var sql = require('mssql')
var db = require('../config/db')

async function Listar(){

    var articulo = []

    try{
        await sql.connect(db.config)
        const result = await sql.query(`select * from Articulos;`)
        articulo = result.recordset
    }
    catch(err){
        console.log(err)
    }
    return articulo
}

var articulo = []

async function Agregar(newArt){
    let newId = 0;
    try{
        await sql.connect(db.config)
        const result = await sql.query `insert into Articulos (Nombre, Precio) values (${newArt.Nombre}, ${newArt.Precio})`

        if(result.rowsAffected[0] > 0){
            const result2 = await sql.query('select @@identity as newId')
            newId = result2.recordset[0].newId
        }
    }
    catch(err){
        console.log(err)
    }
    return newId
}
async function Modificar(newArt){
    let modificar = false;
    try{
        await sql.connect(db.config)
        const result = await sql.query `update Articulos set Nombre = ${newArt.Nombre}, 
        Precio = ${newArt.Precio} where IdArticulo = ${newArt.IdArticulo}`
        
        if(result.rowsAffected[0] > 0){
            modificado = true
        }
    }
    catch(err){
        console.log(err)
    }
    return modificado
}

async function Eliminar(IdArticulo){
    let borrado = false;

    try{
        await sql.connect(db.config)
        const result = await sql.query `delete Articulos where IdArticulo = (${IdArticulo})`

        if(result.rowsAffected[0] > 0){
            borrado = true
        }        
    }
    catch(err){
        console.log(err)
    }
    return borrado
}

exports.Listar = Listar;
exports.Agregar = Agregar;
exports.Modificar = Modificar;
exports.Eliminar = Eliminar;