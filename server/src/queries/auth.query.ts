import { PoolConnection } from "mysql2/typings/mysql/lib/PoolConnection"
import { connection } from "../config/db_connection"
import { DBUser, User } from "../model/Auth"
import bcrypt from 'bcryptjs';
import { ResultSetHeader } from "mysql2";

const loginUser = (username: string, password: string): Promise<User> => {
    return new Promise((resolve, reject) => {
        connection.getConnection(
            (err, poolConnection: PoolConnection) => {
                poolConnection.query(
                    "SELECT * FROM users WHERE user_name = ?", 
                    [username], 
                    (err, result) => {
                        poolConnection.release();

                        const rows = result as DBUser[];
                        const dbUser = rows[0];
 
                        if (err) return reject(err.code);
                        if (!dbUser) return reject("ER_USER_NOT_FOUND");
                        
                        checkUserPassword(password, dbUser.user_password)
                            .then((result) => {
                                if (result) return resolve({
                                    user_id: dbUser.user_id,
                                    user_name: dbUser.user_name,
                                    user_email: dbUser.user_email
                                });
                                return reject("ER_WRONG_CREDENTIALS");
                            })
                            .catch(() => reject("ER_LOGIN_USER"))
                })
        })
    })
}

const checkUserPassword = (password: string, hashedDBPassword: string): Promise<Boolean> => {
    return bcrypt.compare(password, hashedDBPassword)
}

const registerUser = (username: string, email: string, password: string): Promise<User> => {
    return new Promise((resolve, reject) => {
        connection.getConnection(
            async (err, poolConnection: PoolConnection) => {
                const salt = await bcrypt.genSalt(10);
                const hashedDBPassword = await bcrypt.hash(password, salt);
                poolConnection.query(
                    "INSERT INTO users (user_name, user_email, user_password) VALUES (?, ?, ?);",
                    [username, email, hashedDBPassword],
                    (err, result: ResultSetHeader) => {
                        poolConnection.release();

                        if (err) return reject(err.code);
                        resolve({
                            user_id: result.insertId,
                            user_name: username,
                            user_email: email
                        })
                    }
                )
            })
    })
}

export default {
    loginUser,
    registerUser
}