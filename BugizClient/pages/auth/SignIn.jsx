import Logo from '../../public/img/logoLarge.png';
import styles from './SignIn.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router'; // Make sure to import from 'react-router-dom'

function SignIn({ setAuthentication }) {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  function InputHandler(inputType, inputValue) {
    setUser((prevState) => {
      switch (inputType) {
        case 'email':
          return { ...prevState, email: inputValue };

        case 'password':
          return { ...prevState, password: inputValue };

        default:
          return prevState;
      }
    });
  }

  function SignHandler(e) {
    e.preventDefault(); // Prevent the default form submission behavior
    setAuthentication(); // Set the authentication state to true
    navigate("/Dashboard"); // Redirect to the Dashboard after successful login
  }

  return (
    <div className={`display:block flex min-h-screen justify-center items-center mx-auto ${styles.container}`}>
      <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 w-full p-4`}>
        {/* Left Side: Logo */}
        <section className="flex justify-center items-center">
          <div>
            <img src={Logo} alt="Logo" className="max-w-full h-auto" />
          </div>
        </section>

        {/* Right Side: Form */}
        <section className="text-black p-4">
          <form className="space-y-4" onSubmit={SignHandler}>
            <h2 className="text-black text-center text-2xl font-semibold">Login</h2>
            <hr className="border-t-2 border-gray-300" />

            <div className="m-2 text-left">
              <label htmlFor="email" className="block text-sm font-medium">Email:</label>
              <input
                type="email"
                id="email"
                className="block w-full h-10 rounded-md border border-gray-300 p-2"
                placeholder="Enter your email"
                required
                onChange={(e) => InputHandler('email', e.target.value)} // Handles email input change
                value={user.email}
              />
            </div>

            <div className="m-2 text-left">
              <label htmlFor="password" className="block text-sm font-medium">Password:</label>
              <input
                type="password"
                id="password"
                className="block w-full h-10 rounded-md border border-gray-300 p-2"
                placeholder="Enter your password"
                required
                onChange={(e) => InputHandler('password', e.target.value)} // Handles password input change
                value={user.password}
              />
            </div>

            <div className="flex items-center mb-4">
              <input type="checkbox" id="rememberMe" className="form-check-input" />
              <label htmlFor="rememberMe" className="ml-2 text-sm">Remember Me</label>
            </div>

            <button
              type="submit" // Use type="submit" to trigger form submission
              className="w-full bg-green-400 text-white py-2 rounded-md hover:bg-lime-600 transition"
            >
              Login
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default SignIn;
