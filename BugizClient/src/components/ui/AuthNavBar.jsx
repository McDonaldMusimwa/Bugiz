import { NavLink } from "react-router";
import { CiHome, CiLogin, CiUser } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import styles from "./NavStyles.module.css";
import { useState, useEffect } from "react";

function AuthNavBar() {
    const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <nav className={`bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 ${styles.navigationbar}`}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <NavLink to="/Home">
                    <img src="/img/logoSmall.png" alt="Logo" />
                </NavLink>

                {windowWidth < 768 ? (
                    <div>
                        <GiHamburgerMenu onClick={() => setBurgerMenuOpen(!burgerMenuOpen)} className="cursor-pointer text-white" />
                        {burgerMenuOpen && (
                            <ul className="text-white flex flex-col font-medium p-4 mt-4 space-y-4 bg-gray-800 rounded-lg absolute top-16 right-4 z-50">
                                <NavLink className="text-white flex items-center p-2" to="/">
                                    <CiHome className="mr-2" /> Home
                                </NavLink>
                                <NavLink className="text-white flex items-center p-2" to="/Login">
                                    <CiLogin className="mr-2" /> Login
                                </NavLink>
                                <NavLink className="text-white flex items-center p-2" to="/Register">
                                    <CiUser className="mr-2" /> Register
                                </NavLink>
                            </ul>
                        )}
                    </div>
                ) : (
                    <ul className="text-white flex font-medium space-x-8">
                        <NavLink className="text-white flex items-center p-2" to="/">
                            <CiHome className="mr-2" /> Home
                        </NavLink>
                        <NavLink className="text-white flex items-center p-2" to="/Login">
                            <CiLogin className="mr-2" /> Login
                        </NavLink>
                        <NavLink className="text-white flex items-center p-2" to="/Register">
                            <CiUser className="mr-2" /> Register
                        </NavLink>
                    </ul>
                )}
            </div>
        </nav>
    );
}

export default AuthNavBar;
