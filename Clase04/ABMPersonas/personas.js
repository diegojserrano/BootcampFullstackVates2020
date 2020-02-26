personas = []

function agregar(nueva) {
    if (buscar(nueva.id) == undefined)
        personas.push(nueva)
}

function buscar(id) {
    return personas.find(x => x.id == id)
}

function listar() {
    return personas.slice()
}

exports.agregar = agregar
exports.buscar = buscar
exports.listar = listar