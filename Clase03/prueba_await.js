function tarea_lenta() {
    return new Promise((resolve) => setTimeout(() => {resolve(1000)},4000));
}

async function iniciar() {
    resultado = await tarea_lenta();
    console.log("Termino ok: " + resultado );
}

iniciar()