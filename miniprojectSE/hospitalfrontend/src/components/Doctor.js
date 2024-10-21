import { useState } from "react";
import axios from 'axios';
import { FaArrowLeft, FaUserMd, FaIdBadge, FaUser, FaClock, FaPhone } from "react-icons/fa";
const Doctor = () => {


const handleSubmit = async (e) => {
    e.preventDefault();
    const doctorData = { name, doctorId: id, specialization: Specialization, gender, timing: timming, mobile: Mobile };

    try {
        await axios.post('http://localhost:5000/api/doctor', doctorData);
        alert("Doctor added successfully!");
    } catch (error) {
        console.error("Error adding doctor:", error);
        alert("There was an error adding the doctor.");
    }
};

    const [name,setname]=useState("");
    const[id,setid]=useState(0);
    const[Specialization,setSpecialization]=useState("");
    const[gender,setgender]=useState("");
    const[timming,settimming]=useState(0);
    const[Mobile,setMobile]=useState("");
        return (
        <div className="h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
            <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg relative">
                <button 
                    className="absolute top-4 left-4 flex items-center text-gray-600 hover:text-gray-900"
                    onClick={() => window.history.back()}
                >
                    <FaArrowLeft className="mr-2" /> Back
                </button>
                <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
                    <FaUserMd className="inline-block text-green-500 mr-2" /> Doctor Information
                </h2>
                <form className="space-y-6"  onSubmit={handleSubmit} >
                    <div className="flex items-center">
                        <FaUser className="text-green-500 mr-3" />
                        <div className="w-full">
                            <label className="block text-sm font-medium">Full Name</label>
                            <input type="text"
                            onChange={(e)=>{
                                setname(e.target.value);
                            }}
                             className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500" />
                        </div>
                    </div>
                    <div className="flex items-center">
                        <FaIdBadge className="text-green-500 mr-3" />
                        <div className="w-full">
                            <label className="block text-sm font-medium">Doctor ID</label>
                            <input type="text"
                            onChange={(e)=>{
                                setid(e.target.value);
                            }}
                             className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500" />
                        </div>
                    </div>
                    <div className="flex items-center">
                        <FaUserMd className="text-green-500 mr-3" />
                        <div className="w-full">
                            <label className="block text-sm font-medium">Specialization</label>
                            <input type="text" 
                            onChange={(e)=>{
                                setSpecialization(e.target.value);
                            }}
                            className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500" />
                        </div>
                    </div>
                    <div className="flex items-center">
                        <FaUser className="text-green-500 mr-3" />
                        <div className="w-full">
                            <label className="block text-sm font-medium">Gender</label>
                            <select 
                            onChange={(e)=>{
                                setgender(e.target.value)
                            }}
                            className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500">
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <FaClock className="text-green-500 mr-3" />
                        <div className="w-full">
                            <label className="block text-sm font-medium">Timing</label>
                            <input type="text"
                            onChange={(e)=>{
                                settimming(e.target.value);
                            }}
                             className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500" />
                        </div>
                    </div>
                    <div className="flex items-center">
                        <FaPhone className="text-green-500 mr-3" />
                        <div className="w-full">
                            <label className="block text-sm font-medium">Mobile</label>
                            <input type="tel" 
                            onChange={(e)=>{
                                setMobile(e.target.value);
                            }}
                            className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500" />
                        </div>
                    </div>
                    <button className="w-full py-3 px-4 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};
export default Doctor;