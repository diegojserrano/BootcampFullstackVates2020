let http =  require("http")

let visitas = 0

http.createServer((request, response) => {
    if (request.url === "/contar") {
        visitas++
        response.end()
    } 
    else if (request.url === "/consultar")
    {    response.end("<h1>Hola, sos el visitante " + visitas 
        +  "Pediste " + request.url + "</h1>")
    }
    else { 
        response.end ("<h1>Direccion incorrecta</h1>")
    }
    console.log("recibi un pedido a " +request.url )
}).listen(8001)


