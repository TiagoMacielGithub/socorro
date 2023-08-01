import User from "../models/User";
import UserRepositorio from "../models/userRepositories";
import { v4 } from "uuid";

class UserService {

    async loginUser(email: string, password: string){
        const foundUser = UserRepositorio.findOneBy({email, password})
        return foundUser;
    }
    async signUpUser(name: string, email: string, password: string){
            const newUser = new User();
            newUser.id = v4();
            newUser.name = name;
            newUser.email = email;
            newUser.password = password;
             await UserRepositorio.save(newUser);
    }
    async readAllUsers() {
        return UserRepositorio.find();
    }
}

export default UserService;