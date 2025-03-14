// JS FR
const query = require("../data/pg")
// JS
exports.getProducts = async function (req,res) {
    try {
        const products = await query("select * from products;");
        res.send(products);
    } catch (error) {
        
    }
}