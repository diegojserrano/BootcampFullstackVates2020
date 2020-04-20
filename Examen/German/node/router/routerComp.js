let express = require ('express')
let bodyParser = require ('body-parser')
var compr = require ('../gestion/compra')
const { text } = require('express')

let router = express.Router()

router.use(bodyParser.urlencoded({ extended:false }))

router.get("/", async(req,res)=>{
    text = JSON.stringify(await compr.carrito())
    res.setHeader("Content-type","application/json")
    res.send(text)
})