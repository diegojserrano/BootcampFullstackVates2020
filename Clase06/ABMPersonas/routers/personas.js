
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

router.get("/:id", (req, res) => { 
    id = req.params.id
    res.setHeader("Content-Type","application/json")
    encontrado = personas.buscar(id)

    if (encontrado == undefined) {
        res.status(404)
        res.end();
    }
    else 
        res.send(JSON.stringify(encontrado)) 
})

router.post("/", (req,res) => {
    
    id = req.body.id
    nombre = req.body.nombre

    if (nombre) { 
        nueva = {id: id, nombre: nombre}
        personas.agregar(nueva)
        //res.status(201)
        res.status(303)
        res.setHeader("Location",`/personas/${id}`)
    }
    else {
        res.status(400)
        res.send("Faltan datos obligatorios")
    }
    res.end()
})

router.delete("/:id", (res,req) => {
   personas.borrar(id)
   res.end()
})

exports.router = router