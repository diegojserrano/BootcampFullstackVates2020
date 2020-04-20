
let express = require('express')
let Articulos = require('../gestores/Articulos')
var bodyParser = require('body-parser')
var msssql= require('mssql')
var db = require('../config/db');

let router = express.Router()

router.use(bodyParser.urlencoded({ extended: false }))


router.get("/", async (req, res) => { 

    texto = JSON.stringify(await Articulos.listar())
    res.setHeader("Content-Type","application/json")
    res.send(texto) 

})

router.get("/:id", async (req, res) => { 
    id = req.params.id
    res.setHeader("Content-Type","application/json")
    let encontrado = await Articulos.buscar(id)
    console.log(encontrado)
    if (encontrado == undefined) {
        res.status(404)
        res.end();
    }
    else 
        res.send(JSON.stringify(encontrado)) 

    })
router.post("/", function(req , res){

      Articulos.agregar(req.body.Nombre,req.body.Precio)

});



router.put("/:id", async (req,res) => {

    precio = req.body.Precio
      nombre= req.body.Nombre
      id = req.params.id

    if (precio) { 
        nueva = {precio: precio , id : id, nombre: nombre}
        console.log(nueva)
        let respuesta = (await Articulos.modificar(nueva))? 200: 404
        res.status(respuesta).end()
    }
    else {
        res.status(400)
        res.send("Faltan datos obligatoriosasdasdadsad"+  req.body.Precio )
    }

})

router.delete("/:id", async (req,res) => {

    let respuesta = (await Articulos.borrar(req.params.id))? 200: 404
    res.status(respuesta).end()

})

exports.router = router