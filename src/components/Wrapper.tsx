import React, {FC, useContext, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {RoutesName} from "../router/RoutesName";
import {Context} from "../index";
import ProfileModal from "./modals/ProfileModal";

interface WrapperProps {
    children: React.ReactNode
}

const Wrapper: FC<WrapperProps> = ({children}) => {

    const {store} = useContext(Context)
    const navigate = useNavigate()
    const [darkMode, setDarkMode] = useState<boolean>(true)
    const [profileModal, setProfileModal] = useState<boolean>(false)


    const openModal = () => {
        setProfileModal(true)
    }
    const closeModal = () => {
        setProfileModal(false)
    }


    return (
        <>

            <div className={darkMode ? "dark" : ""}>
                <ProfileModal darkMode={darkMode} closeModal={closeModal} modal={profileModal}/>

                <header
                    className="p-2 oxygen-font bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 m-2">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
             <Link to={RoutesName.MAIN_PAGE} className="hover:underline bebas-font text-xl"> TRPZ Monopoly™</Link>
             </span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                        <li>
                            {/*<Link to={RoutesName.PROFILE_PAGE} className="mr-4 hover:underline md:mr-6 ">Profile</Link>*/}
                            <button className="mr-4 hover:underline md:mr-6 "
                                    onClick={openModal}>Profile
                            </button>
                        </li>
                        <li>
                            <Link to={RoutesName.FRIENDS_PAGE} className="mr-4 hover:underline md:mr-6 ">Fiends</Link>
                        </li>
                        <li>
                            <button className="mr-4 hover:underline md:mr-6 " onClick={() => {
                                store.logout()
                                navigate(RoutesName.LOGIN_PAGE)
                            }}>Logout
                            </button>
                        </li>
                        <li>
                            <button onClick={() => setDarkMode(!darkMode)} id="theme-toggle"
                                    data-tooltip-target="tooltip-toggle" type="button"
                                    className=" dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
                                {darkMode &&
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 bi bi-moon-fill"
                                         fill="currentColor"
                                         viewBox="0 0 16 16">
                                        <path
                                            d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
                                    </svg>
                                }
                                {!darkMode &&
                                    <svg aria-hidden="true" id="theme-toggle-light-icon" className="w-5 h-5"
                                         fill="currentColor"
                                         viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                            fill-rule="evenodd" clip-rule="evenodd"></path>
                                    </svg>
                                }
                            </button>
                        </li>
                    </ul>
                </header>

                <main
                    className={" p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-[#374151] m-2"}>
                    {children}
                </main>

                <footer
                    className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 m-2">
                     <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a
                         href={RoutesName.MAIN_PAGE}
                         className="hover:underline">TRPZ Monopoly™</a>. All Rights Reserved.
                    </span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6">Licensing</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </footer>

            </div>

        </>
    )
        ;
};

export default Wrapper;