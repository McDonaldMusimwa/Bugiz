import { NavLink } from "react-router"
import { CiHome,CiLogin,CiUser } from "react-icons/ci";
import styles from './NavStyles.module.css'


function AuthNavBar() {
    return <nav className={`bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 ${styles.navigationbar}`}>
        <div className="ma-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <NavLink to="/Home">
                <img src="/public/img/logoSmall.png" alt="Logo" />
            </NavLink>

            <div>
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">

                    <NavLink className={`color:white flex items-center p-2`} to="https://localhost:7160/">
                    <CiHome/>
                    Home
                    </NavLink>
                    <NavLink className={`color:white flex items-center p-2`} to="/Login" >
                    <CiLogin/>
                    Login
                    </NavLink>
                    <NavLink className={`color:white flex items-center p-2`} to="/Register" >
                    <CiUser/>
                    Register
                    </NavLink>

                </ul>
            </div>

        </div>
    </nav>
}

export default AuthNavBar