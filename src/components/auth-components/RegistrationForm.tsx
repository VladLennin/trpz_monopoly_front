import React, {FC, useContext, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {RoutesName} from "../../router/RoutesName";
import {Context} from "../../index";
import {log} from "util";

const RegistrationForm: FC = () => {

    const [email, setEmail] = useState<string>("")
    const [password1, setPassword1] = useState<string>("")
    const [password2, setPassword2] = useState<string>("")
    const [login, setLogin] = useState<string>("")
    const [errors, setErrors] = useState<string[]>([])
    const {store} = useContext(Context)
    const navigate = useNavigate()


    return (
        <>
            <h3 className={"text-center bebas-font text-[24px] mt-2"}>Registration</h3>

            <div className={"flex justify-center mx-3 mb-5 mt-2"}>
                {/*<label className={" font-bold text-[#1F488E]"} htmlFor="">Email</label>*/}
                <input onChange={(e) => {
                    setEmail(e.target.value)
                    setErrors([])
                }
                } placeholder={"Email..."} className={"pl-2 bg-[#374151] rounded text-white "} type="email"/>
            </div>

            <div className={"flex justify-center mx-3 mb-5 mt-2"}>
                {/*<label className={" font-bold text-[#1F488E]"} htmlFor="">Email</label>*/}
                <input onChange={(e) => {
                    setLogin(e.target.value)
                    setErrors([])
                }
                } placeholder={"Login..."} className={"pl-2 bg-[#374151] rounded text-white "} type="text"/>
            </div>

            <div className={"flex justify-center mx-3 mb-5"}>
                {/*<label className={" font-bold text-[#1F488E]"} htmlFor="">Password</label>*/}
                <input onChange={(e) => {
                    setPassword1(e.target.value)
                    setErrors([])
                }
                } placeholder={"Password..."} className={"pl-2 bg-[#374151] rounded  text-white"} type="password"/>
            </div>

            <div className={"flex justify-center mx-3 "}>
                {/*<label className={" font-bold text-[#1F488E]"} htmlFor="">Password</label>*/}
                <input onChange={(e) => {
                    setPassword2(e.target.value)
                    setErrors([])
                }
                } placeholder={"Repeat pass..."} className={"pl-2 bg-[#374151] rounded  text-white"} type="password"/>
            </div>

            <div className={"text-red-600 text-center m-1.5 text-xs"}>
                {errors.map(error => (<p>
                    {error}
                </p>))}
            </div>

            <button onClick={() => {
                if (password1 === password2) {
                    store.registration(email,login, password1).then(res => {
                        if (res.status === 200) {
                            navigate(RoutesName.MAIN_PAGE)
                        }
                    }).catch(err => {
                        setErrors([...errors, err.response.data.message])
                    })
                } else {
                    setErrors([...errors, "Passwords isn`t equals"])
                }
            }
            } className={"bg-[#111827] mx-10 py-2 rounded text-white"}>Sign up
            </button>
            <Link className={"oxygen-font text-[12px] text-center mt-[5px] hover:text-[#0B8BDB] mb-2"}
                  to={RoutesName.LOGIN_PAGE}>Have
                account?</Link>
        </>
    );
};

export default RegistrationForm;

