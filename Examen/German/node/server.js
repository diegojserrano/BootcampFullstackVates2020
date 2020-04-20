let express = require('express')
let artRouter = require('./router/routerArt')
var bodyParser = require('body-parser')

var app = express();

app.use(bodyParser.urlencoded ({ extended:false }))
app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Header", "Origin, X-Request-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
    next();
});
app.use("/articulos", artRouter.router)
var server = app.listen(8002, function(){
    console.log("Servido Conectado");
});