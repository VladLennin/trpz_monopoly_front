import {IUser} from "./IUser";

export interface IFriendRequest{
    from:IUser;
    to:IUser;
    isAccepted:boolean;
}
