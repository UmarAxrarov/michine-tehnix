// JS FR
const { Pool } = require("pg");
// JS
const pool = new Pool({
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

async function query(queryString,params) {
    const client = await pool.connect();
    try {
        const { rows } = client.query(queryString,params.length ? params : null);
        return rows;
    } catch (error) {
        console.log(error.message);
    } finally {
        client.release();
    }
}
query("select * from products", []),
query("insert into products(name) values (1$)")
module.exports = query;