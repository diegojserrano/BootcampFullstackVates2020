let mssql = require('mssql')

let express = require('express')
let Articulos = require('../gestores/Articulos')
var bodyParser = require('body-parser')
var msssql= require('mssql')

let router = express.Router()

router.use(bodyParser.urlencoded({ extended: false }))
let db = require('../config/db')

articulos = []
var  executeQuery = function(res, query){             
    msssql.connect(db.config, function (err) {
        if (err) {   
                    console.log("Error while connecting database :- " + err);
                    res.send(err);
                 }
                 else {
                        // create Request object
                        var request = new msssql.Request();
                        // query to the database
                        request.query(query, function (err, res) {
                          if (err) {
                                     console.log("Error while querying database :- " + err);
                                   console.log(err);
                                    }
                                    else {
                                      console.log(res);
                                           }
                              });
                      }
     });           
}

function agregar(articulo,precio) {

            console.log(articulo + " WALTERFACK")
            console.log(precio + "affa")


        var res = "Respuesta"
        var query = (`insert into Articulos(Nombre,Precio) values('${articulo}', ${precio})`);
        executeQuery (res, query);
}


async function buscar(id) {
    let articulo = "No se encontro LA ID ES "+id;
    try{
    
        await msssql.connect(db.config)
        const result = await mssql.query`select IdArticulo, Nombre, Precio from Articulos where IdArticulo = ${id}`

        if (result.rowsAffected[0] > 0)
            articulo = result.recordset[0]
    }
    catch (err) {
        console.log(err)
    }
    return articulo
}

async function listar() {
    let articulos = []
    try {
        await msssql.connect(db.config)

        const result = await msssql.query('select IdArticulo, Nombre,Precio from Articulos')

        articulos = result.recordset       
    } catch (err) {
        console.log(err)
    }
    return articulos
}

async function modificar(nueva) {
    let modificado = false;
    console.log("llega esto:" + nueva.precio + "y" + nueva.nombre + "y" + nueva.id)

   
    try
    {    
        await msssql.connect(db.config)
        const result = await msssql.query(`update Articulos set Precio = ${nueva.precio}, Nombre ='${nueva.nombre}' where IdArticulo = ${nueva.id}`)

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
        await msssql.connect(db.config)
        const result = await msssql.query`delete Articulos where Nombre =(${id})`

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
exports.buscar = buscar
exports.listar = listar
exports.borrar = borrar
exports.modificar = modificar