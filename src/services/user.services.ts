import User from "../models/User";
import UserRepositorio from "../models/UserRepositories";
import { v4 } from "uuid";

class UserService {

    async loginUser(email: string, password: string){
        const foundUser = UserRepositorio.findOneBy({email, password})
        return foundUser;
    }
    async signUpUser(UserServ: User){
            const newUser = new User();
            newUser.id = v4();
            newUser.name = UserServ.name;
            newUser.email = UserServ.email;
            newUser.password = UserServ.password;
             await UserRepositorio.save(newUser);
    }
    async readAllUsers() {
        return UserRepositorio.find();
    }
}

export default UserService;