import React, {FC, useState} from 'react';
// @ts-ignore
import video from "../../assets/login-back.mp4";

interface AuthTemplateProps {
    children: React.ReactNode
}

const AuthTemplate: FC<AuthTemplateProps> = ({children}) => {

    const [isActiveForm, setIsActiveForm] = useState(true)


    return (
        <>
            <div onClick={() => setIsActiveForm(false)} className={"fixed "}>
                <video className={"blur-sm -z-10"} autoPlay={true} muted loop src={video}/>
            </div>
            <div
                onClick={() => setIsActiveForm(true)}
                className={(isActiveForm ? "scale-105 opacity-100 " : "opacity-50") + " absolute flex-col flex justify-center shadow-2xl hover:shadow-5xl  duration-200  left-[42vw] rounded-lg top-[35vh] w-[16vw]  bg-[#6c7481]"}>
                {children}
            </div>
        </>
    );

};

export default AuthTemplate;