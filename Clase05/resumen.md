# Clase 5

## API REST

* Modelo cliente servidor con API.
* API REST.
* Protocolo http. Comandos GET, POST, DELETE, PUT, PATCH.


    |  Comando  | Seguridad   | Uso                                                           |
    | --------- | ----------- | --------------------------------------                        | 
    | GET       | Seguro      | Obtener la representación de un recurso                       | 
    | POST      | Inseguro    | Crear un nuevo recurso (aunque se lo usa para todo)           |
    | DELETE    | Idempotente | Borrar un recurso                                             |
    | PUT       | Idempotente | Modificar el estado de un recurso o crear uno sabiendo la URL |
    | PATCH     | Inseguro    | Modificar parte del estado de un recurso                      |

* Códigos de respuesta

  * 1xx: Informacionales
  * 2xx: Satisfactorios
    * 200: OK
    * 201: Created
    * 204: No content
  * 3xx: Redirecciones
    * 301: Moved permanently
    * 303: See other
    * 304: Not modified
  * 4xx: Errores de cliente
    * 400: Bad request
    * 401: Unauthorized
    * 403: Forbidden
    * 404: Not found
    * 409: Conflict
  * 5xx: Errores de servidor
    * 500: Internal server error

## Uso de Postman

* Práctica de postman con el ABM de Personas de la clase 4

## Ejercitación

* Mejorar el ABM de Personas de la clase 4 con los comandos y respuestas más adecuados.
* Probar la nueva API con Postman.

