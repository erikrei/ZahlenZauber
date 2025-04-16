import { PoolConnection } from "mysql2/typings/mysql/lib/PoolConnection"
import { connection } from "../config/db_connection"

const truncateUsersTable = (): Promise<string> => {
    return new Promise((resolve, reject) => {
        connection.getConnection((_, poolConnection: PoolConnection) => {
            poolConnection.query("TRUNCATE TABLE users;", ((err, result) => {
                poolConnection.release();

                if (err) return reject(err.code);
                return resolve("TABLE `zahlenzauber_db.users` wurde zurückgesetzt.");
            }))
        })
    })
}

const createUsersTable = (): Promise<string> => {
    return new Promise((resolve, reject) => {
        connection.getConnection((_, poolConnection: PoolConnection) => {
            poolConnection.query(
                `
                CREATE TABLE users (
                    user_id SMALLINT UNSIGNED AUTO_INCREMENT,
                    user_name VARCHAR(20) NOT NULL,
                    user_email VARCHAR(40) NOT NULL,
                    user_password VARCHAR(60) NOT NULL,
                    CONSTRAINT pk_user PRIMARY KEY (user_id),
                    CONSTRAINT uq_user_name UNIQUE (user_name),
                    CONSTRAINT uq_user_email UNIQUE (user_email)
                );  
                `,
                (err) => {
                    if (err) return reject(err.code)
                    return resolve("TABLE `zahlenzauber_db.users` wurde erfolgreich erstellt.")
                }
            )
        })
    })
}

export default {
    truncateUsersTable,
    createUsersTable
}