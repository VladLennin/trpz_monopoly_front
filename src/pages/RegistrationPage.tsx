import React, {FC} from 'react';
import RegistrationForm from "../components/auth-components/RegistrationForm";
import AuthTemplate from "../components/auth-components/AuthTemplate";

const RegistrationPage: FC = () => {
    return (
        <AuthTemplate>
            <RegistrationForm/>
        </AuthTemplate>
    );
};

export default RegistrationPage;