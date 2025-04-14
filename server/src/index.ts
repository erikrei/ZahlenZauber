import express from 'express';
import 'dotenv/config';
import { connection } from './db_connection';

const app = express();
const port = process.env.SERVER_PORT;

app.listen(port, () => {
    console.log(`Server verbunden auf Port :${port}`);
    connection.getConnection((err) => {
        if (err) return console.log(err);
        console.log("Erfolgreich mit MYSQL-Datenbank verbunden.")
    }) 
})