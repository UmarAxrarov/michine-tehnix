// JS FR
const query = require("../data/pg");
// JS
exports.getProducts = async function (req,res) {
    try {
        const products = await query("select * from products;");
        res.send(products);
    } catch (error) {
        console.log(error.message);
    }
}
exports.createProduct = async function (req,res) {
    try {
        const {name, price, count} = req.body;
        const product = await query(
            `
                insert into products(name,price,count)
                values ($1,$2,$3) returning *
            `,
            [name,price,count]
        );
        res.status(200).send(product);
    } catch (error) {
        console.log(error.message);
    }
}