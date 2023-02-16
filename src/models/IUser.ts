import {Roles} from "./Roles";

export interface IUser {
    email: string;
    avatar: number;
    login: string;
    isActivated: boolean;
    id: string;
    friends: IUser[];
    role: Roles;

}