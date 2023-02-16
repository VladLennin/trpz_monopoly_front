import React, {FC, useContext, useEffect} from 'react';
import {Context} from "./index";
import {observer} from "mobx-react-lite";
import AppRouter from "./router/AppRouter";
import Wrapper from "./components/Wrapper";
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import {RoutesName} from "./router/RoutesName";
import RegistrationPage from "./pages/RegistrationPage";
import Unauthorized from "./pages/Unauthorized";
import NotFoundPage from "./pages/NotFoundPage";

const App: FC = () => {
    const {store} = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem('token')) {
            store.checkAuth(location).then(res => {
                navigate(res.pathname)
            })
        }


    }, [])


    if (store.isLoading) {
        return <div>Loading...</div>
    }

    if (store.isAuth) {
        return (
            <Wrapper>
                <AppRouter/>
            </Wrapper>
        )
    }

    return (
        <Routes>
            <Route path={RoutesName.LOGIN_PAGE} element={<LoginPage/>}/>
            <Route path={RoutesName.REGISTRATION_PAGE} element={<RegistrationPage/>}/>
            <Route path={RoutesName.UNAUTHORIZED} element={<Unauthorized/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
    );


}

export default observer(App);
