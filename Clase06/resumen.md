# Clase 6: Acceso a bases de datos

## Librería para acceder a SQL Server

* Instalar la librería 'mssql'
* El uso de la librería es requiere únicamente establecer una conexión y ejecutar las consultas:

```javascript
	let sql = require('mssql')

	sql.connect('mssql://usuario:contraseña@servidor/base')
	sql.query('select * from tabla')
    
```
* Para usar autenticación integrada de SQL Server, revisar en https://stackoverflow.com/questions/33709807/how-to-connect-to-sql-server-with-windows-authentication-from-node-js-using-mssq

## Operaciones asincrónicas

* Pero todas las operaciones son asincrónicas, así que hay que ejecutarlas con callbacks, promises o await.
* Lo más cómodo es usar await:

```javascript
	async function xxx ()  {
    		try {
		        await sql.connect('conexion')
		        const result = await sql.query('select count(*) as cantidad from personas')
		
	        	return result.recordset[0].cantidad
        
		    } catch (err) {
		        console.log(err)
	   	    }	
	}

	xxx()

```

* Debe recordarse que si se programa una función marcada como async, la llamada debe ser siempre con await.


## Consultas parametrizadas

* Siempre debe evitarse el uso de concatenación para armar las sentencias. Es muy propenso a errores y a la vulnerabilidad conocida como SQL Injection (https://xkcd.com/327/)
* Javascript provee las cadenas con plantillas (template strings)

```javascript
	let nombre = 'Juan'
	let saludo = `Hola ${nombre}`

	console.log(saludo)
```

* Pero las template strings no evitan el SQL Injection porque las variables son "pegadas" directamente, sin ser sanitizadas.
* La última versión de Javascript agrego una funcionalidad llamada tagged template strings, que aplica una función a una template string.
* El método sql.query efectivamente sanitiza los parámetros y luego ejecuta la sentencia:

```javascript
	sql.query`select * from personas where id=${id}`
```



## Consultas que devuelven resultados

* El método query devuelve un objeto con que representa el conjunto de resultados con las filas devueltas por la consulta.
* El objeto devuelto puede examinarse desde la consola con console.dir, y contiene principalmente una propiedad llamada recordset.
* La propiedad recordset es un arreglo de objetos, cada uno de ellos representando una fila, y por cada columna se crea una propiedad.
* Se puede recorrer el arreglo con su propio método forEach o con la instrucción for of.

```javascript
	let resultado = sql.query(...)
	for(let fila of resultado.recordset)
	{
		console.log(fila.columna)
	}
```

* Otra propiedad útil es rowsAffected, que indica la cantidad de filas devueltas por un select o la cantidad de filas modificadas 
por un update, insert o delete. Es un arreglo con un resultado por cada consulta ejecutada en una misma llamada a query.
* Normalmente se ejecuta una consulta sola, por lo tanto se accede a result.rowsAffected[0].


