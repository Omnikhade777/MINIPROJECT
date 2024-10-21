import { useState } from "react";
import { FaArrowLeft, FaUser, FaIdBadge, FaVenusMars, FaBirthdayCake, FaPhoneAlt, FaHome } from "react-icons/fa";
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom'; 

const Patient = () => {
    const [fullname, setFullname] = useState("");
    const [patientid, setPatientid] = useState(0);
    const [Gender, setGender] = useState("");
    const [Birth, setBirth] = useState("");
    const [Mobile, setMobile] = useState("");
    const [Address, setAddress] = useState("");

    const navigate = useNavigate(); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        const patientData = {
            name: fullname,
            patientId: patientid,
            gender: Gender,
            dob: Birth,
            mobile: Mobile,
            address: Address,
        };

        try {
            const response = await axios.post('http://localhost:5000/api/patient', patientData);
        
            navigate('/seateallotmnet', {
                state: {
                    doctorAssigned: response.data.doctorAssigned,
                    roomNumber: response.data.roomNumber,
                    patient: patientData 
                }
            });
        } catch (error) {
            console.error('There was an error adding the patient!', error);
        }
    };

    return (
        <div className="h-screen flex items-center justify-center bg-gradient-to-r from-orange-400 to-yellow-500">
            <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg relative">
                <button 
                    className="absolute top-4 left-4 flex items-center text-gray-600 hover:text-gray-900"
                    onClick={() => window.history.back()}
                >
                    <FaArrowLeft className="mr-2" /> Back
                </button>

                <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
                    Patient Information
                </h2>

                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="flex items-center">
                        <FaUser className="text-orange-500 mr-3" />
                        <div className="w-full">
                            <label className="block text-sm font-medium">Full Name</label>
                            <input type="text"
                            onChange={(e) => setFullname(e.target.value)}
                            className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-orange-500" />
                        </div>
                    </div>

                    <div className="flex items-center">
                        <FaIdBadge className="text-orange-500 mr-3" />
                        <div className="w-full">
                            <label className="block text-sm font-medium">Patient ID</label>
                            <input type="text" 
                            onChange={(e) => setPatientid(e.target.value)}
                            className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-orange-500" />
                        </div>
                    </div>

                    <div className="flex items-center">
                        <FaVenusMars className="text-orange-500 mr-3" />
                        <div className="w-full">
                            <label className="block text-sm font-medium">Gender</label>
                            <select 
                            onChange={(e) => setGender(e.target.value)}
                            className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-orange-500">
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <FaBirthdayCake className="text-orange-500 mr-3" />
                        <div className="w-full">
                            <label className="block text-sm font-medium">Date of Birth</label>
                            <input type="date"
                            onChange={(e) => setBirth(e.target.value)}
                            className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-orange-500" />
                        </div>
                    </div>

                    <div className="flex items-center">
                        <FaPhoneAlt className="text-orange-500 mr-3" />
                        <div className="w-full">
                            <label className="block text-sm font-medium">Mobile</label>
                            <input type="tel" 
                            onChange={(e) => setMobile(e.target.value)}
                            className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-orange-500" />
                        </div>
                    </div>

                    <div className="flex items-center">
                        <FaHome className="text-orange-500 mr-3" />
                        <div className="w-full">
                            <label className="block text-sm font-medium">Address</label>
                            <input type="text"
                            onChange={(e) => setAddress(e.target.value)}
                            className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-orange-500" />
                        </div>
                    </div>
                    
                    <button type="submit" className="w-full py-3 px-4 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition duration-300">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Patient;
