// JS FR
const { Router } = require("express");
const { getProducts } = require("../controllers/products.controller");
// JS
const productsRoute = Router();
productsRoute.get("/products", getProducts);
module.exports = productsRoute;