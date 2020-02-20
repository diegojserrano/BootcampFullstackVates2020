persona1 = { nombre: "Juan", apellido: "Perez"  }
persona1.nombreCompleto = function() { return this.nombre + this.apellido}
console.log(persona1.nombreCompleto())
persona2 = { nombre: "Marcelo", apellido: "Gomez",edad:20  }
plantel = [persona1, persona2]
console.log(plantel.filter(p => p.apellido == "Perez"))
console.log(plantel.filter(p => p.apellido == "Perez").map(p => p.nombre))
console.log(JSON.stringify(persona1))
console.log(JSON.stringify(persona2))
console.log(JSON.stringify(plantel))