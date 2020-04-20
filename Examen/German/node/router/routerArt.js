let express = require('express')
let bodyParser = require('body-parser')
var art = require ('../gestion/articulos')

let router = express.Router()

router.use(bodyParser.urlencoded({ extended: true }))

router.get("/", async (req,res)=>{
    text = JSON.stringify(await art.Listar())
    res.setHeader("Content-type","application/json")
    res.send(text)
})
router.post("/", async (req,res) => {
    console.log(req.body)
    console.log(req.params)
    Nombre = req.body.Nombre
    Precio = req.body.Precio

    if (Nombre && Precio) { 
        newArt = {Nombre: Nombre, Precio: Precio }
        IdArticulo = await art.Agregar(newArt)
        res.status(303)
        res.setHeader("Location",`/articulos/${IdArticulo}`)
    }
    else {
        res.status(400)
        res.send("Faltan datos obligatorios")
    }
    res.end()

})
router.put("/", async (req,res)=> {
    IdArticulo = req.body.IdArticulo
    Nombre = req.body.Nombre
    Precio = req.body.Precio

    if(IdArticulo && Nombre && Precio){
        newArt = {IdArticulo: IdArticulo, Nombre: Nombre, Precio: Precio}
        let respuest = (await art.Modificar(newArt))? 200: 404
        res.status(respuest).end()
    }
    else{
        res.status(400)
        res.send("Falta datos obligatorios")
    }
})
router.delete("/", async(req,res)=> {
    let respuest = (await art.Eliminar(req.body.IdArticulo))? 200:404
    res.status(respuest).end()
})
exports.router = router