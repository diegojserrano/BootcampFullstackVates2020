let express = require('express')
var bodyParser = require('body-parser')
let compras = require('../gestor/compras')

let router = express.Router()
router.use(bodyParser.urlencoded({ extended: false }))



//***** Listado total - Compras *****//

router.get("/listadoCompras", async(req, res) => {
    
    list = JSON.stringify(await compras.listar())
    res.setHeader("Content-Type", "application/json")
    res.send(list)
})

//***** Nueva compra *****//

router.post("/nuevaCompra", async(req, res) => {
    // console.log(req.body)
   // console.log(req.params)
   IdArticulo = req.body.IdArticulo
    Cantidad = req.body.Cantidad

    if (IdArticulo && Cantidad) {
        nuevaCompra = { IdArticulo: IdArticulo, Cantidad: Cantidad }
        IdArticulo = await compras.agregarCompra(nuevaCompra)
        Cantidad = await compras.agregarCompra(nuevaCompra)
        res.status(303)
        res.setHeader("Location", `/compras/${IdArticulo},${Cantidad}`)
    }
    else {
        res.status(400)
        res.send("Faltan datos obligatorios")
    }
    res.end()
})

//***** Nuevo articulo *****//

router.post("/nuevoArticulo", async(req, res) => {
    // console.log(req.body)
   // console.log(req.params)
    Nombre = req.body.Nombre
    Precio = req.body.Precio

    if (Nombre && Precio) {
        nuevoArt = { Nombre: Nombre, Precio: Precio }
        Nombre = await compras.agregarArticulo(nuevoArt)
        Precio = await compras.agregarArticulo(nuevoArt)
        res.status(303)
        res.setHeader("Location", `/compras/${Nombre},${Precio}`)
    }
    else {
        res.status(400)
        res.send("Faltan datos obligatorios")
    }
    res.end()
})

//***** Editar Articulo *****//

router.put("/", async(req, res) => {
    id = req.body.id
    nombre = req.body.nombre

    if(id && nombre) {
        nueva = { id: id, nombre: nombre }
        let respuesta = (await compras.editar(nueva))? 200 : 404
        res.status(respuesta).end()
    } else {
        res.status(400)
        res.send("Faltan datos obligatorios")
    }
})

//***** Eliminar *****//

router.delete("/:id", async (req,res) => {

    let respuesta = (await compras.borrar(req.params.id))? 200: 404
    res.status(respuesta).end()

})

//***** Listado de Articulos - Reporte (Ejercicio ultima clase) *****//

router.get("/reporte", async(req, res) => {
    
    reporte = JSON.stringify(await compras.reporte())
    res.setHeader("Content-Type", "application/json")
    res.send(reporte)
})


exports.router = router