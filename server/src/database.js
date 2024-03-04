const mysql = require("promise-mysql")

const conection =mysql.createConnection({
    host:"localhost",
    database:"ventas",
    user:"root",
    password:"1234"
})

const getConnection = async ()=>await conection

module.exports = {
    getConnection
}