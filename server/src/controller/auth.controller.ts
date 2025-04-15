import { Request, Response } from "express";
import { LoginUser, RegisterUser } from "../model/Auth";
import authQuery from "../queries/auth.query";

const postLogin = (req: Request, res: Response) => {
    const { username, password }: LoginUser = req.body;

    authQuery.loginUser(username, password).then(result => {
        res.send(result)
    }).catch(err => {
        res.send({
            error: err
        })
    })
}

const postRegister = (req: Request, res: Response) => {
    const { username, email, password }: RegisterUser = req.body;
    authQuery.registerUser(username, email, password)
        .then(result => res.send(result))
        .catch(err => res.send({
            error: err
        }));
}

export default {
    postLogin,
    postRegister
}

