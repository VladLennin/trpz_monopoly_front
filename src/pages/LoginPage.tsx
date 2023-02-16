import React, {FC} from 'react';
// @ts-ignore
import video from "../assets/login-back.mp4"
import AuthTemplate from "../components/auth-components/AuthTemplate";
import LoginForm from "../components/auth-components/LoginForm";

const LoginPage: FC = () => {
    return (
        <AuthTemplate>
            <LoginForm/>
        </AuthTemplate>
    );
};

export default LoginPage;