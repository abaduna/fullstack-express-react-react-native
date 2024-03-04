const express = require("express");
const database = require("../database");
const routerVentas = express.Router();

routerVentas.get("/ventas", async (req, res) => {
  const conection = await database.getConnection();
  try {
    const result = await conection.query("SELECT * FROM sale;");
    res.status(200).json({ data: result });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

routerVentas.post("/ventas", async (req, res) => {
  const { title, price } = req.body;

  console.log(req.body);
  const conection = await database.getConnection();
  try {
    await conection.query("INSERT INTO sale (title,price) VALUES(?,?)", [
      title,
      price,
    ]);
    res.status(201).json({ message: "Venta insertada con exito" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
});
routerVentas.delete("/ventas/:id", async (req, res) => {
  const id = req.params.id;
  const conection = await database.getConnection();
  try {
    await conection.query("DELETE FROM sale WHERE ID =?", [id]);
    res.status(201).json({ message: "eliminado con exito" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

module.exports = routerVentas;
