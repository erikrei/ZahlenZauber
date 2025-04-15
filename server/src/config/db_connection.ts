import { createPool } from "mysql2"

export const connection = createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    port: Number(process.env.MYSQL_PORT),
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.MYSQL_DATABASE
})
