import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaSignInAlt } from "react-icons/fa";
import { useState } from "react";

const Login = () => {
    const navigate=useNavigate();
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");
    const handellogin=()=>{
        navigate("/Home");
    }
    return (
        <div className="flex h-screen w-screen bg-gradient-to-r from-purple-400 to-blue-500">
            <div className="w-1/2 flex items-center justify-center">
                <img
                    className="h-full w-full object-cover"
                    src="https://cdn.dribbble.com/users/2685252/screenshots/16262866/media/66ad3f524c0b94dfb10d56383de5cc28.png?compress=1&resize=400x300&vertical=top"
                    alt="hospital front page"
                />
            </div>

            <div className="w-1/2 flex items-center justify-center bg-white">
                <div className="w-full max-w-md p-8 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>
                    <form action="#" className="space-y-4">
                        <div className="flex items-center">
                            <FaEnvelope className="text-blue-500 mr-3" />
                            <div className="w-full">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter your email"
                                    onChange={(e)=>{
                                        setemail(e.target.value);
                                    }}
                                />
                            </div>
                        </div>
                        <div className="flex items-center">
                            <FaLock className="text-blue-500 mr-3" />
                            <div className="w-full">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter your password"
                                    onChange={(e)=>{
                                        setpassword(e.target.value);
                                    }}
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onClick={handellogin}
                        >
                            <FaSignInAlt className="inline mr-2" /> Login
                        </button>
                    </form>
                    <p className="text-center text-gray-500 text-sm mt-4">
                        Don't have an account?{" "}
                        <Link to="/">
                            <span className="text-blue-600 hover:underline">Sign Up</span>
                        </Link>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;