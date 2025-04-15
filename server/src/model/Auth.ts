export interface LoginUser {
    username: string;
    password: string;
}

export interface RegisterUser {
    username: string;
    email: string;
    password: string;
}

export interface DBUser {
    user_id: number;
    user_name: string;
    user_email: string;
    user_password: string;
}

export interface User {
    user_id: number;
    user_name: string;
    user_email: string;
}