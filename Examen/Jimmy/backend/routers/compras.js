let express = require('express')
let compras = require('../gestores/compras')
var bodyParser = require('body-parser')

let router = express.Router()

router.use(bodyParser.urlencoded({ extended: false }))

router.get("/", async(req, res) => {

    texto = JSON.stringify(await compras.listar())
    res.setHeader("Content-Type", "application/json")
    res.send(texto)

})

router.get("/articulo", async(req, res) => {

    texto = JSON.stringify(await compras.listaArticulo())
    res.setHeader("Content-Type", "application/json")
    res.send(texto)


})


router.post("/", async(req, res) => {

    console.log(req.body)
    console.log(req.params)
    IdArticulo = req.body.idArticulo
    cantidad = req.body.cantidad

    if (idArticulo) {
        nueva = { idArticulo: IdArticulo, cantidad: cantidad }
        id = await compras.agregar(nueva)
        res.status(303)
            // res.setHeader("Location", `/compras/${id}`)
    } else {
        res.status(400)
        res.send("Faltan datos obligatorios")
    }
    res.end()

})

router.get("/articulosPorVentas", async(req, res) => {

    texto = JSON.stringify(await compras.listadoArticulosPorVentas())
    res.setHeader("Content-Type", "application/json")
    res.send(texto)


})

router.get("/totalFacturados", async(req, res) => {

    texto = JSON.stringify(await compras.totalFacturado())
    res.setHeader("Content-Type", "application/json")
    res.send(texto)


})


exports.router = router