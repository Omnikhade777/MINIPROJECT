import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Allocatedseate = () => {
   
    const location = useLocation();
    const { doctorAssigned, roomNumber, patient } = location.state || {};

    return (
        <div className="h-screen flex items-center justify-center bg-gradient-to-r from-yellow-400 to-orange-500">
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 rounded-lg shadow-2xl max-w-md w-full transform hover:scale-105 transition-transform duration-300"
            >
                <h2 className="text-3xl font-extrabold text-orange-600 mb-6 text-center">Patient Information</h2>

                <motion.p 
                    className="text-lg font-semibold text-gray-700 mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                >
                    <strong>Patient Name:</strong> <span className="text-gray-900">{patient?.name || "N/A"}</span>
                </motion.p>

                <motion.p 
                    className="text-lg font-semibold text-gray-700 mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.4 }}
                >
                    <strong>Doctor Assigned: Dr.</strong> <span className="text-gray-900">{doctorAssigned || "N/A"}</span>
                </motion.p>

                <motion.p 
                    className="text-lg font-semibold text-gray-700 mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.4 }}
                >
                    <strong>Room Number:</strong> <span className="text-gray-900">{roomNumber || "N/A"}</span>
                </motion.p>

                <motion.div 
                    className="flex justify-center mt-8"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.4 }}
                >
                    <button 
                        className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-full shadow-lg hover:bg-orange-600 transition duration-300"
                        onClick={() => window.history.back()}
                    >
                        Back
                    </button>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Allocatedseate;
