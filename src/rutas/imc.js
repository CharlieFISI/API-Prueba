const app = require("../app.js")
const conexion = require("../conexion.js")
//IMC
app.get('/imc', (req, res) => {
    const sql = "SELECT * FROM imc"

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
app.get('/imc/cliente/:id', (req, res) => {
    const {id } = req.params
    const sql = `SELECT * FROM imc WHERE idcliente = ${id}`
    
    conexion.query(sql, (e, results) => {
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
app.post('imc/cliente/agregar', (req, res) =>{
    const sql = "INSERT INTO producto SET ?"
    const productoObj = {
        Peso: req.body.Peso,
        Altura: req.body.Fecha,
        idcliente: req.body.idcliente       
    }

    conexion.query(sql, productoObj, e => {
        if(e){
            throw e
        }
        res.send("IMC añadido")
    })
})