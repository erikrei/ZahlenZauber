import express from 'express';
import 'dotenv/config';
import { connection } from './config/db_connection';
import routes from './routes/route';

const app = express();
const port = process.env.SERVER_PORT;

app.use(express.json());
app.use('/', routes);

app.listen(port, () => {
    console.log(`Server verbunden auf Port :${port}`);
    connection.getConnection((err) => {
        if (err) return console.log(err);
        console.log("Erfolgreich mit MYSQL-Datenbank verbunden.")
    }) 
})