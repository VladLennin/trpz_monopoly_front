import React, {FC} from 'react';
import {IUser} from "../models/IUser";
import {Avatar} from "flowbite-react";


interface FriendProps {
    user: IUser;
}

const FriendsCard: FC<FriendProps> = ({user}) => {
    return (
        <div>
            {
                user.avatar === 0
                    ?
                    <Avatar/>
                    :
                    <img src={require(`../../assets/avatars/${user.avatar}.jpg`)} alt=""/>
            }
            <p>{user.login}</p>
        </div>
    );
};

export default FriendsCard;