import axios from "axios";
import { LoginUser, User } from "../types/auth.types";

export function loginUser(loginData: LoginUser): Promise<User>  {
    return axios.post('http://localhost:3000/auth/login', loginData);
}