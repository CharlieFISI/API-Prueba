const mysql = require("mysql")
var fs = require('fs');
const serverCA = [fs.readFileSync("DigiCertGlobalRootCA.crt.pem", "utf8")]

const conexion = mysql.createConnection({
    host: "chadgym.mysql.database.azure.com",
    user: "ChadGymApp",
    password: "@carlosoblitas123",
    database: "chadgym",
    port: 3306,
    ssl: {
        rejectUnauthorized: true,
        ca: serverCA
    }
})

conexion.connect(e => {
    if(e){
        throw e
    }
    console.log("Todo bien!")
})

module.exports = conexion