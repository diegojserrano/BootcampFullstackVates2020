
let express = require('express')
let compras = require('../compras/compras')
var bodyParser = require('body-parser')

let router = express.Router()

router.use(bodyParser.urlencoded({ extended: false }))

router.get("/", async (req, res) => { 

    texto = JSON.stringify(await compras.listar())
    res.setHeader("Content-Type","application/json")
    res.send(texto) 

})


router.get("/total/:id", async (req, res) => { 
    id = req.params.id

    texto = JSON.stringify(await compras.buscarTotal(id))
    res.setHeader("Content-Type","application/json")
    res.send(texto) 

})

router.get("/:id", async (req, res) => { 
    id = req.params.id

    res.setHeader("Content-Type","application/json")
    let encontrado = await compras.buscar(id)
    console.log(encontrado)
    if (encontrado == undefined) {
        res.status(404)
        res.end();
    }
    else 
        res.send(JSON.stringify(encontrado)) 

    })

router.post("/", async (req,res) => {
    
    articulo = req.body.articulo
    cantidad = req.body.cantidad

    if (articulo && cantidad) { 
        nueva = {articulo: articulo ,cantidad: cantidad}
        id = await compras.agregar(nueva)
        res.status(303)
        res.setHeader("Location",`/compras/${id}`)
    }
    else {
        res.status(400)
        res.send("Faltan datos obligatorios")
    }
    res.end()

})

router.put("/", async (req,res) => {

    IdCompra = req.body.IdCompra
    IdArticulo = req.body.IdArticulo
    cantidad = req.body.cantidad

    if (IdCompra && IdArticulo && cantidad) { 
        nueva = {IdCompra: IdCompra, IdArticulo: IdArticulo,cantidad: cantidad}
        let respuesta = (await compras.modificar(nueva))? 200: 404
        res.status(respuesta).end()
    }
    else {
        res.status(400)
        res.send("Faltan datos obligatorios")
    }

})

router.delete("/:id", async (req,res) => {

    let respuesta = (await compras.borrar(req.params.IdCompra))? 200: 404
    res.status(respuesta).end()

})

exports.router = router