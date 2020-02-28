
let http = require('http')
let express = require('express')
let personas = require('./personas')
var bodyParser = require('body-parser')


let visitas = 0
let app = express()

app.use(bodyParser.urlencoded({ extended: false }))

personas.agregar({id:1, nombre:"Juan"})
personas.agregar({id:2, nombre:"Pedro"})


app.get("/", (req, res) => { res.send("Raiz") })

app.get("/listado", (req, res) => { 
    res.setHeader("Content-Type","application/json")
    res.send(JSON.stringify(personas.listar())) 
})

app.get("/:id", (req, res) => { 
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

app.post("/", (req,res) => {
    
    id = req.body.id
    nombre = req.body.nombre

    if (nombre) { 
        nueva = {id: id, nombre: nombre}
        personas.agregar(nueva)
        //res.status(201)
        res.status(303)
        res.setHeader("Location","/" + id)
    }
    else {
        res.status(400)
        res.send("Faltan datos obligatorios")
    }
    res.end()
})

app.delete("/:id", (res,req) => {
   personas.borrar(id)
   res.end()
})
app.listen(8000)