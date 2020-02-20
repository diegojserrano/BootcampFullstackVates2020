# Resumen Clase 3: Repaso de Javascript

## Uso de la consola del navegador
* Creación y consulta de variables

```
        var x = 65;
        undefined

        x
        65

        x * x
        4225
```

## Arreglos
* Declaración, inicialización, acceso, recorridos.

```
        var x = [];
        undefined

        x
        []length: 0__proto__: Array(0)

        x  = [1,2,3,4,5,6]
        (6) [1, 2, 3, 4, 5, 6]
        length: 6__proto__: Array(0)

        x[2]
        3

        v = [2,43,65,4,3,4,6,8,6,89,4,3,56,7,54]
        (15) [2, 43, 65, 4, 3, 4, 6, 8, 6, 89, 4, 3, 56, 7, 54]

        suma = 0; 
        for (i = 0; i < 15; i++) { 
            suma += v[i]; 
        }
        354
```

* Inserción y eliminación. Métodos pop, push, shift, unshift, delete, splice, slice.

```
        x.push(9)
        7

        x
        (7) [1, 2, 3, 4, 5, 6, 9]
        length: 7__proto__: Array(0)

        x.pop()
        9

        x
        (6) [1, 2, 3, 4, 5, 6]
        length: 6__proto__: Array(0)

        x.pop()
        6

        x.pop()
        5

        x.pop()
        4

        x
        (3) [1, 2, 3]

        x.shift()
        1

        x
        (2) [2, 3]

        x.unshift(-2)
        3

        x
        (3) [-2, 2, 3]

        x[2] = 4
        4

        x
        (3) [-2, 2, 4]

        x[10] = 8
        8

        x
        (11) [-2, 2, 4, empty × 7, 8]
```

* indexOf, lastIndexOf.

## Funciones como first class objects
* Variables de tipo función.

```
        // función
        function duplicar(m) {
        return m * 2;
        }
        undefined

        duplicar(23)
        46

        // variable cuyo contenido es una función
        duplicar = function(m) {
        return m*2;
        }

        duplicar(34)
        68
```

* Funciones que reciben funciones como parámetros.

```
        duplicar_mostrar = function(x) { console.log(x*2); }

        duplicar_mostrar(23)
        46

        // forEach recibe como parámetro una función
        v.forEach(duplicar_mostrar)
        4
        86
        130
        8
        6
        8
        12
        16
        12
        178
        8
        6
        112
        14
        108

        // Recorrido equivalente con programación estructurada
        for (var i=0; i < v.length; i++) {
            duplicar_mostrar(v[i]);
        }
```


* Funciones que retornan funciones.
* Funciones lambda, arrow functions.
* Closures

## Recorridos de arreglos
* foreach
* map

```
        // Con una función como parámetro
        v.map(duplicar)
        (15) [4, 86, 130, 8, 6, 8, 12, 16, 12, 178, 8, 6, 112, 14, 108]
        
        v.map(duplicar).map(duplicar)
        (15) [8, 172, 260, 16, 12, 16, 24, 32, 24, 356, 16, 12, 224, 28, 216]
```

* filter

```
        mayor_100 = function(x) {
            return (x > 100);
        }
       
        v.filter(mayor_100)
        []

        v.push(100,329,101,344);
        19

        v.filter(mayor_100)
        (3) [329, 101, 344]

        cuadrado = function(x) { return x*x}

        v.map(cuadrado).filter(mayor_100)
        (9) [1849, 4225, 7921, 3136, 2916, 10000, 108241, 10201, 118336]

        //Con funciones anónimas (arrow functions)
        
        // Calcular el doble de todos los valores del vector
        v.map((x) => { return x*2 });
        (19) [4, 86, 130, 8, 6, 8, 12, 16, 12, 178, 8, 6, 112, 14, 108, 200, 658, 202, 688]

        v.map((x) => x*2);
        (19) [4, 86, 130, 8, 6, 8, 12, 16, 12, 178, 8, 6, 112, 14, 108, 200, 658, 202, 688]

        // Calcular el cuadrado de todos los elementos del vector
        v.map((x) => x*x);
        (19) [4, 1849, 4225, 16, 9, 16, 36, 64, 36, 7921, 16, 9, 3136, 49, 2916, 10000, 108241, 10201, 118336]

        v.map(x => x*x);
        (19) [4, 1849, 4225, 16, 9, 16, 36, 64, 36, 7921, 16, 9, 3136, 49, 2916, 10000, 108241, 10201, 118336]

        v.map(x => x*x).filter(x => x > 100);
        (9) [1849, 4225, 7921, 3136, 2916, 10000, 108241, 10201, 118336]
```

* reduce, reduceRight
* sort
* some, every

```
        // ¿Hay algún elemento mayor que 100?
        v.some(mayor_100)
        true

        // ¿Hay algún elemento par?
        v.some(x => x %2==0)
        true

        // ¿Son todos pares?
        v.every(x => x %2==0)
        false
```

* find, findIndex

## Programación asincrónica
* Promises. Callbacks. then(), catch().

```
        new Promise((resolve, reject) => {
            // Ejecutar la tarea larga
            // Si sale todo bien, ejecutar resolve
            // Si algo sale mal, ejecutar reject
            // Tanto resolve como reject reciben un parametro con información
            setTimeout(() => {resolve(1000)},4000);
        }).then(resultado => console.log("Termino ok: " + resultado ));
```

* Async / await 

```
function tarea_lenta() {
    return new Promise((resolve) => setTimeout(() => {resolve(1000)},4000));
}

async function iniciar() {
    resultado = await tarea_lenta();
    console.log("Termino ok: " + resultado );
}

iniciar()
```


## JSON
* Creación de objetos.
* Clases.
* JSON. Sintaxis. Diferencia con los diccionarios.
* JSON.parse(), JSON.stringify().

```
        persona1 = { nombre: "Juan", apellido: "Perez"  }
        {nombre: "Juan", apellido: "Perez"}

        persona1.nombreCompleto = function() { return this.nombre + this.apellido}

        persona1.nombreCompleto()
        "JuanPerez"

        persona2 = { nombre: "Marcelo", apellido: "Gomez",edad:20  }
        {nombre: "Marcelo", apellido: "Gomez", edad: 20}

        plantel = [persona1, persona2]
        0: {nombre: "Juan", apellido: "Perez", nombreCompleto: ƒ}
        1: {nombre: "Marcelo", apellido: "Gomez", edad: 20}
        length: 2
        __proto__: Array(0)

        plantel.filter(p => p.apellido == "Perez")
        0: {nombre: "Juan", apellido: "Perez", nombreCompleto: ƒ}
        length: 1
        __proto__: Array(0)

        plantel.filter(p => p.apellido == "Perez").map(p => p.nombre)
        ["Juan"]

        JSON.stringify(persona1)
        "{"nombre":"Juan","apellido":"Perez"}"

        JSON.stringify(persona2)
        "{"nombre":"Marcelo","apellido":"Gomez","edad":20}"
```
