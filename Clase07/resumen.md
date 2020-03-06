# Introducción a Angular

## Instalación
* npm install -g @angular/cli

## Lenguaje Typescript
* Typescript es un superset de Javascript.
* No es interpretado por los navegadores, por lo tanto requiere un paso de transpilación.
* Typescript agrega tipado explicito, hace obligatoria la POO, agrega interfaces y anotaciones, entre otras cosas.

## Como se programa un sitio con angular

* El sitio se compone de un conjunto de componentes que se ensamblan para formas las páginas.
* Cada componente es un elemento visual de la página.
* El centro de todo es programar los componentes.
* Los componentes pueden ser tan pequeños como una fila de una tabla o tan grandes como toda la página.
* Los componentes se anidan, un componente puede contener a otro u otros. Toda la aplicación es un componente, cada "pantalla" es otro, cada formulario, cada tabla y hasta cada fila de tabla son otros componentes.
* Cada componente es un conjunto de tres elementos:
  * Una plantilla html
  * Una clase Javascript (o Typescript)
  * Una hoja de estilos

## Creación de un proyecto

* Con una terminal moverse al directorio PADRE (no crear uno para el proyecto)
* ng new (responder las preguntas y esperar...)


## Ejecución
* ng serve
* con --port se puede cambiar el puerto, por defecto es 4200
* con --open se abre el navegador por defecto apenas arranca el servidor
* Si usamos Visual Studio Code estas opciones aparecen en "NPM Scripts"

## Binding
* En el template se pueden enlazar los atributos y los métodos de la clase del componente
* Binding de atributos: {{ atributo }}
* Binding de eventos: (evento) = "metodo()"








