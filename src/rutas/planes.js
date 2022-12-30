const app = require("../app.js")
const conexion = require("../conexion.js")
//Planes
app.get('/planes', (req, res) => {
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
app.get('/planes/:id', (req, res) => {
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