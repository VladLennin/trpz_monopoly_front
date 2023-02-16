import React, {FC, useContext, useState} from 'react';
import {Avatar, Button, Modal, Toast} from "flowbite-react";
import {Context} from "../../index";


interface ProfileProps {
    closeModal: () => void;
    modal: boolean;
    darkMode: boolean;
}

const ProfileModal: FC<ProfileProps> = ({closeModal, modal, darkMode}) => {

    const {store} = useContext(Context)
    const [avatars, setAvatars] = useState<boolean>(false)
    const [chosenAvatar, setChosenAvatar] = useState<number>(store.user.avatar)
    const [loginInput, setLoginInput] = useState<boolean>(false)
    const [login, setLogin] = useState<string>(store.user.login)
    const [errors, setErrors] = useState<string[]>([])

    const generateAvatars = () => {
        let result = [];
        for (let i = 1; i < 13; i++) {
            result.push(<img
                onClick={() => setChosenAvatar(i)}
                className={(chosenAvatar === i && "scale-110 border-yellow-200 border-[3px]  ") + " h-[100px]  border border-gray-500 hover:scale-110 duration-200 cursor-pointer"}
                src={require(`../../assets/avatars/${i}.jpg`)} alt=""/>)
        }
        return result
    }


    return (

        <Modal className={(darkMode ? "dark" : "") + " text-[#9ba3af]"}
               show={modal}
               onClose={closeModal}
        >
            {errors.map(e =>
                (<Toast className={"right-1 absolute top-1"}>
                        {e}
                        <Toast.Toggle/>
                    </Toast>
                )
            )}

            <Modal.Header>
                <div className={"bebas-font text-3xl text-[#9ba3af]"}>
                    <p>Profile</p>
                </div>
            </Modal.Header>
            <Modal.Body>
                <div className="space-y-6">
                    {
                        avatars ?
                            <div className={"grid grid-cols-6 gap-1"}>
                                <button className={"col-span-6 text-right p"} onClick={() => setAvatars(false)}>X
                                </button>

                                {generateAvatars().map(item => (
                                    item
                                ))}
                                <div className={"col-span-6 flex justify-center items-center oxygen-font text-xl"}>
                                    <button className={" hover:underline"} onClick={() => {
                                        setAvatars(false);
                                        store.editAvatar(chosenAvatar).catch(err => {
                                            setErrors([...errors, err.response.data.message])
                                        })
                                    }}>Save
                                    </button>
                                </div>


                            </div>
                            :
                            <>
                                {
                                    chosenAvatar === 0
                                        ?
                                        <Avatar onClick={() => setAvatars(!avatars)} size={"xl"}
                                                className={"flex flex-col items-center justify-center cursor-pointer"}/>
                                        :
                                        <div className={"flex justify-center"}>
                                            <img
                                                onClick={() => setAvatars(!avatars)}
                                                className={" h-[200px]  border border-gray-500  duration-200 cursor-pointer"}
                                                src={require(`../../assets/avatars/${chosenAvatar}.jpg`)} alt=""/>
                                        </div>

                                }

                            </>
                    }

                    <div className={""}>
                        <p className={"bebas-font text-2xl"}>Login</p>
                        <div className={"flex"}>
                            {!loginInput ?
                                <>
                                    <p>{login}</p>
                                    <button onClick={() => {
                                        setLoginInput(true)
                                    }} className={"ml-2 hover:scale-110 duration-150 "}>
                                        <i className="bi bi-pen"></i>
                                    </button>
                                </>
                                :
                                <>
                                    <input onChange={(e) => {
                                        setLogin(e.target.value)
                                    }} value={login} className={"h-8 rounded-md"} type="text"/>
                                    <button onClick={() => {
                                        setLoginInput(false)
                                        store.editLogin(login).catch(err => {
                                            setErrors([...errors, err.response.data.message])
                                            setLogin(store.user.login)
                                        })
                                    }} className={"ml-2 hover:scale-110 duration-150 "}>
                                        <i className="bi bi-check-lg"></i>
                                    </button>
                                </>
                            }

                        </div>

                    </div>

                    <div className={" "}>
                        <p className={"bebas-font text-2xl"}>Email</p>
                        <div className={"flex"}>
                            <p>{store.user.email}</p>
                        </div>
                    </div>

                    <div>
                        {store.user.isActivated ? "Account activated" : " You need to activate account, go to your email"}
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    color="gray"
                    onClick={closeModal}
                >
                    Close
                </Button>
            </Modal.Footer>
        </Modal>

    );
};

export default ProfileModal;