import { NavLink,useNavigate } from 'react-router'; // Correct import from 'react-router-dom'
import styles from './NavBar.module.css';
import { useState } from 'react';
import { CiSettings, CiMedicalClipboard, CiLogout } from 'react-icons/ci';
import { AiOutlineDashboard } from 'react-icons/ai';
import { HiOutlineLightningBolt } from 'react-icons/hi';
import { FiMessageSquare } from 'react-icons/fi';
import { IoIosAddCircleOutline } from 'react-icons/io';


const NavBar = () => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false); // Manage dropdown visibility

  const handleLogout = () => {
    // Add your logout logic here (e.g., clearing authentication state, redirecting, etc.)
    console.log("Logging out...");
  };

  const navigateToAddProject = () => {
    navigate('/AddProject');
  };

  const projects = [
    { name: "Gym App", link: "/Projects", key: 4 },
    { name: "Desktop App", link: "/Projects", key: 2 }
  ];

  return (
    <aside
      id="default-sidebar"
      className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 ${styles.navigationbar}`}
      aria-label="Sidenav"
    >
      <nav className="h-full flex justify-between flex-col">
        {/* Logo with navigation */}
        <li>
          <NavLink to="/Dashboard">
            <img src="/public/img/logoSmall.png" alt="Logo" />
          </NavLink>
        </li>

        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 h-1/2">
          <ul className="flex flex-col space-y-2 text-left">
            {/* Navigation items */}
            <li>
              <NavLink
                to="/Dashboard"
                className="gap-2 flex items-center p-2 pl-11 w-full text-base font-normal text-black-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <AiOutlineDashboard />
                Dashboard
              </NavLink>
            </li>

            <li>
              <button
                type="button"
                className="gap-2 flex items-center p-2 pl-11 w-full text-base font-normal text-black-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                onClick={() => setDropdownOpen(!dropdownOpen)} // Toggle dropdown visibility
              >
                <HiOutlineLightningBolt />
                <span className="flex-1 ml-3 text-left whitespace-nowrap">Projects</span>
                <svg
                  aria-hidden="true"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>

              {/* Dropdown content for Projects */}
              <ul
                className={`py-2 space-y-2 ${dropdownOpen ? 'block' : 'hidden'}`} // Use conditional class for showing dropdown
              >
                {projects.map((project) => (
                  <NavLink
                    key={project.key}
                    to={project.link}
                    className="gap-2 flex items-center p-2 pl-11 w-full text-base font-normal text-black-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    {project.name}
                  </NavLink>
                ))}
              </ul>
            </li>

            <li>
              <NavLink
                to="/Messages"
                className="gap-2 flex items-center p-2 pl-11 w-full text-base font-normal text-black-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <FiMessageSquare />
                Messages
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/Reports"
                className="gap-2 flex items-center p-2 pl-11 w-full text-base font-normal text-black-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <CiMedicalClipboard />
                Reports
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/Settings"
                className="gap-2 flex items-center p-2 text-base font-normal text-black-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
              >
                <CiSettings />
                Settings
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
          <li
            className="flex flex-row items-center gap-1 text-white text-center cursor-pointer"
            onClick={handleLogout}
          >
            <CiLogout />
            <span className="ml-3">Logout</span>
          </li>
        </div>
      </nav>
    </aside>
  );
};

export default NavBar;
