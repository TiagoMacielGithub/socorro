import { Request, Response } from "express";
import UserService from "../services/user.services";

class UserController {
    async loginUser(req: Request, res: Response){
        const {email, password} = req.body;
        await new UserService().loginUser(email, password);
    }

    async signUpUser(req: Request, res: Response){
        const {name, password, email} = req.body;
        await new UserService().signUpUser(name, password, email)

    }
}

export default UserController;