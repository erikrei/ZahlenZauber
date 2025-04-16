export type User = {
    user_id: string;
    user_name: string;
    user_email: string;
}

export type LoginUser = {
    username: string;
    password: string;
}

export type RegisterUser = {
    username: string;
    email: string;
    password: string;
}

export type ServerErrorMessage = {
    error: string;
}