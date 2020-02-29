let sql = require('mssql')

let config = {
user: 'sa',
password: 'sa2K17docker',
server: '10.0.0.215',
database: 'prueba',
connectionTimeout: 30000
}


async function listar_personas() {
await sql.connect(config)
    let result = await sql.query("select id as numero, nombre from personas")
    console.log(result)
    for(fila of result.recordset)
    {
        console.log(fila.nombre)
    }
}


listar_personas()