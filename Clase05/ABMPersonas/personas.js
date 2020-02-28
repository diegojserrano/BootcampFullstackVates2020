personas = []

function agregar(nueva) {
    personas.push(nueva)
}

function buscar(id) {
    return personas.find(x => x.id == id)
}

function listar() {
    return personas.slice()
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