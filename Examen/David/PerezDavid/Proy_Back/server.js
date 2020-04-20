let express = require('express')
let router_compras = require('./router/compras')
let bodyParser = require('body-parser')

let app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
    next();
})

app.use("/compras", router_compras.router)

app.listen(8000)
