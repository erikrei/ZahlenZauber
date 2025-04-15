import { PoolConnection } from "mysql2/typings/mysql/lib/PoolConnection"
import { connection } from "../config/db_connection"

const truncateUsersTable = (): Promise<String> => {
    return new Promise((resolve, reject) => {
        connection.getConnection((err, poolConnection: PoolConnection) => {
            poolConnection.query("TRUNCATE TABLE users;", ((err, result) => {
                poolConnection.release();

                if (err) return reject(err.code);
                return resolve("TABLE `zahlenzauber_db.users` wurde zurückgesetzt.");
            }))
        })
    })
}

export default {
    truncateUsersTable
}