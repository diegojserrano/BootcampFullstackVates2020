new Promise((resolve, reject) => {
    // Ejecutar la tarea larga
    // Si sale todo bien, ejecutar resolve
    // Si algo sale mal, ejecutar reject
    // Tanto resolve como reject reciben un parametro con información
    setTimeout(() => {resolve(1000)},4000);
}).then(resultado => console.log("Termino ok: " + resultado ));

