const app = require("../app.js")
const conexion = require("../conexion.js")
//Planes
app.get('/api/tienda_virtual/v1/planes', (req, res) => {
    const sql = "SELECT * FROM plan"

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
app.get('/api/visualizacion_plan/v1/planes/fin/:id', (req, res) => {
    const {id } = req.params
    const sql = `SELECT fechafin FROM planesxcliente WHERE idcliente = ${id}`

    conexion.query(sql, (e, results)=>{
        if(e){
            throw e
        }
        if(results.length > 0){
            res.json(results[0])
        }else{
            res.send("Sin resultados")
        }
    })
})