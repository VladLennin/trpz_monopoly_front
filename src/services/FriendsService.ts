import {AxiosResponse} from "axios";
import {IUser} from "../models/IUser";
import $api from "../http";
import {IFriendRequest} from "../models/IFriendRequest";

export default class FriendsService {
    static sendRequest(from: string, to: string): Promise<void> {
        return $api.post("/user/send-request", {from, to})
    }

    static getRequests(email: string): Promise<AxiosResponse<IFriendRequest[]>> {
        return $api.post("/user/requests", {email})
    }

    static getFriends(email: string): Promise<AxiosResponse<IUser>> {
        return $api.post("/user/friends", {email})
    }
}