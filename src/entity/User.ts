import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
import {IsEmail} from "class-validator";

import * as bcrypt from "bcryptjs";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: true})
  firstname: string;

  @Column({nullable: true})
  lastname: string;

  @Column()
  @IsEmail()
  email: string;

  @Column()
  password: string;

  @Column({default: 1})
  status: string;

  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 8);
  }

  checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
    return bcrypt.compareSync(unencryptedPassword, this.password);
  }
  
}