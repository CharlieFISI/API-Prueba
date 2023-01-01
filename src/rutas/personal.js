const app = require("../app.js")
const conexion = require("../conexion.js")
//Personal
app.get('/api/contacto/v1/personal', (req, res) => {
    const sql = "SELECT * FROM personal"

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
app.get('/api/contacto/v1/personal/:id', (req, res) => {
    const {id } = req.params
    const sql = `SELECT * FROM personal WHERE dni_personal = ${id}`
    
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