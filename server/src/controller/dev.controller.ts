import { Request, Response } from "express"
import devQuery from "../queries/dev.query"

const truncateUsers = (req: Request, res: Response) => {
    devQuery.truncateUsersTable()
        .then(result => res.send(result))
        .catch(err => res.send(err))
}

export default {
    truncateUsers
}