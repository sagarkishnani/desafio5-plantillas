const express = require("express");
const ProductosApi = require("../api/productos.js");

const productosApi = new ProductosApi();

const app = express();

app.use(express.urlencoded({ extended: true }));

app.set("views", "./views");
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("formulario");
});

app.get("/productos", (req, res) => {
  const productos = productosApi.listarAll();
  const productosLength = productos.length > 0;
  res.render("productos", { productos, productosLength });
});

app.post("/productos", (req, res) => {
  const productos = req.body;
  res.redirect("/");
  res.send(productosApi.guardar(productos));
});

app.listen(8080);
