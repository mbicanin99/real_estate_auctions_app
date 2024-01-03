import { Roles } from "../enums/roles.enum";


export interface UserEntity{
    id: number,
    firstName:string,
    lastName:string,
    email: string,
    password: string,
    role: Roles
}