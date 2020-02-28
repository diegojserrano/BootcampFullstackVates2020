let express = require('express')
let router_personas = require('./routers/personas')
let bodyParser = require('body-parser')

let app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use("/personas",router_personas.router)

app.listen(8000)