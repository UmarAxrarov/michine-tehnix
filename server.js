// JS FR
const express = require("express");
const { config } = require("dotenv");
const { join } = require("node:path");
const productsRoute = require("./src/routes/products.route");
// JS
const app = express();
config();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.set("views", join(process.cwd(), 'src', "views"));

app.use("/api/v1", productsRoute);

app.listen(+process.env.PORT, () => console.log(`Server runing on ${process.env.PORT} port`));