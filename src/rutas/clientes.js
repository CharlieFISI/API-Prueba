const app = require("../app.js")
const conexion = require("../conexion.js")
//Clientes
app.post('/api/registro/v1/usuario', (req, res) =>{
    const sql = "INSERT INTO clientes SET ?"
    const productoObj = {
        DNI: req.body.DNI,
        Nombre: req.body.Nombre,
        Telefono: req.body.Telefono,
        Correo: req.body.Correo,
        Contrasenia: req.body.Contrasenia        
    }

    conexion.query(sql, productoObj, e => {
        if(e){
            throw e
        }
        res.send("Usuario añadido")
    })
})
app.get('/api/inicio_sesion/v1/usuario', (req, res) =>{
    const {Correo, Contrasenia} = req.query
    const sql = `SELECT Correo, Contrasenia FROM clientes WHERE Correo = "${Correo}" AND Contrasenia = "${Contrasenia}"`

    conexion.query(sql, (e, results) => {
        if(e){
            throw e
        }if(results.length > 0){
            res.send("1")
        }else{
            res.send("0")
        }
    })
})
app.get('/api/recuperar/v1/usuario/email', (req, res) =>{
    const {Correo} = req.query
    const sql = `SELECT DNI FROM clientes WHERE Correo = "${Correo}"`

    conexion.query(sql, (e, results) => {
        if(e){
            throw e
        }if(results.length > 0){
            res.json(results[0])
        }else{
            res.send("Correo no encontrado")
        }
    })
})
app.put('/api/recuperar/v1/usuario/:id', (req, res) => {
    const { id } = req.params
    const {Contrasenia} = req.query
    const sql = `UPDATE clientes SET Contrasenia = "${Contrasenia}" WHERE DNI = ${id}`

    conexion.query(sql, e => {
        if(e){
            throw e
        }
        res.send("Contraseña actualizada")
    })
})
app.get('/api/visualizacion_plan/v1/usuario', (req, res) => {
    const {Correo} = req.query
    const sql = `SELECT clientes.DNI, clientes.Nombre, planesxcliente.fechainicio, planesxcliente.fechafin, planesxcliente.estado, plan.NombrePlan FROM clientes RIGHT JOIN planesxcliente ON planesxcliente.idcliente = clientes.DNI LEFT JOIN planesxcompra ON planesxcompra.idplanesxcompra = planesxcliente.idplanescompra LEFT JOIN plan ON planesxcompra.idPlan = plan.idPlan WHERE clientes.Correo = "${Correo}"`

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
app.put('/api/visualizacion_plan/v1/usuario/meta/:id/:Meta', (req, res) => {
    const { id } = req.params
    const {Meta} = req.params
    const sql = `UPDATE clientes SET Meta = "${Meta}" WHERE DNI = ${id}`

    conexion.query(sql, e => {
        if(e){
            throw e
        }
        res.send("Meta del usuario actualizado")
    })
})
/*app.get('/api/inicio_sesion/v1/usuario', (req, res) => {
    const sql = "SELECT Correo, Contrasenia FROM clientes"

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
})*/