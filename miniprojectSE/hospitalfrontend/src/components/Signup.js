import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock, FaCheckCircle, FaSignInAlt } from "react-icons/fa";
import { useState } from "react";

const Signup = () => {
    const navigate = useNavigate();
    const handellogin = () => {
        navigate("/login");
    };
    const [name,setname]=useState("");
    const [email,setemail]=useState("");
    const[password,setpassword]=useState("");
    return (
        <div className="flex h-screen w-screen bg-gradient-to-r from-green-400 to-blue-500">
            <div className="w-1/2 flex items-center justify-center">
                <img
                    className="h-full w-full object-cover"
                    src="https://cdn.dribbble.com/users/2685252/screenshots/16262866/media/66ad3f524c0b94dfb10d56383de5cc28.png?compress=1&resize=400x300&vertical=top"
                    alt="hospital front page"
                />
            </div>

            <div className="w-1/2 flex items-center justify-center bg-white">
                <div className="w-full max-w-md p-8 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Sign Up</h2>
                    <form action="#" className="space-y-4">
                        <div className="flex items-center">
                            <FaUser className="text-blue-500 mr-3" />
                            <div className="w-full">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter your name"
                                    onChange={(e)=>{
                                        setname(e.target.value);
                                    }}
                                />

                            </div>
                        </div>
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
                       
                        
                        <Link to={"/Home"}>
                            <button
                                type="submit"
                                className="w-full mt-5 py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <FaSignInAlt className="inline mr-2" /> Sign Up
                            </button>
                        </Link>
                    </form>
                    <p className="text-center text-gray-500 text-sm mt-4">
                        Already have an account?{" "}
                        <a href="#" className="text-blue-600 hover:underline" onClick={handellogin}>
                            Log in
                        </a>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup