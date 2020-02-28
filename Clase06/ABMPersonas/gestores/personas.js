let sql = require('mssql')
let db = require('../config/db')

personas = []

function agregar(nueva) {
    personas.push(nueva)
}

function buscar(id) {
    return personas.find(x => x.id == id)
}

async function listar() {
    let personas = []
    try {
        // make sure that any items are correctly URL encoded in the connection string
        console.dir(db.config)
        await sql.connect(db.config)

        //await sql.query`insert into personas values ('Otro')`
        const result = await sql.query('select id, nombre from personas')

        personas = result.recordset       
        //console.dir(personas)        
        
    } catch (err) {
        console.log(err)
        // ... error checks
    }
    //console.dir(personas)
    return personas
}

function reemplazar(persona) {
    let pos = personas.indexOf(x => x.id == id)
    if (pos != -1)
        personas[pos] = persona
}

function borrar (id) {
    let pos = personas.indexOf(x => x.id == id)
    if (pos != -1)
        personas.splice(pos,1)
}


exports.agregar = agregar
exports.buscar = buscar
exports.listar = listar
exports.borrar = borrar
exports.reemplazar = reemplazar