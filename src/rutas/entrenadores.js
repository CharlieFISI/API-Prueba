const app = require("../app.js")
const conexion = require("../conexion.js")
//Entrenadores
app.get('/api/visualizacion_plan/v1/planes', (req, res) => {
    const sql = "SELECT * FROM entrenadores"

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
app.get('/api/visualizacion_plan/v1/planes/:id', (req, res) => {
    const {id } = req.params
    const sql = `SELECT * FROM plan WHERE idPlan = ${id}`
    
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