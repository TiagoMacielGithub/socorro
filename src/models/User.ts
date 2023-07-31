import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from "typeorm";

@Entity()
class User {
    @PrimaryColumn()
    id: string;
    @Column()
    name: string;
    @Column()
    email: string;
    @Column()
    password: string;
}

export default User;