const app = require("../app.js")
const conexion = require("../conexion.js")
//Sesiones
app.get('/api/tienda_virtual/v1/sesiones/:id', (req, res) => {
    const {id } = req.params
    const sql = `SELECT compraxsesiones.idSesionesPersonalizadas, compraxsesiones.idCompra, fechasesiones.Fecha, sesiones_personalizadas.idEntrenador FROM compraxsesiones LEFT JOIN compra ON compraxsesiones.idCompra = compra.idCompra RIGHT JOIN sesiones_personalizadas ON compraxsesiones.idSesionesPersonalizadas = sesiones_personalizadas.idSesiones_Personalizadas LEFT JOIN fechasesiones ON fechasesiones.idPersonalizadas = sesiones_personalizadas.idSesiones_Personalizadas WHERE idcliente = ${id}`

    conexion.query(sql, (e, results)=>{
        if(e){
            throw e
        }
        if(results.length > 0){
            res.json(results)
        }else{
            res.send("Sin resultados")
        }
    })
})
app.post('/api/tienda_virtual/v1/sesiones/asignar', (req, res) => {
    const sql = "INSERT INTO sesiones_personalizadas SET ?"
    const productoObj = {
        idEntrenador: req.body.idEntrenador
    }

    conexion.query(sql, productoObj, e => {
        if(e){
            throw e
        }
        res.send("Entrenador a sesion añadida")
    })
})
app.post('/api/tienda_virtual/v1/sesiones/fecha', (req, res) => {
    const sql = "INSERT INTO fechasesiones SET ?"
    const productoObj = {
        idPersonalizadas: req.body.idPersonalizadas,
        Fecha: req.body.Fecha
    }

    conexion.query(sql, productoObj, e => {
        if(e){
            throw e
        }
        res.send("Fecha de sesion añadida")
    })
})