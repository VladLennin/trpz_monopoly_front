import React, {FC, useContext} from 'react';
import {IUser} from "../models/IUser";
import {Context} from "../index";
import FriendsService from "../services/FriendsService";
import {Avatar} from "flowbite-react";

interface UserProps {
    user: IUser
}

const UserCard: FC<UserProps> = ({user}) => {

    const {store} = useContext(Context);

    const sendRequest = () => {
        console.log(store.user.email + "  " + user.email)
        FriendsService.sendRequest(store.user.email, user.email)
    }

    if (user.email !== store.user.email) {
        return (
            <div
                className={"border border-gray-800 flex flex-col items-center justify-center border-2 rounded hover:scale-125 duration-200 dark:bg-gray-700 w-[125px]"}>
                <p className={"bebas-font text-gray-500"}>{user.login}</p>

                {user.avatar === 0
                    ?
                    <Avatar size={"lg"} className={"mb-5"}/>
                    :
                    <img className={" h-[100px]  border border-gray-500  duration-200 cursor-pointer mb-2"}
                         src={require(`../assets/avatars/${user.avatar}.jpg`)} alt=""/>
                }

                {store.user.isActivated
                    &&
                    <button onClick={sendRequest} className={"bg-lime-500 px-1 rounded mb-2"}>
                        Add
                        <i className=" ml-1 bi bi-person-plus"></i>
                    </button>
                }

            </div>
        )
            ;
    }

    return (
        <></>
    )
};

export default UserCard;