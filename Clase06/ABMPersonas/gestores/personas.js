let sql = require('mssql')
let db = require('../config/db')

personas = []

async function agregar(nueva) {
    let nuevoId = 0;
    try{
        await sql.connect(db.config)
        const result = await sql.query`insert into personas values(${nueva.nombre})`

        if (result.rowsAffected[0] > 0) {
            const result2 = await sql.query('select @@identity as nuevoId')
            nuevoId = result2.recordset[0].nuevoId
        }
    }
    catch (err) {
        console.log(err)
    }
    return nuevoId
}


async function buscar(id) {
    let persona = undefined;
    try{
        await sql.connect(db.config)
        const result = await sql.query`select id, nombre from personas where id = ${id}`

        if (result.rowsAffected[0] > 0)
            persona = result.recordset[0]
    }
    catch (err) {
        console.log(err)
    }
    return persona
}

async function listar() {
    let personas = []
    try {
        await sql.connect(db.config)

        const result = await sql.query('select id, nombre from personas')

        personas = result.recordset       
    } catch (err) {
        console.log(err)
    }
    return personas
}

async function modificar(persona) {
    let modificado = false;
    try
    {
        await sql.connect(db.config)
        const result = await sql.query`update personas set nombre = ${persona.nombre} where id = ${persona.id}`

        if (result.rowsAffected[0] > 0) {
            modificado = true
        }
    }
    catch (err) {
        console.log(err)
    }
    return modificado
}

async function borrar (id) {
    let borrado = false;

    try{
        await sql.connect(db.config)
        const result = await sql.query`delete personas where id =(${id})`

        if (result.rowsAffected[0] > 0) {
            borrado = true
        }
    }
    catch (err) {
        console.log(err)
    }
    return borrado
}

exports.agregar = agregar
exports.buscar = buscar
exports.listar = listar
exports.borrar = borrar
exports.modificar = modificar