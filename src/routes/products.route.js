// JS FR
const { Router } = require("express");
const { getProducts, createProduct } = require("../controllers/products.controller");
// JS
const productsRoute = Router();
productsRoute.get("/products", getProducts);
productsRoute.post("/products", createProduct);
module.exports = productsRoute;