import axios from "axios";
import { LoginUser, RegisterUser, User } from "../types/auth.types";

export function loginUser(loginData: LoginUser): Promise<User>  {
    return axios.post('http://localhost:3000/auth/login', loginData);
}

export function registerUser(registerData: RegisterUser): Promise<User> {
    return axios.post('http://localhost:3000/auth/register', registerData);
}