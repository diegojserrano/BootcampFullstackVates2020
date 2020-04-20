var sql = require ('mssql')
var db = require ('../config/db')

async function carrito(){

    var compra = []

    try{
        await sql.connect(db.config)
        const result = sql.query(`select * from Compras;`)
        compra = result.recordset
    }
    catch(err){
        console.log(err)
    }
}
exports.carrito = carrito;