import { NavLink } from "react-router"; // Import from 'react-router-dom' instead of 'react-router'
import styles from './NavBar.module.css';
import { CiSettings, CiMedicalClipboard, CiLogout } from "react-icons/ci";
import { AiOutlineDashboard } from "react-icons/ai";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { FiMessageSquare } from "react-icons/fi";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router";

const NavBar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Add your logout logic here (e.g., clearing authentication state, redirecting, etc.)
    console.log("Logging out...");
  };
function navigateToAddProject(){
  navigate("/AddProject")
}
  return (
    <aside id="default-sidebar" className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 ${styles.navigationbar}`} aria-label="Sidenav">
      <nav className="h-full flex justify-between flex-col">
                    {/* Logo with navigation */}
                    <li>
              <NavLink to="/Dashboard"> {/* Add to path here */}
                <img src="/public/img/logoSmall.png" alt="Logo" />
              </NavLink>
            </li>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 h-1/2">
          <ul className="flex flex-col space-y-2 text-left">


            {/* Navigation items */}
            <li>
              <NavLink to="/Dashboard" className="flex items-center p-2 pl-11 w-full text-base font-normal text-black-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                <AiOutlineDashboard />
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/Projects" className="flex items-center p-2 pl-11 w-full text-base font-normal text-black-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                <HiOutlineLightningBolt />
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/Messages" className="flex items-center p-2 pl-11 w-full text-base font-normal text-black-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                <FiMessageSquare />
                Messages
              </NavLink>
            </li>
            <li>
              <NavLink to="/Reports" className="flex items-center p-2 pl-11 w-full text-base font-normal text-black-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                <CiMedicalClipboard />
                Reports
              </NavLink>
            </li>
            <li>
              <NavLink to="/Settings" className="flex items-center p-2 text-base font-normal text-black-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                <CiSettings />
                <span className="ml-3">Settings</span> {/* Use className instead of class */}
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="max-w-screen-xl flex flex-col mx-auto p-4 h-1/2">
          {/* Add Project button */}
          <li className="flex flex-wrap" onClick={navigateToAddProject}> 
            <button
              type="button"
              className="flex flex-row items-center gap-1 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              <IoIosAddCircleOutline />
              Add Project
            </button>
          </li>

          {/* Logout section */}
          <li className="flex flex-row items-center gap-1 text-white text-center cursor-pointer" onClick={handleLogout}>
            <CiLogout />
            <span className="ml-3">Logout</span>
          </li>
        </div>
      </nav>
    </aside>
  );
};

export default NavBar;
