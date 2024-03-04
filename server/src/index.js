const express = require("express")
const mysql = require("promise-mysql")
const morgan = require("morgan")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(morgan("dev"))
app.use(express.json())


const routerVentas = require("./Router/router-ventas")

app.use("/api",routerVentas)

app.listen(3001,()=>{
    console.log("run by port 3001");
})