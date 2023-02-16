import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {RoutesName} from "./RoutesName";
import LoginPage from "../pages/LoginPage";
import RequireAuth from "./RequireAuth";
import RequireRole from "./RequireRole";
import {Roles} from "../models/Roles";
import NotFoundPage from "../pages/NotFoundPage";
import Unauthorized from "../pages/Unauthorized";
import RegistrationPage from "../pages/RegistrationPage";
import MainPage from "../pages/MainPage";
import Wrapper from "../components/Wrapper";
import {Context} from "../index";
import FriendsPage from "../pages/FriendsPage";

const AppRouter = () => {

    const {store} = useContext(Context)

    return (

        <Routes>
            <Route path={RoutesName.MAIN_PAGE} element={<MainPage/>}/>
            <Route path={RoutesName.FRIENDS_PAGE} element={<FriendsPage/>}/>

            <Route element={<RequireRole allowedRole={Roles.ADMIN}/>}>

            </Route>
        </Routes>
    );
};

export default AppRouter;