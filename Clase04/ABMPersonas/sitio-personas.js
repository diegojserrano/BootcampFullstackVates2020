
let http = require('http')
let express = require('express')
let personas = require('../Pruebas/personas')

let visitas = 0
let app = express()
personas.agregar({id:1, nombre:"Juan"})
personas.agregar({id:2, nombre:"Pedro"})



app.get("/", (req, res) => { res.send("Raiz") })

app.get("/listar", (req, res) => { res.send(JSON.stringify(personas.listar())) })

app.get("/buscar/:id", (req, res) => { 
    id = req.params.id
    res.send(JSON.stringify(personas.buscar(id))) 
})
app.get("/agregar", (req,res) => {
    id = req.query.id
    nombre = req.query.nombre

    nueva = {id: id, nombre: nombre}
    personas.agregar(nueva)
    res.send("Persona agregada correctamente")
})
app.post("/agregar", (req,res) => {
    
    id = req.body.id
    nombre = req.body.nombre

    nueva = {id: id, nombre: nombre}
    personas.agregar(nueva)
    res.send("Persona agregada correctamente")
})

app.listen(8000)