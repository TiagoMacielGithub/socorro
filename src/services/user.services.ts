import logger from "../config/logger";
import User from "../models/User";
import UserRepositorio from "../models/UserRepositories";
import { v4 } from "uuid";
import sha256 from 'crypto-js/sha256';
import hmacSHA512 from 'crypto-js/hmac-sha512';
import Base64 from 'crypto-js/enc-base64';

class UserService {

    async loginUser(email: string, password: string){
        const foundUser = UserRepositorio.findOneBy({email, password})
        return foundUser;
    }
    async signUpUser(name: string, email: string, password: string){
        const newUser = new User();
        newUser.id = v4();
        newUser.email = email;
        newUser.name = name;
        const hashDigest = sha256(password);
        logger.debug("Hast Antes: ", hashDigest)
        const hmacDigest = Base64.stringify(hmacSHA512(hashDigest, "FIEC2023"));
        logger.debug("Hast Depois: ", hashDigest)
        newUser.password = hmacDigest;    
        await UserRepositorio.save(newUser);
    }
}

export default UserService;