import mysql from 'mysql2/promise';
import dotenv from 'dotenv'
dotenv.config()

const pool = await mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
});

export async function getData() {

    const data = await pool.execute(`SELECT * FROM list`)
    return data[0];

}

export async function addData(content) {

    const data = await pool.execute(`
        INSERT INTO list (content)
        VALUES(?)`, [content])

}
const adding = await addData('meet vaish on monday');
const data = await getData();
console.log(data)