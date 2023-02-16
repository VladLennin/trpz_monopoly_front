import {AxiosResponse} from "axios";
import {IUser} from "../models/IUser";
import $api from "../http";

export default class FriendsService{
    static sendRequest(email:string, to:string): Promise<void> {
        return $api.post("/user/send-request",{email, to})
    }

    static getFriends(email:string): Promise<AxiosResponse<IUser[]>>{
        return $api.post("/user/friends", {email})
    }
}