import Logo from '../../../public/img/logoLarge.png';
import styles from './SignIn.module.css'


function Register(){
    return <div className={`display:block flex min-h-screen justify-center items-center mx-auto ${styles.container}`}>
                <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 w-full p-4 `}>
                    {/* Left Side: Logo */}
                    <section className="flex justify-center items-center">
                        <div>
                            <img src={Logo} alt="Logo" className="max-w-full h-auto" />
                        </div>
                    </section>

                    {/* Right Side: Form */}
                    <section className="text-black p-4">
                        <form className="space-y-4">
                            <h2 className="text-black text-center text-2xl font-semibold">Register</h2>
                            <hr className="border-t-2 border-gray-300" />
                            <div className="m-2 text-left">
                                <label htmlFor="email" className="block text-sm font-medium">First Name:</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="block w-full h-10 rounded-md border border-gray-300 p-2"
                                    placeholder="Enter your First Name"
                                    required
                                />
                            </div>
                            <div className="m-2 text-left">
                                <label htmlFor="email" className="block text-sm font-medium">Last Name:</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="block w-full h-10 rounded-md border border-gray-300 p-2"
                                    placeholder="Enter your Last Name"
                                    required
                                />
                            </div>
                            <div className="m-2 text-left">
                                <label htmlFor="email" className="block text-sm font-medium">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="block w-full h-10 rounded-md border border-gray-300 p-2"
                                    placeholder="Enter your email"
                                    required
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
                                />
                            </div>
                            <div className="m-2 text-left">
                                <label htmlFor="password" className="block text-sm font-medium">Confirm Password:</label>
                                <input
                                    type="password"
                                    id="password2"
                                    className="block w-full h-10 rounded-md border border-gray-300 p-2"
                                    placeholder="Enter your password"
                                    required
                                />
                            </div>


                            <button
                                type="submit"
                                className="w-full bg-green-400 text-white py-2 rounded-md hover:bg-lime-600 transition"
                            >
                                Register
                            </button>
                        </form>
                    </section>
                </div>
            </div>
}

export default Register;