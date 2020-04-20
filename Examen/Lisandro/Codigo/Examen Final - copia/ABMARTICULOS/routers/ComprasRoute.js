
let express = require('express')
let Compras = require('../gestores/Compras')
var bodyParser = require('body-parser')

let router = express.Router()

router.use(bodyParser.urlencoded({ extended: false }))

router.get("/", async (req, res) => { 

    texto = JSON.stringify(await Compras.listar())
    res.setHeader("Content-Type","application/json")
    res.send(texto) 

})
router.get("/Reporte", async(req, res) => {
    console.log("sdsdsdssdsd")
    texto = JSON.stringify(await Compras.reportefinal())
    res.setHeader("Content-Type","application/json")
    res.send(texto) 

})

router.get("/:id", async (req, res) => { 
    id = req.params.id
    console.log("DUKETOOO")

    res.setHeader("Content-Type","application/json")
    let encontrado = await Compras.buscar(id)
    console.log(encontrado)
    if (encontrado == undefined) {
        res.status(404)
        res.end();
    }
    else 
        res.send(JSON.stringify(encontrado)) 

    })

router.post("/", function (req,res)  {
    console.log("datos:"+req.body.IdArticulo + req.body.Cantidad)
    Compras.agregar(req.body.IdArticulo,req.body.Cantidad)

})

router.put("/", async (req,res) => {

    id = req.body.id
    nombre = req.body.nombre

    if (id && nombre) { 
        nueva = {id: id, nombre: nombre}
        let respuesta = (await Compras.modificar(nueva))? 200: 404
        res.status(respuesta).end()
    }
    else {
        res.status(400)
        res.send("Faltan datos obligatorios")
    }

})

router.delete("/:id", async (req,res) => {
          console.log("ANTES DE PASARLOS"+ req.body.id)
          console.log("ANTES DE Raquetasp"+ req.params.id)
    let respuesta = (await Compras.borrar(req.params.id))? 200: 404
    res.status(respuesta).end()

})



exports.router = router