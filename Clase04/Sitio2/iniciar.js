let http =  require("http")
//let express = require("express")

//let app = express()

let app = require("express")()

app.get("/clientes/agregar")

app.post("/clientes/agregar")


app.get("/", (req, res)=>{
        res.end("<h1>Bienvenido</h1>")
})

app.get("/contar", (req, res)=>{
        visitas++
        res.end()
})

app.get("/asignar/:nuevo", (req, res) => {
    nuevo = parseInt(req.params.nuevo)
    visitas = nuevo     
    res.end()
})

app.get("/consultar", (req,res) =>{
    res.end("<h1>Hola, sos el visitante " + visitas 
    +  "Pediste " + req.url + "</h1>")
})

//app.get("/*", (req, res) => { console.log (req.url); res.end()})

app.listen(8001)


let visitas = 0
