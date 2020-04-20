let express = require('express')
let router_articulos = require('./routers/ArticulosRoute')
let router_Compras = require('./routers/ComprasRoute')
let bodyParser = require('body-parser')

let app = express()

app.use(bodyParser.urlencoded({ extended: false }))
 app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "http://localhost:4200"); // update to match the domain you will make the request from
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
   next();
});
app.use("/Articulos",router_articulos.router)
app.use("/Compras",router_Compras.router)

app.listen(8000)
