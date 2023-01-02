const app = require("../app.js")
const conexion = require("../conexion.js")
//Productos
app.get('/api/tienda_virtual/v1/tarjeta/:id', (req, res) => {
    const {id } = req.params
    const sql = `SELECT * FROM tarjeta WHERE idcliente = ${id}`

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
app.post('/api/tienda_virtual/v1/tarjeta/agregar/:idcliente', (req, res) => {
    const sql = "INSERT INTO tarjeta SET ?"
    const productoObj = {
        idcliente: req.params.idcliente,
        Numero: req.body.Numero,
        Titular: req.body.Titular,
        Mes: req.body.Mes,
        Anio: req.body.Anio
    }

    conexion.query(sql, productoObj, e => {
        if(e){
            throw e
        }
        res.send("Tarjeta añadida")
    })
})