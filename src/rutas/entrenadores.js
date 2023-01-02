const app = require("../app.js")
const conexion = require("../conexion.js")
//Entrenadores
app.get('/api/visualizacion_plan/v1/entrenador', (req, res) => {
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
app.get('/api/visualizacion_plan/v1/entrenador/:id', (req, res) => {
    const {id } = req.params
    const sql = `SELECT entrenadores.id_entrenador, entrenadores.dni, personal.Nombre, personal.Telefono, personal.img_perso FROM entrenadores LEFT JOIN personal ON entrenadores.dni = personal.dni_personal WHERE dni = ${id}`
    
    conexion.query(sql, (e, results) => {
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