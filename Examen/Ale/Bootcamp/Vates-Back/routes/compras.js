let express = require('express')
let compras = require('../gestores/compras');
var bodyParser = require('body-parser')


let router = express.Router()

router.use(bodyParser.urlencoded({ extended: false }))


//------------ANOTACION------------//
/*
 * ARTICULOS
 */

//==================
// Listar Articulos
//==================
router.get('/', async(req, res) => {

    listado = await compras.listarArticulos()
    res.setHeader("Content-Type", "application/json")
    res.send(listado)

})

//==================
// Agregar Articulo
//==================
router.post("/agregarArticulo", async(req, res) => {


    nombre = req.body.nombre
    precio = req.body.precio

    if (nombre != undefined && precio != undefined) {
        articulo = {
            nombre: nombre,
            precio: Number(precio)
        }
        let resultado = await compras.agregar(nombre, precio)

        if (resultado = 1) {
            res.status(201).json({
                message: 'Se agrego correctamente',
                articulo
            })
        }

    } else {
        res.status(400)
        res.send("Faltan datos obligatorios")
    }
    res.end()


});
//==================
// Agregar Compra
//==================
router.post("/nuevaCompra", async(req, res) => {


    IdArticulo = req.body.IdArticulo
    Cantidad = req.body.Cantidad

    if (IdArticulo != undefined && Cantidad != undefined) {
        compra = {
            IdArticulo: Number(IdArticulo),
            Cantidad: Number(Cantidad)
        }
        let resultado = await compras.nuevaCompra(IdArticulo, Cantidad);

        if (resultado = 1) {

            // res.status(201)
            // res.send(resultado)
            res.status(201).json({
                message: 'Se agrego correctamente la compra',
                compras
            })
        }

    } else {
        res.status(400)
        res.send("Faltan datos obligatorios")
    }
    res.end()


});
//==================
// Editar
//==================

router.put("/ModificarArticulo", async(req, res) => {

    id = req.body.id
    nombre = req.body.nombre

    if (id && nombre) {
        articulo = {
            id: id,
            nombre: nombre
        }
        let respuesta = await compras.modificar(articulo)

        if (respuesta) {
            res.status(201).json({
                message: 'Se modifico correctamente',
                articulo
            })
        }
    } else {
        res.status(400)
        res.send("Faltan datos obligatorios")
    }
    res.end()

});

//==================
// Borrar
//==================

router.delete("/borrar/:id", async(req, res) => {

    let id = req.params.id;

    let respuesta = await compras.borrar(id)
    if (respuesta) {
        res.status(201).json({
            ok: true,
            message: `El ID: ${id} se borro correctamente`
        })
    } else {
        res.status(500).json({
            ok: false,
            message: 'Error al eliminar de la BD o el ID no existe'
        })
    }

    res.status(respuesta).end()

});


//------------ANOTACION------------//
/*
 * COMPRAS
 */

router.get('/listadoTotal', async(req, res) => {

    listado = await compras.listar()
    res.setHeader("Content-Type", "application/json")
    res.send(listado)

});

//------------ANOTACION------------//
/*
 * - Listado de articulos con las siguientes columnas:    
  - Nombre del articulo      
  - Cantidad de ventas     
  - Total facturado  
  El listado debe estar ordenado por total facturado en orden descendente (el que mas facturó primero). 
  Todo articulo con menos de 5 ventas debe aparecer de color rojo.
 */

//==================
// Reporte
//==================
router.get('/Reporte', async(req, res) => {

    report = await compras.reporte()
    res.setHeader("Content-Type", "application/json")
    res.send(report)

})


exports.router = router