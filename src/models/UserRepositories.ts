import { AppDataSource } from "../data-source";
import User from "./User";

 const UserRepositorio = AppDataSource.getRepository(User);
 
 export default UserRepositorio;