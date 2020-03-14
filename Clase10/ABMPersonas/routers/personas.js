
let express = require('express')
let personas = require('../gestores/personas')
var bodyParser = require('body-parser')

let router = express.Router()

router.use(bodyParser.urlencoded({ extended: false }))

router.get("/", async (req, res) => { 

    texto = JSON.stringify(await personas.listar())
    res.setHeader("Content-Type","application/json")
    res.send(texto) 

})

router.get("/:id", async (req, res) => { 
    id = req.params.id

    res.setHeader("Content-Type","application/json")
    let encontrado = await personas.buscar(id)
    console.log(encontrado)
    if (encontrado == undefined) {
        res.status(404)
        res.end();
    }
    else 
        res.send(JSON.stringify(encontrado)) 

    })

router.post("/", async (req,res) => {
    console.log(req.body)
    console.log(req.params)
    nombre = req.body.nombre

    if (nombre) { 
        nueva = {nombre: nombre}
        id = await personas.agregar(nueva)
        res.status(303)
        res.setHeader("Location",`/personas/${id}`)
    }
    else {
        res.status(400)
        res.send("Faltan datos obligatorios")
    }
    res.end()

})

router.put("/", async (req,res) => {

    id = req.body.id
    nombre = req.body.nombre

    if (id && nombre) { 
        nueva = {id: id, nombre: nombre}
        let respuesta = (await personas.modificar(nueva))? 200: 404
        res.status(respuesta).end()
    }
    else {
        res.status(400)
        res.send("Faltan datos obligatorios")
    }

})

router.delete("/:id", async (req,res) => {

    let respuesta = (await personas.borrar(req.params.id))? 200: 404
    res.status(respuesta).end()

})

exports.router = router