import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../index";
import UserService from "../services/UserService";
import {IUser} from "../models/IUser";
import {Spinner} from "flowbite-react";
import UserCard from "../components/UserCard";
import FriendsService from "../services/FriendsService";
import {IFriendRequest} from "../models/IFriendRequest";

const FriendsPage = () => {

    const {store} = useContext(Context)
    const [users, setUsers] = useState<IUser[]>()
    const [loadingUsers, setLoadingUsers] = useState<boolean>(true)
    const [friends, setFriends] = useState<IUser[]>([])
    const [requests, setRequest] = useState<IFriendRequest[]>([])

    useEffect(() => {
        UserService.fetchUsers().then(response => {
            setUsers(response.data)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoadingUsers(false)
        })

        FriendsService.getFriends(store.user.email).then(res => {
            console.log(res.data.friends)
            setFriends(res.data.friends)
        }).catch(err => {
            console.log(err)
        }).finally(() => {

        })

        FriendsService.getRequests(store.user.email).then(res => {
            setRequest(res.data)
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        }).finally(() => {

        })

    }, [])
    return (

        <div className={"grid  grid-cols-12 gap-3 w-full"}>
            <div className={"col-span-2 border-r-2 border-gray-600 pr-4"}>
                <div className={"bebas-font text-xl text-gray-500 text-center  border-b-2 border-gray-600"}>
                    Friends
                </div>
                <div>
                    {/*{*/}
                    {/*    friends?.map((friend, index) =>*/}
                    {/*        (*/}
                    {/*            <div key={index}>*/}
                    {/*                <p> {friend.email}</p>*/}
                    {/*            </div>)*/}
                    {/*    )*/}
                    {/*}*/}
                    Some changing for test Git
                </div>

            </div>

            <div className={"col-span-2 border-r-2 border-gray-600 pr-4"}>
                <div className={"bebas-font text-xl text-gray-500 text-center  border-b-2 border-gray-600"}>
                    Requests
                </div>
                <div>
                    {/*{*/}
                    {/*    requests?.map((req, index) =>*/}
                    {/*        <div key={index}>*/}
                    {/*            <>*/}
                    {/*                {req.from}*/}
                    {/*            </>*/}
                    {/*        </div>*/}
                    {/*    )*/}
                    {/*}*/}
                </div>

            </div>
            <div className={"col-span-8 "}>
                <div className={"flex justify-center"}>
                    <input type="text" className={"w-1/2 rounded border-2 dark:bg-gray-800 bg-white dark:text-white"}/>
                    <button className={"ml-4 text-3xl hover:scale-110 duration-150"}>
                        <i className="bi bi-search text-gray-800"></i>
                    </button>
                </div>
                <div className={"flex gap-5 grid-cols-4 mt-8 mx-5"}>
                    {
                        loadingUsers
                            ?
                            <Spinner/>
                            :
                            (users?.map(user => (
                                    <UserCard key={user.email} user={user}/>
                                )
                            ))

                    }
                </div>

            </div>
        </div>
    );
};

export default FriendsPage;